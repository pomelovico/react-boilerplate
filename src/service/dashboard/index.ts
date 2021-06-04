import request from '@/request';
import { Agent } from './types';

export * from './types';

export const getAgents = () => {
  return request.get<Agent[]>(`/agents`);
};
