import Cookies from 'js-cookie'

const COOKIE_NAME = {
  uid: 'iud',
  name: 'name',
  pwd: 'wpd'
}

const checkUser = ()=>{
  const uid = Cookies.get(COOKIE_NAME.uid);
  const pwd = Cookies.get(COOKIE_NAME.pwd);
  if(uid && pwd){
    return {
      uid,
      pwd
    }
  }
  return null;
  
};
const saveUser = (user:any)=>{
  const now = Date.now();
  const expires = new Date(now + 2 * 60 * 60 * 1000)
  for(let key in user){
    Cookies.set(key,user[key],{
      expires
    })
  }
}
const removeUser= ()=>{}
export {
  checkUser,
  saveUser,
  removeUser
}