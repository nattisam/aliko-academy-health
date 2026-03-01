
-- Create partner category enum
CREATE TYPE public.partner_category AS ENUM ('clinical', 'career', 'sponsor');

-- Create partners table
CREATE TABLE public.partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category partner_category NOT NULL,
  organization_type TEXT,
  region TEXT,
  description TEXT,
  programs TEXT[] DEFAULT '{}',
  hiring_roles TEXT,
  logo_url TEXT,
  website_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

-- Public can view active partners
CREATE POLICY "Public can view active partners"
ON public.partners
FOR SELECT
USING ((is_active = true) OR is_admin_or_above());

-- Admins can insert
CREATE POLICY "Admins can insert partners"
ON public.partners
FOR INSERT
WITH CHECK (is_admin_or_above());

-- Admins can update
CREATE POLICY "Admins can update partners"
ON public.partners
FOR UPDATE
USING (is_admin_or_above());

-- Admins can delete
CREATE POLICY "Admins can delete partners"
ON public.partners
FOR DELETE
USING (is_admin_or_above());

-- Auto-update timestamp
CREATE TRIGGER update_partners_updated_at
BEFORE UPDATE ON public.partners
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for partner logos
INSERT INTO storage.buckets (id, name, public) VALUES ('partner-logos', 'partner-logos', true);

-- Storage policies for partner logos
CREATE POLICY "Partner logos are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'partner-logos');

CREATE POLICY "Admins can upload partner logos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'partner-logos' AND is_admin_or_above());

CREATE POLICY "Admins can update partner logos"
ON storage.objects FOR UPDATE
USING (bucket_id = 'partner-logos' AND is_admin_or_above());

CREATE POLICY "Admins can delete partner logos"
ON storage.objects FOR DELETE
USING (bucket_id = 'partner-logos' AND is_admin_or_above());
