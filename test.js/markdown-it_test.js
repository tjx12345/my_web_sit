var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
const fs = require('fs');
let root ='C:\\Users\\heima\\Desktop\\myblog\\categories\\nodejs';
let files = fs.readdirSync(root)

files.forEach(f=>{
    if(f.indexOf('.')!=-1) {
       let str = fs.readFileSync(root+'\\'+ f,'utf8');
        var result = md.renderInline(str);
        fs.writeFileSync(root+'\\tmp_'+f,result);
    }
})