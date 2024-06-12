const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Hello World </title></head>");
    res.write("<body> Hello world </body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);
