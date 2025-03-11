import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ynusfpheznalnvjcqvaz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludXNmcGhlem5hbG52amNxdmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MTEwNzIsImV4cCI6MjA1NjE4NzA3Mn0.NVw_Dfk2210N2EaUGDB4Cu9gvq7DX_vTvRKlJ6Rsj_Q'

if (!supabaseUrl || !supabaseKey)
  throw new Error(
    "Couldn't find your supabase client config. Please check if 'REACT_APP_SUPABASE_URL' and 'REACT_APP_SUPABASE_ANON_KEY' is properly set in your environment variables"
  );

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;