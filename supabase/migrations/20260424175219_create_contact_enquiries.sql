/*
  # Create contact_enquiries table

  ## Purpose
  Stores consultation enquiry form submissions from website visitors.

  ## New Tables
  - `contact_enquiries`
    - `id` (uuid, primary key)
    - `name` (text, required) — submitter's full name
    - `email` (text, required) — submitter's email address
    - `phone` (text, nullable) — optional phone number
    - `company` (text, nullable) — optional company/organisation name
    - `practice_area` (text, nullable) — selected practice area
    - `jurisdiction` (text, nullable) — selected jurisdiction (India / US / Cross-border)
    - `message` (text, required) — description of the legal matter
    - `created_at` (timestamptz) — submission timestamp

  ## Security
  - RLS enabled — table is locked by default
  - Public INSERT allowed so anonymous website visitors can submit enquiries
  - SELECT restricted to authenticated users (firm staff) only
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  practice_area text,
  jurisdiction text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact enquiry"
  ON contact_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated staff can view enquiries"
  ON contact_enquiries
  FOR SELECT
  TO authenticated
  USING (true);
