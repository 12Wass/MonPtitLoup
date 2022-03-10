import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient("https://fgbivrwdakdlprprybkg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnYml2cndkYWtkbHBycHJ5YmtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYzNDcxMDMsImV4cCI6MTk2MTkyMzEwM30.GJwnChNecChXTajUsnRy1xzO2o-dwXoikt3odYbHYW4", {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
