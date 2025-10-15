import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://afxhuziwmpfmhsakezrb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmeGh1eml3bXBmbWhzYWtlenJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0OTE2NDEsImV4cCI6MjA3NjA2NzY0MX0.vMZucObapj4f_fpRdBTRwbErquSZp7vRw-71UqcdSKQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
