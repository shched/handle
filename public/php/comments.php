<?
// занести в массив значение полей
$z = array(
	1 => $_POST['name'],
	2 => $_POST['email'],
	3 => $_POST['content']
);
$dl = '';
if($z[1] && $z[2] && $z[3]){
	mail("e3-reg@ya.ru", "заполнена форма site.ru", $z[1] . "\n" . $z[2] . "\n" . $z[3]); // сообщение на email о новом комментарии
if(strpos($z[3], 'http://') === false){ // если в тексте отзыва нет http://
$fp = fopen("comments.txt", "a+"); // режим записи
$mytext = "<dt><a href='" . $z[2] . "'>" . $z[1] . "</a><dd>" . $z[3] ;
$save = fwrite($fp, $mytext); // запись в файл
fclose($fp); // закрытие файла  
Header("Location: ".$_SERVER['PHP_SELF']); // обновить страницу; обновлённая версия содержит опубликованный комментарий
exit;
} else { // если в тексте есть http://
	$dl = '<b style="color: red;">Ваше сообщение будет опубликовано после проверки</b>'; // показан этот текст
}
} else { 
	$fp = @fopen("comments.txt", "r"); // режим чтения
	if ($fp) {
	while (!feof($fp)) {
	$dl .= fgetss($fp, 8000, "<dl>,<dt>,<dd>"); // <dl>,<dt>,<dd> - это список тегов, разрешённых для публикации
}
}
fclose($fp);
} 
?>
