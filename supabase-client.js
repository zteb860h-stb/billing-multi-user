import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://kqlybtiedkcvtdbqdjvw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxbHlidGllZGtjdnRkYnFkanZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MDQ3NDQsImV4cCI6MjA3NjI4MDc0NH0.jto_E_3vniGHnXdZl5bcvbReL4GrroPxnL4MapOw1Y0';

export const supabase = createClient(supabaseUrl, supabaseKey);
