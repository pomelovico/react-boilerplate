import {isArray, isObject, get} from 'lodash';

const stringify = (source:any)=>{
  if(isArray(source) || isObject(source)){
    const arr:string[] = [];
    const keys = Object.keys(source);
    keys.forEach(key=>{
      const value = get(source,key);
      if(isArray(value)){
        value.forEach((v,i)=>{
          v && arr.push(`${key}[${i}]=${v}`)
        })
      }else if(isObject(value)){
        for(let k in value){
          arr.push(`${key}[${k}]=${get(value,k,'')}`)
        }
      }else{
        arr.push(`${key}=${value}`)
      }
    })
    return encodeURI(arr.join('&'))
  }
  return encodeURI(source)
}

export {
  stringify
}