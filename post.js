let http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    let List='';
    req.on('data',function (v) {
        List+=v
    });
    req.on('end',function () {
        let obj= JSON.parse(List);
        if (obj.user==='root' && obj.password==='123456') {
            res.end('1');
        }else {
            res.end('-1');
        }
    });
}).listen(3000,()=>{
    console.log('服务器启动成功')
});