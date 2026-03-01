
-- Create partnership inquiry status enum
CREATE TYPE public.partnership_status AS ENUM ('new', 'contacted', 'in_discussion', 'approved', 'declined');

-- Create partnership_inquiries table
CREATE TABLE public.partnership_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization_type TEXT NOT NULL,
  partnership_type TEXT NOT NULL,
  message TEXT,
  status partnership_status NOT NULL DEFAULT 'new',
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;

-- Public can submit
CREATE POLICY "Anyone can submit partnership inquiries"
ON public.partnership_inquiries
FOR INSERT
WITH CHECK (true);

-- Admins can view
CREATE POLICY "Admins can view partnership inquiries"
ON public.partnership_inquiries
FOR SELECT
USING (is_viewer_or_above());

-- Admins can update
CREATE POLICY "Admins can update partnership inquiries"
ON public.partnership_inquiries
FOR UPDATE
USING (is_admin_or_above());

-- Admins can delete
CREATE POLICY "Admins can delete partnership inquiries"
ON public.partnership_inquiries
FOR DELETE
USING (is_admin_or_above());

-- Auto-update timestamp trigger
CREATE TRIGGER update_partnership_inquiries_updated_at
BEFORE UPDATE ON public.partnership_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
