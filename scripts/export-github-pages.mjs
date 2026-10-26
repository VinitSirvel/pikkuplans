import {mkdir,writeFile} from 'node:fs/promises';
import worker from '../worker/index.js';
const backend='https://pikku-plans.sageswift16.chatgpt.site';
let html=await(await worker.fetch(new Request(backend+'/'),{})).text();
html=html.replaceAll('src="/natural-families-v2.webp"','src="./natural-families-v2.webp"').replaceAll("fetch('/api/",`fetch('${backend}/api/`);
// The API is hosted separately; no credentials or subscriber data are exported.
await mkdir('docs',{recursive:true});
await writeFile('docs/index.html',html);
const image=await worker.fetch(new Request(backend+'/natural-families-v2.webp'),{});
await writeFile('docs/natural-families-v2.webp',Buffer.from(await image.arrayBuffer()));
await writeFile('docs/.nojekyll','');
console.log('GitHub Pages frontend prepared in docs/. Live public events use the existing hosted API. ');
