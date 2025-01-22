// supabase.js
import { createClient } from '@supabase/supabase-js'

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

let supabaseUrl
let supabaseAnonKey

if (isDevelopment) {
  supabaseUrl = process.env.REACT_APP_SUPABASE_URL
  supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY
} else if (isProduction) {
  supabaseUrl = process.env.REACT_APP_SUPABASE_URL
  supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY
}

if (!supabaseUrl) {
  throw new Error('supabaseUrl is required.')
}

if (!supabaseAnonKey) {
  throw new Error('supabaseAnonKey is required.')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase