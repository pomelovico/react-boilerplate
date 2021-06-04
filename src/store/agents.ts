import { Agent, AgentStatus } from '@/entities/agent';
import { getAgentsService } from '@/service/dashboard';
import create, { SetState } from 'zustand';

interface AgentsState {
  list: Agent[];
  category: any;
}

const getDefaultState = (): AgentsState => ({
  list: [],
  category: 0,
});

const getActions = <T extends AgentsState>(set: SetState<T>) => {
  return {
    loadAgents: async () => {
      const { data } = await getAgentsService();
      set({ list: data });
    },
  };
};

type State = AgentsState & ReturnType<typeof getActions>;

export const useAgentsStore = create<State>((set) => {
  return {
    ...getDefaultState(),
    ...getActions(set),
  };
});
