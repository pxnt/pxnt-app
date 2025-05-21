import { createClient } from '@supabase/supabase-js';
import type { SessionTracking } from '../../src/types/session_tracking';

const supabaseUrl = process.env.VITE_SUPABASE_URL as string;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

function handleOoptionsRequest(event: any) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
    body: '',
  };
}

export async function handler(event: any, context: any) {
  if (event.httpMethod === 'OPTIONS') {
    return handleOoptionsRequest(event);
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: 'Method not allowed',
      }),
    };
  }

  const payload = JSON.parse(event.body);

  return handlePushSessionTracking(payload);
}

async function handlePushSessionTracking(payload: SessionTracking) {
  try {
    await supabase.from('session_tracking').insert(payload);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Session tracking data pushed successfully',
      }),
    };
  } catch (error) {
    console.error(error);

    return error;
  }
}