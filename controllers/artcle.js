let a = exports;
const fs = require('fs');
const path = require('path');

a.getTitle = async (ctx,next)=>{
    let files = fs.readdirSync(path.join(ctx.config.resourceDir,ctx.params.type));
    files = files.map(f=>{
        let i = -1;
        if((i = f.indexOf('.')) != -1) {
            let filename = f.substr(0,i);
            return {title:f.substr(0,i),dir:'nodejs/' + f}; 
        } else {
            return null;
        }
    });

  await ctx.render('time', {
    dir: files
  })
}