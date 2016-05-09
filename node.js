var connect = require("connect");

var app = connect.createServer().use(connect.static(__dirname + '/public'));

app.listen(8180);
