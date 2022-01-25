import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const apiKey = process.env.SUPABASE_API_KEY
const apiUrl = process.env.SUPABASE_API_URL

if (!apiKey || !apiUrl) {
  throw new Error('Supabase not configured')
}

const supabase = createClient(apiUrl, apiKey)

export default supabase
