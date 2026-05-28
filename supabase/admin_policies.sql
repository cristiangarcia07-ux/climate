-- Promote your user to admin
UPDATE "usuario_panel_control"
SET "privilegio_id" = 1
WHERE "email" = 'cristiangarcia07@iesamachado.org';

-- Helper function: check if current user is admin (bypasses RLS via SECURITY DEFINER)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM "usuario_panel_control" upc
    JOIN "privilegio" p ON upc."privilegio_id" = p."id"
    WHERE upc."user_id" = auth.uid()
      AND p."nombre" = 'admin'
  );
$$;

-- Admin all on pais
DROP POLICY IF EXISTS "Admin all" ON "pais";
CREATE POLICY "Admin all" ON "pais"
    FOR ALL USING (is_admin());

-- Admin all on estado_Com_autonom
DROP POLICY IF EXISTS "Admin all" ON "estado_Com_autonom";
CREATE POLICY "Admin all" ON "estado_Com_autonom"
    FOR ALL USING (is_admin());

-- Admin all on ciudad
DROP POLICY IF EXISTS "Admin all" ON "ciudad";
CREATE POLICY "Admin all" ON "ciudad"
    FOR ALL USING (is_admin());

-- Admin all on api_links
DROP POLICY IF EXISTS "Admin all" ON "api_links";
CREATE POLICY "Admin all" ON "api_links"
    FOR ALL USING (is_admin());

-- Admin can see all users
DROP POLICY IF EXISTS "Admin select all" ON "usuario_panel_control";
CREATE POLICY "Admin select all" ON "usuario_panel_control"
    FOR SELECT USING (is_admin());

-- Admin can update any user's role
DROP POLICY IF EXISTS "Admin update" ON "usuario_panel_control";
CREATE POLICY "Admin update" ON "usuario_panel_control"
    FOR UPDATE USING (is_admin());
