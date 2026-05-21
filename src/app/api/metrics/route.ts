import { NextRequest, NextResponse } from 'next/server';
import { register } from '@/lib/metrics';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const token = process.env.PROMETHEUS_METRICS_TOKEN;
  if (!token) {
    return new NextResponse('metrics token not configured', { status: 403 });
  }

  const auth = request.headers.get('authorization') ?? '';
  const presented = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!presented || presented !== token) {
    return new NextResponse(null, { status: 403 });
  }

  const metrics = await register.metrics();
  return new NextResponse(metrics, {
    headers: { 'Content-Type': register.contentType },
  });
}
