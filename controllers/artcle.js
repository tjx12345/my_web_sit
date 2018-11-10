let a = exports;
const fs = require('fs');
const path = require('path');
function getDir({dir,filter}){
    let files = fs.readdirSync(dir);
    return files.map(f=>{
        if (filter === undefined)return {title:f};
        let i = -1;
        if((i = f.indexOf(filter)) != -1) {
            let filename = f.substr(0,i);
            return {title:f.substr(0,i),dir:dir + '/' + f}; 
        } else {
            return null;
        }
    });
}
a.getTitle = async (ctx,next)=>{
   let files = getDir({dir:path.join(ctx.config.resourceDir,ctx.params.type),filter:'.'});

  await ctx.render('time', {
    dir: files
  })
}
a.showIndex = async (ctx,next) => {
     let categories = getDir({dir:ctx.config.resourceDir});
     console.log(categories)
     await ctx.render('index',{
        categories
     });

}