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
                body div img {
                  width: 100%;
                  height: auto;
                }
                body div #img {
                  width: 50%;
                  height: 50%;
                }
              </style>
            </head>
            <body>
              <div>
                <img id="img" />
                <img />
              </div>
            </body>
          </html>
        `);
      });
  })
  .listen(8088);

console.log('server started');
