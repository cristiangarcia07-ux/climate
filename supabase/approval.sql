-- Add approval column
ALTER TABLE "usuario_panel_control"
ADD COLUMN IF NOT EXISTS "aprobado" BOOLEAN NOT NULL DEFAULT FALSE;

-- Update trigger to set new users as unapproved
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public."usuario_panel_control" ("user_id", "email", "privilegio_id", "aprobado")
  VALUES (NEW.id, NEW.email, 3, FALSE)
  ON CONFLICT ("user_id") DO NOTHING;
  RETURN NEW;
END;
$$;

-- Admin can see all users (update existing policy)
DROP POLICY IF EXISTS "Admin select all" ON "usuario_panel_control";
CREATE POLICY "Admin select all" ON "usuario_panel_control"
    FOR SELECT USING (is_admin());
