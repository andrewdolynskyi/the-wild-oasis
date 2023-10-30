import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mfcwxdgabqtkqhjrqpbr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mY3d4ZGdhYnF0a3FoanJxcGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NTIwNDksImV4cCI6MjAwODUyODA0OX0.G-rAHPuEePu8yV8ZByoAoSZHMRzkY40cl8Bek0ZH7io";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
