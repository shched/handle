var express = require('express');
var app = express();

app.configure(function() {
    app.engine('html', require('uinexpress').__express)    // Используем функцию "template" библиотеки underscore для рендеринга
    app.set('view engine', 'html')
    app.set('views', __dirname + "/tpl");
    app.set("view options", {layout: 'layout.html'});    // Файл layout.html по умолчанию будет оборачивать все шаблоны
    app.use(express.static(__dirname + "/public"));    // Делаем файлы из папки public доступными на сайте
});

app.get('/', function(req, res){    // Обрабатываем запрос корневой страницы "/"
    res.render('index.html');
});

app.get('/comments', function(req, res){    // Обрабатываем запрос страницы "/comments"
    res.render('comments.html');
});

app.get('/history', function(req, res){    // Обрабатываем запрос страницы "/history"
    res.render('history.html');
});

app.get('/news', function(req, res){    // Обрабатываем запрос страницы "/news"
    res.render('news.html');
});

app.get('/abit', function(req, res){    // Обрабатываем запрос страницы "/abit"
    res.render('abit.html');
});

app.get('/stud', function(req, res){    // Обрабатываем запрос страницы "/stud"
    res.render('stud.html');
});

app.get('/links', function(req, res){    // Обрабатываем запрос страницы "/links"
    res.render('links.html');
});

app.get('/about', function(req, res){    // Обрабатываем запрос страницы "/about"
    res.render('about.html');
});

app.get('/news/mathmanship', function(req, res){    // Обрабатываем запрос страницы "/mathmanship"
    res.render('news/mathmanship.html');
});

app.get('/news/reader-of-scientific-articles', function(req, res){    // Обрабатываем запрос страницы "/reader-of-scientific-articles"
    res.render('news/reader-of-scientific-articles.html');
});

app.get('/news/worlds-fair', function(req, res){    // Обрабатываем запрос страницы "/worlds-fair"
    res.render('news/worlds-fair.html');
});

var port = process.env.PORT || 5000;
app.listen(port)    // Запускаем сервер на 5000 порту, если не указана переменная окружения "port" 
console.log("Listening at " + port)    // Пишем в консоль, что запустились
