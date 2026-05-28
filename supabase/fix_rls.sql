ALTER TABLE api_links ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read" ON api_links;
CREATE POLICY "Public read" ON api_links FOR SELECT USING (true);
