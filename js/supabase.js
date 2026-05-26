import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
