import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sciqlaleilrgxxhvhebf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjaXFsYWxlaWxyZ3h4aHZoZWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTM3NjUsImV4cCI6MjA4NjM2OTc2NX0.Nbf1IkgRm-4Xk0Azxa4DccqXc97o-TmQ_L9GAfOBCD4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
