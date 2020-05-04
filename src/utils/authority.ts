import store from '../store';
import { UserRole } from '@/api/global';

const getRole = ()=>{
  return store.getState().global.user.role
}

const checkAuthority = (roleKeys: UserRole[])=>{
  const currentRole = getRole();
  return roleKeys.includes(currentRole)
}

export {
  checkAuthority
}