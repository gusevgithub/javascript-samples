
// Функция: создает новый параграф и добавляет его вниз тела HTML.

function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

/*
  1. Получаем ссылки на все кнопки на странице и отсортировываем их в массиве.
  2. Перебераем все кнопки и добавляем к ним отслеживатель события нажатия.

  При нажатии любой кнопки, будет выполняться функция createParagraph().
*/

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}