-- ============================================================
-- PROMOTE A USER TO ADMIN
-- Run this in Supabase SQL Editor.
--
-- 1. (Optional) Creates the is_admin() helper function
-- 2. Creates the promote_to_admin(email) procedure
-- 3. Sets up admin RLS policies on all tables
--
-- Usage:
--   CALL promote_to_admin('user@example.com');
-- ============================================================

-- ========================
-- 1. HELPER: is_admin()
-- Returns TRUE if the current auth user has role 'admin'.
-- SECURITY DEFINER so it bypasses RLS and can read usuario_panel_control.
-- ========================
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

-- ========================
-- 2. PROCEDURE: promote_to_admin(email)
-- Sets the user's role to admin and marks them approved.
-- SECURITY DEFINER so it can update the row regardless of RLS.
-- ========================
CREATE OR REPLACE PROCEDURE promote_to_admin(target_email TEXT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE "usuario_panel_control"
  SET "privilegio_id" = (SELECT "id" FROM "privilegio" WHERE "nombre" = 'admin'),
      "aprobado" = TRUE
  WHERE "email" = target_email;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'User with email "%" not found in usuario_panel_control', target_email;
  END IF;
END;
$$;

-- ========================
-- 3. ADMIN RLS POLICIES
-- Allow admins to bypass RLS on all data tables.
-- ========================

-- PAIS
DROP POLICY IF EXISTS "Admin all" ON "pais";
CREATE POLICY "Admin all" ON "pais"
    FOR ALL USING (is_admin());

-- ESTADO_COM_AUTONOM
DROP POLICY IF EXISTS "Admin all" ON "estado_Com_autonom";
CREATE POLICY "Admin all" ON "estado_Com_autonom"
    FOR ALL USING (is_admin());

-- CIUDAD
DROP POLICY IF EXISTS "Admin all" ON "ciudad";
CREATE POLICY "Admin all" ON "ciudad"
    FOR ALL USING (is_admin());

-- API_LINKS
DROP POLICY IF EXISTS "Admin all" ON "api_links";
CREATE POLICY "Admin all" ON "api_links"
    FOR ALL USING (is_admin());

-- USUARIO_PANEL_CONTROL (select all + update roles)
DROP POLICY IF EXISTS "Admin select all" ON "usuario_panel_control";
CREATE POLICY "Admin select all" ON "usuario_panel_control"
    FOR SELECT USING (is_admin());

DROP POLICY IF EXISTS "Admin update" ON "usuario_panel_control";
CREATE POLICY "Admin update" ON "usuario_panel_control"
    FOR UPDATE USING (is_admin());

-- MODERA_PAIS
DROP POLICY IF EXISTS "Admin all" ON "modera_pais";
CREATE POLICY "Admin all" ON "modera_pais"
    FOR ALL USING (is_admin());

-- ========================
-- EXAMPLE: Promote a specific user
-- ========================
-- CALL promote_to_admin('cristiangarcia07@iesamachado.org');
