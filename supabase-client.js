import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ddrmxhrcatvomusplsow.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkcm14aHJjYXR2b211c3Bsc293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5MTYwNzUsImV4cCI6MjA5OTQ5MjA3NX0.MkZPcy7UoqhOs6lF607H8VOHdlrzQGGcNeaBeSd9Ip8';

export const supabase = createClient(supabaseUrl, supabaseKey);
