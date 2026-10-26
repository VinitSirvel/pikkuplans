import http from 'node:http';
import worker from '../worker/index.js';
const args=process.argv.slice(2), pi=args.indexOf('--port');
const port=Number(pi>=0?args[pi+1]:process.env.PORT||5173);
http.createServer(async(req,res)=>{try{const r=await worker.fetch(new Request('http://'+req.headers.host+req.url),{},{waitUntil:p=>p.catch(()=>{})});res.writeHead(r.status,Object.fromEntries(r.headers));res.end(Buffer.from(await r.arrayBuffer()));}catch(e){console.error(e.message);res.writeHead(500);res.end('Preview error');}}).listen(port,'0.0.0.0',()=>console.log('Preview ready on '+port));
