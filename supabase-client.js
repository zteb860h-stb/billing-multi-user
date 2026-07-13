import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://bppcjturvdjxfrnofdeg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwcGNqdHVydmRqeGZybm9mZGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5MjUwNTYsImV4cCI6MjA5OTUwMTA1Nn0.bEEa-J3BgCdrQ-P0RalPWMAZ0Ajjp5isEDf8m774VtY';

export const supabase = createClient(supabaseUrl, supabaseKey);
