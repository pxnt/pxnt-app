import { createClient } from "@supabase/supabase-js";
import type { SessionTracking } from "~/types/session_tracking";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function useSupabase() {

  async function pushSessionTracking(args: SessionTracking) {
    try {
      await supabase.from('session_tracking').insert(args);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    pushSessionTracking,
  };
}
