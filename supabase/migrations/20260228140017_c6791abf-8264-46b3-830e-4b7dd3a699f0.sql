
-- Institutional Categories table
CREATE TABLE public.institutional_categories (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  short_name text NOT NULL,
  slug text NOT NULL UNIQUE,
  overview text,
  icon text DEFAULT 'BookOpen',
  target_audience text[] DEFAULT '{}',
  duration_options text[] DEFAULT '{}',
  delivery_formats text[] DEFAULT '{}',
  certification_types text[] DEFAULT '{}',
  ideal_for text[] DEFAULT '{}',
  display_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Institutional Programs table
CREATE TABLE public.institutional_programs (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id uuid NOT NULL REFERENCES public.institutional_categories(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  duration text,
  delivery text,
  display_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.institutional_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institutional_programs ENABLE ROW LEVEL SECURITY;

-- Public read for active items
CREATE POLICY "Public can view active categories" ON public.institutional_categories
  FOR SELECT USING ((is_active = true) OR is_admin_or_above());

CREATE POLICY "Public can view active programs" ON public.institutional_programs
  FOR SELECT USING ((is_active = true) OR is_admin_or_above());

-- Admin CRUD for categories
CREATE POLICY "Admins can insert categories" ON public.institutional_categories
  FOR INSERT WITH CHECK (is_admin_or_above());
CREATE POLICY "Admins can update categories" ON public.institutional_categories
  FOR UPDATE USING (is_admin_or_above());
CREATE POLICY "Admins can delete categories" ON public.institutional_categories
  FOR DELETE USING (is_admin_or_above());

-- Admin CRUD for programs
CREATE POLICY "Admins can insert inst programs" ON public.institutional_programs
  FOR INSERT WITH CHECK (is_admin_or_above());
CREATE POLICY "Admins can update inst programs" ON public.institutional_programs
  FOR UPDATE USING (is_admin_or_above());
CREATE POLICY "Admins can delete inst programs" ON public.institutional_programs
  FOR DELETE USING (is_admin_or_above());

-- Updated_at triggers
CREATE TRIGGER update_institutional_categories_updated_at
  BEFORE UPDATE ON public.institutional_categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_institutional_programs_updated_at
  BEFORE UPDATE ON public.institutional_programs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Indexes
CREATE INDEX idx_inst_programs_category ON public.institutional_programs(category_id);
CREATE INDEX idx_inst_categories_slug ON public.institutional_categories(slug);
