let a = exports;
const fs = require('fs');
const path = require('path');
function getDir({dir='',filter,ctx}){
    let files = fs.readdirSync(path.join(ctx.config.resourceDir,dir));
    return files.map(f=>{
        if (filter === undefined)return {title:f};
        let i = -1;
        if((i = f.indexOf(filter)) != -1) {
            let filename = f.substr(0,i);
            return {title:f.substr(0,i),dir:dir+ '/' + f}; 
        } else {
            return null;
        }
    });
}
a.getTitle = async (ctx,next)=>{
   let files = getDir({dir:ctx.params.type,filter:'.',ctx});

  await ctx.render('time', {
    dir: files
  })
}
a.showIndex = async (ctx,next) => {
     let categories = getDir({ctx});
     await ctx.render('index',{
        categories
     });

}