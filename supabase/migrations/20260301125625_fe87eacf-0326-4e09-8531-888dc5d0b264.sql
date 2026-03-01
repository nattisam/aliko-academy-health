
-- Add image_url columns to programs and institutional tables
ALTER TABLE public.programs ADD COLUMN IF NOT EXISTS image_url text;
ALTER TABLE public.institutional_categories ADD COLUMN IF NOT EXISTS image_url text;
ALTER TABLE public.institutional_programs ADD COLUMN IF NOT EXISTS image_url text;

-- Create storage bucket for program/institutional images
INSERT INTO storage.buckets (id, name, public) VALUES ('program-images', 'program-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage bucket for application documents
INSERT INTO storage.buckets (id, name, public) VALUES ('application-documents', 'application-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for program-images (public read, admin write)
CREATE POLICY "Public can view program images"
ON storage.objects FOR SELECT
USING (bucket_id = 'program-images');

CREATE POLICY "Admins can upload program images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'program-images' AND public.is_admin_or_above());

CREATE POLICY "Admins can update program images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'program-images' AND public.is_admin_or_above());

CREATE POLICY "Admins can delete program images"
ON storage.objects FOR DELETE
USING (bucket_id = 'program-images' AND public.is_admin_or_above());

-- Storage policies for application-documents (anyone can upload, admins can view/download)
CREATE POLICY "Anyone can upload application documents"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'application-documents');

CREATE POLICY "Admins can view application documents"
ON storage.objects FOR SELECT
USING (bucket_id = 'application-documents' AND public.is_admin_or_above());

CREATE POLICY "Admins can delete application documents"
ON storage.objects FOR DELETE
USING (bucket_id = 'application-documents' AND public.is_admin_or_above());
