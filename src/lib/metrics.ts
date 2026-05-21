import { Registry, collectDefaultMetrics } from 'prom-client';

const globalForProm = global as typeof global & { promRegistry?: Registry };

if (!globalForProm.promRegistry) {
  globalForProm.promRegistry = new Registry();
  collectDefaultMetrics({ register: globalForProm.promRegistry });
}

export const register = globalForProm.promRegistry!;
