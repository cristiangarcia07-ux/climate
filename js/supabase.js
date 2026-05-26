import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export function onSessionChange(callback) {
  return supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') {
      callback(session?.user ?? null);
    }
  });
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}
