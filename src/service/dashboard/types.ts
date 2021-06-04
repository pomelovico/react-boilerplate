export enum OS {
  windows = 'windows',
  ubuntu = 'ubuntu',
  debian = 'debian',
  suse = 'suse',
  centos = 'centos',
}
export enum AgentStatus {
  building = 'building',
  idle = 'idle',
}

export enum AgentType {
  physical = 'physical',
  virtual = 'virtual',
}

export interface Agent {
  id: string | number;
  name: string;
  os: OS;
  status: AgentStatus;
  type: AgentType;
  ip: string;
  location: string;
  resources: string[];
}
