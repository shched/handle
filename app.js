var express = require('express');
var app = express();

app.configure(function() {
    app.engine('html', require('uinexpress').__express) // Используем функцию "template" библиотеки underscore для рендеринга
    app.set('view engine', 'html')                      
    app.set('views', __dirname + "/tpl");
});

app.get('/', function(req, res){          // Обрабатываем запрос корневой страницы "/"
    res.render('index.html');
});
app.get('/news', function(req, res){ // Обрабатываем запрос страницы "/news"
    res.render('news.html');
});

var port = process.env.PORT || 5000;       
app.listen(port)                           // Запускаем сервер на 5000 порту, если не указана переменная окружения "port" 
console.log("Listening at " + port)        // Пишем в консоль, что запустились
