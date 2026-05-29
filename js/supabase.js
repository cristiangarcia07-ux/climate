import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js?v=8';

if (typeof window.supabase === 'undefined') {
  throw new Error('supabase.umd.js failed to load — window.supabase is undefined');
}
if (typeof window.supabase.createClient !== 'function') {
  throw new Error('supabase.umd.js loaded but createClient is missing');
}

export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
