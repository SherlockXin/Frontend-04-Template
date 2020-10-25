const http = require('http');

http
  .createServer((request, response) => {
    let body = [];
    request
      .on('error', (err) => {
        console.log(err);
      })
      .on('data', (chunk) => {
        body.push(chunk.toString());
      })
      .on('end', () => {
        const bodyBuffer = Buffer.from(body.toString());
        body = Buffer.concat([bodyBuffer]).toString();
        console.log('body====', body);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`
          <html>
            <head>
              <style>
                #container {
                  display: flex;
                  width: 500px;
                  height: 500px;
                  background-color: cgb(255,255,255);
                }
                #container #mydiv {
                  width: 300px;
                  height: 100px;
                  background-color: rgb(255,0,0);
                }
                #container .div1 {
                  flex: 1;
                  background-color: rgb(0,255,0);
                }
              </style>
            </head>
            <body>
              <div id="container">
                <div id="mydiv"></div>
                <div class="div1"></div>
              </div>
            </body>
          </html>
        `);
      });
  })
  .listen(8088);

console.log('server started');
