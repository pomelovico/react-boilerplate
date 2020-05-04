const cp = require('child_process');
const readline = require('readline');
const path = require('path');
const fs = require('fs');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

const scriptPath = process.env.INIT_CWD;

console.log(`即将创建组件，请输入组件名:`);

rl.on('line',(data)=>{
  const compoenntName = data;
  const cPath = path.resolve(scriptPath,compoenntName);
  fs.mkdirSync(cPath);
  const template = fs.readFileSync(path.resolve(__dirname,'./templates/fc/fc.tsx'),'utf8');
  const s = template.replace(/__Component__Name__/gm, compoenntName);
  fs.writeFileSync(path.resolve(cPath,`${compoenntName}.tsx`), s);
  fs.writeFileSync(path.resolve(cPath,`${compoenntName}.less`), "");
  console.log(`组件<${compoenntName}/>创建成功`);
  process.exit();
})