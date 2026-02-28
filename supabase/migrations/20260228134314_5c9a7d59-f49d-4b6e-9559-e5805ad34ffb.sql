
-- ============================================
-- ENUMS
-- ============================================
CREATE TYPE public.app_role AS ENUM ('super_admin', 'admin', 'staff', 'viewer');
CREATE TYPE public.application_status AS ENUM ('new', 'in_review', 'accepted', 'rejected', 'enrolled', 'withdrawn');
CREATE TYPE public.application_source AS ENUM ('website_form', 'enterprise', 'manual');
CREATE TYPE public.cohort_status AS ENUM ('open_for_enrollment', 'waitlist', 'closed');
CREATE TYPE public.enterprise_lead_status AS ENUM ('new', 'contacted', 'proposal_sent', 'won', 'lost');
CREATE TYPE public.program_category AS ENUM ('training', 'exam_prep');

-- ============================================
-- TABLE: user_roles (CREATED FIRST)
-- ============================================
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- ============================================
-- HELPER FUNCTIONS (after table exists)
-- ============================================
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.is_admin_or_above()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role IN ('super_admin', 'admin', 'staff'))
$$;

CREATE OR REPLACE FUNCTION public.is_viewer_or_above()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role IN ('super_admin', 'admin', 'staff', 'viewer'))
$$;

CREATE OR REPLACE FUNCTION public.is_super_admin()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'super_admin')
$$;

-- RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view roles" ON public.user_roles FOR SELECT TO authenticated USING (public.is_viewer_or_above());
CREATE POLICY "Super admins and admins can insert roles" ON public.user_roles FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'super_admin') OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Only super admins can update roles" ON public.user_roles FOR UPDATE TO authenticated USING (public.is_super_admin());
CREATE POLICY "Only super admins can delete roles" ON public.user_roles FOR DELETE TO authenticated USING (public.is_super_admin());

-- ============================================
-- TABLE: profiles
-- ============================================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.is_admin_or_above());
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid() OR public.is_admin_or_above());

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', ''));
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- TABLE: programs
-- ============================================
CREATE TABLE public.programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category program_category NOT NULL DEFAULT 'training',
  short_description TEXT,
  full_description TEXT,
  duration_weeks INTEGER,
  tuition NUMERIC(10,2),
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view active programs" ON public.programs FOR SELECT USING (is_active = true OR public.is_admin_or_above());
CREATE POLICY "Admins can insert programs" ON public.programs FOR INSERT TO authenticated WITH CHECK (public.is_admin_or_above());
CREATE POLICY "Admins can update programs" ON public.programs FOR UPDATE TO authenticated USING (public.is_admin_or_above());
CREATE POLICY "Admins can delete programs" ON public.programs FOR DELETE TO authenticated USING (public.is_admin_or_above());

-- ============================================
-- TABLE: cohorts
-- ============================================
CREATE TABLE public.cohorts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id UUID NOT NULL REFERENCES public.programs(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  days_of_week TEXT,
  time_range TEXT,
  location TEXT,
  status cohort_status NOT NULL DEFAULT 'open_for_enrollment',
  max_seats INTEGER,
  current_enrolled INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.cohorts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view cohorts" ON public.cohorts FOR SELECT USING (true);
CREATE POLICY "Admins can insert cohorts" ON public.cohorts FOR INSERT TO authenticated WITH CHECK (public.is_admin_or_above());
CREATE POLICY "Admins can update cohorts" ON public.cohorts FOR UPDATE TO authenticated USING (public.is_admin_or_above());
CREATE POLICY "Admins can delete cohorts" ON public.cohorts FOR DELETE TO authenticated USING (public.is_admin_or_above());

-- ============================================
-- TABLE: students
-- ============================================
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  date_of_birth DATE,
  address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view students" ON public.students FOR SELECT TO authenticated USING (public.is_viewer_or_above());
CREATE POLICY "Anyone can insert students" ON public.students FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can update students" ON public.students FOR UPDATE TO authenticated USING (public.is_admin_or_above());
CREATE POLICY "Admins can delete students" ON public.students FOR DELETE TO authenticated USING (public.is_admin_or_above());

-- ============================================
-- TABLE: applications
-- ============================================
CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE SET NULL,
  program_id UUID REFERENCES public.programs(id) ON DELETE SET NULL,
  cohort_id UUID REFERENCES public.cohorts(id) ON DELETE SET NULL,
  status application_status NOT NULL DEFAULT 'new',
  source application_source NOT NULL DEFAULT 'website_form',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view applications" ON public.applications FOR SELECT TO authenticated USING (public.is_viewer_or_above());
CREATE POLICY "Anyone can submit applications" ON public.applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can update applications" ON public.applications FOR UPDATE TO authenticated USING (public.is_admin_or_above());
CREATE POLICY "Admins can delete applications" ON public.applications FOR DELETE TO authenticated USING (public.is_admin_or_above());

-- ============================================
-- TABLE: enterprise_leads
-- ============================================
CREATE TABLE public.enterprise_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status enterprise_lead_status NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.enterprise_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view enterprise leads" ON public.enterprise_leads FOR SELECT TO authenticated USING (public.is_viewer_or_above());
CREATE POLICY "Anyone can submit enterprise leads" ON public.enterprise_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can update enterprise leads" ON public.enterprise_leads FOR UPDATE TO authenticated USING (public.is_admin_or_above());
CREATE POLICY "Admins can delete enterprise leads" ON public.enterprise_leads FOR DELETE TO authenticated USING (public.is_admin_or_above());

-- ============================================
-- TABLE: exam_prep_offerings
-- ============================================
CREATE TABLE public.exam_prep_offerings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  short_description TEXT,
  full_description TEXT,
  price NUMERIC(10,2),
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.exam_prep_offerings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view active exam prep" ON public.exam_prep_offerings FOR SELECT USING (is_active = true OR public.is_admin_or_above());
CREATE POLICY "Admins can insert exam prep" ON public.exam_prep_offerings FOR INSERT TO authenticated WITH CHECK (public.is_admin_or_above());
CREATE POLICY "Admins can update exam prep" ON public.exam_prep_offerings FOR UPDATE TO authenticated USING (public.is_admin_or_above());
CREATE POLICY "Admins can delete exam prep" ON public.exam_prep_offerings FOR DELETE TO authenticated USING (public.is_admin_or_above());

-- ============================================
-- TABLE: content_blocks
-- ============================================
CREATE TABLE public.content_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view content" ON public.content_blocks FOR SELECT USING (true);
CREATE POLICY "Admins can insert content" ON public.content_blocks FOR INSERT TO authenticated WITH CHECK (public.is_admin_or_above());
CREATE POLICY "Admins can update content" ON public.content_blocks FOR UPDATE TO authenticated USING (public.is_admin_or_above());
CREATE POLICY "Admins can delete content" ON public.content_blocks FOR DELETE TO authenticated USING (public.is_admin_or_above());

-- ============================================
-- TRIGGER: updated_at
-- ============================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql;

CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON public.programs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_cohorts_updated_at BEFORE UPDATE ON public.cohorts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON public.students FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON public.applications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_enterprise_leads_updated_at BEFORE UPDATE ON public.enterprise_leads FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_exam_prep_updated_at BEFORE UPDATE ON public.exam_prep_offerings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_content_blocks_updated_at BEFORE UPDATE ON public.content_blocks FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
