import { Agent } from '@/entities/agent';
import request from '@/request';

export const getAgentsService = () => {
  return request.get<Agent[]>(`/agents`);
};
