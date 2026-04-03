const html = require('fs').readFileSync('temp-aziz.html','utf8'); const m = html.match(/class=[^>]+grid[^>]+>([\s\S]*?)Client/); console.log(m ? m[0].substring(0, 800) : 'not found');
