import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jgknyrzbpzlamrjdykka.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impna255cnpicHpsYW1yamR5a2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwOTU3MTcsImV4cCI6MjAxNjY3MTcxN30.Nbu4IXxBM4aYVDclrkwIKR_Z5CCJ8bE8XmwE3ipFOnA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
