"use strict"

// Методы поиска по DOM-элемент
/*ЭТО УСТРАРЕВШИЕ МЕТОДЫ*/
// let images = document.getElementsByTagName("img");
// console.log(images); /*В КОНСОЛЕ БУДУТ ПРЕДСТАВЛЕНЫ ВСЕ КАРТИНГИ ПО ТЕГУ IMG*/



// let coffeeList = document.getElementsByClassName("coffee-item"); /*показывает классы в консоли*/
// console.log(coffeeList);


// let coffee = document.getElementById("coffee-machine"); /*Т.К. id нет в коде выдает значение Null то есть 0*/
// console.log(coffee);



// // СОВРЕМЕННЫЕ МЕТОДЫ


// /*Поиск одного элемента*/
// let atm = document.querySelector('.atm-container'); /*ищет элемент с классом atm-container */
// console.log(atm);
// let coffeeItem = document.querySelector(".coffee-item"); /*получили элемент coffee-item*/
// console.log(coffeeItem);



// /*поиск нескольких сразу*/



// let coffeeNames = document.querySelectorAll('span'); /*НАШЛИ ВСЕ СПАНЫ*/
// console.log(coffeeNames);




// let button = document.querySelector(".btn-primary"); /*НАШЛИ КНОПКУ*/
// console.log(button);



// let coffeeCup = document.querySelectorAll(".coffee-item img"); /*в coffee-item мы искали IMG */
// console.log(coffeeCup);




// let buttons = document.querySelectorAll(".coffee-item"); /*Выбрали элемент*/
// let cappuccinoButton = buttons[1]; /*точечно выбрали вторую кружку сверху*/
// console.log(cappuccinoButton);

// let coffeeList = cappuccinoButton.parentElement;
// console.log(coffeeList);

// let nextCoffee = cappuccinoButton.nextElementSibling;
// console.log(nextCoffee) /*Этой командой мы указали следующую чашку кофе посел баттон1*/
// let previousCoffee = cappuccinoButton.previousElementSibling;
// console.log(previousCoffee); /*Приведущая чашка кофе*/
// let cappuccinoChildren = cappuccinoButton.children;
// console.log(cappuccinoChildren);


// let cappuccinoText = cappuccinoButton.querySelector("span"); /*Вывели span кружки баттон1, то есть цену её*/
// console.log(cappuccinoText)








// ИЗМЕНЕНИЕ ЭЛЕМЕНТОВ
// ИЗМЕНЕНИЕ CSS СТИЛЕЙ

// let bigCup = document.querySelector('.cup'); /*НАШЛИ КРУЖКУ*/

// console.log(bigCup.style.width);

// bigCup.style.width = '300px'; /*поскольку меняем стиль, делается это через CSS поэтому нужно добавлять style*/

// bigCup.style.display = 'none'; /*Этой командой спрятали кружку*/
// bigCup.style.display = ""; /*ЕСЛИ ОСТАВИТЬ ПУСТЫЕ КОВЫЧКИ, тогда он забивает на команды из JS И ВОЗРВРАЩАЕТСЯ К ЗНАЧЕНИЮ html/css*/
// bigCup.style.backgroundColor = "red"; /*ЕСЛИ СВОЙСТВА ЧЕРЕЗ - В CSS тут они слитно пишутся с БОЛЬШОЙ БУКВЫ*/

// bigCup.style.transition = "transform 5s"; /*Сделали анимацию переворота кружки через 5 секунд*/
// setTimeout(function() {
// bigCup.style.transform = 'rotate(360deg)';
// }, 5000) /*прописали на сколько она крутится*/



// let bigCup = document.querySelector('.cup');

// console.log(bigCup.hasAttribute("src") ); /*проверяет наличие атрибута. ОН ЕСТЬ ПОЭТОМУ В КОНСОЛЕ ЗНАЧЕНИЕ true*/
// let cupSrc = bigCup.getAttribute('src'); /*получает значение атрибута.*/
// console.log(cupSrc);

// bigCup.setAttribute("src", "img/cappuccino.png"); /*устанавливает значение атрибута. Вместо американо появится капучино */
// bigCup.removeAttribute("src"); /*удалили картинку*/



// let buttons = document.querySelectorAll(".coffee-item");
// let espresso = buttons[2]; /*НАШЛИ ПОЛНОСТЬЮ ЭСПРЕССО*/
// let espressoImg = espresso.querySelector("img"); /*выдернули только картинку по тегу IMG*/

// let espressoSrc = espressoImg.getAttribute('src')  /*получили значение эспрессо*/

// let bigCup = document.querySelector('.cup'); /*нашли большую кружку*/
// bigCup.setAttribute("src", espressoSrc); /*изменили значение BigCup на кружку эспрессо*/




// ИЗМЕНЕНИЕ ВНУТРЕННЕГО СОДЕРЖАНИЯ ЭЛЕМЕНТА

// let displayText = document.querySelector(".display-text");
// console.log(displayText.innerText); /*ВЫВЕЛ ТЕКСТ КОТОРЫЙ И УКАЗЫВАЛИ РАНЕЕ НА ДИСПЛЕЕ, "Выбирите кофе"*/

// displayText.innerText = "Ваш <b>капучино</b> готовится";
// console.log(displayText.innerText) /*Мы изменили текст на "Ваш капучино готовится" НО МЫ НЕ МОЖЕМ ВСТАВЛЯТЬ ТЕГИ, данной командой он их будет писать а не применять */

// displayText.innerHTML = "Ваш <b>латте</b> готовится";
// console.log(displayText.innerText) /*ТУТ ЖЕ МЫ УКАЗАЛИ ТЕГ <b></b> и ТЕКСТ СТАЛ ЖИРНЫМ*/

// let coffeeList = document.querySelector(".coffee-list"); /*ДАННОЙ КОМАНДОЙ МЫ ДОБАВИЛИ ЕЩЕ АМЕРИКАНО, то есть добавили элементы*/
// for(let i = 0; i < 2; i++) {
//   coffeeList.innerHTML = coffeeList.innerHTML + `
//   <div class="coffee-item">
//   <img src="img/americano.png" alt=Американо">
//   <span>Американо - 50руб.</span>
//   </div>
//   `;
// }



// let changeBtn = document.querySelector(".btn");

// // console.log(changeBtn.className); /*className Указывает всю информацию которая была указанна в классе кнопки*/
// // changeBtn.className = "btn btn-success btn-block"; /*с помощью className мы можем полностью переписать значение. success это зеленый*/




// console.log(changeBtn.classList);

// changeBtn.classList.add('p-3')  /*добавить класс*/
// changeBtn.classList.remove('my-2') /*удалить класс*/
// console.log(changeBtn.classList.contains("btn")); /*ПРОВЕРИТЬ НАЛИЧИЕ ОТВЕТ true или false*/





// ПЛАНИРОВАНИЕ



// setTimeout(function() {  /* setTimeout команда для того, что бы выставить время для запуска команды.  function() {} это пустая функция, как заглушка*/
//   let coffeeOper =document.querySelector(".coffee-oper"); /*нашли задний фот, то есть .coffee-oper */
//   coffeeOper.style.backgroundColor = "red"; /*ИЗМЕНИЛИ ЗАДНИЙ ФОН НА КРАСНЫЙ*/
// }, 3000);     /*указано время 3 сек*/


// setTimeout(function() {
//   let coffeeOper =document.querySelector(".coffee-oper");
//   coffeeOper.style.backgroundColor = ""; /*ВЕРНУЛИ ЦВЕТ НАЗАД*/
// }, 5000);




// setInterval(function()   {   /*команда зацикливания, будет меняться через время, появляеться и исчезать*/
//   let coffeeDisplay = document.querySelector('.display'); /*нашли дисплей*/
//   coffeeDisplay.classList.toggle('bg-danger'); /*изменили на красный*/
// }, 1000)





// let displayInterval = setInterval(function()   {   /*Такая же команда что и выше, только будем делать не бесконечную, а с остановкой. поэтому всей команде прописали переменную lET*/
//   let coffeeDisplay = document.querySelector('.display'); /*нашли дисплей*/
//   coffeeDisplay.classList.toggle('bg-danger'); /*изменили на красный*/
// }, 1000)


// setTimeout(function() {
//   clearInterval(displayInterval); /*ПРИРЫВАЕТ КОМАНДУ ЦИКЛА, которую написали выше. то есть сама команда  clearInterval далее( и пишем ранее присвоенную переменную displayInterval) */
// }, 5000)





// function changeDisplayText () {
//   let display = document.querySelector(".display");
//   display.innerHTML = "Ваш кофе готовится"; /*ИЗМЕНИЛАСЬ НАДПИСТЬ НА ДИСПЛЕЕ ВАШ КОФЕ ГОТОВИТСЯ*/
// }


// // setTimeout(changeDisplayText, 5000); /*ЕСЛИ НУЖНО ЧТО БЫ КОМАНДА ИСПОЛНЯЛАСЬ НЕ СРАЗУ. пустые круглые скобки () ставить после них не нужно!!! ВЫШЕ ПРИМЕНЯЕТСЯ СРАЗУ, тут через 5 сек. ЭТО ПЕРВЫЙ ВАРИАТ ЗАДЕРЖКИ*/

// setTimeout(function() { /*ВТОРОЙ ВАРИАНТ ТОГО, ЧТО БЫ СРАЗУ НЕ ИСПОЛНЯЛАСЬ КОМАНДА.*/
//   changeDisplayText();
// }, 5000);  






//СОБЫТИЯ И СЛУШАТЕЛИ СОБЫТИЙ

/* СОБЫТИЯ КОТОРЫЕ МОЖЕМ ВСТРЕТИТЬ мышкой
click- нажатие левой кнопкой мыши
mouseover - наведение мыши на элемент
mouseleave - уводим элемент с курсора
mousedown - зажал левую кнопку мыши на элементе
mouseup - отпустили левую кнопку мыши

dblclick - двйоное нажатие левой мыши
contextmenu - нажатие правой кнопки мыши

----------------------------------------------------------------------------------------------------------

события не мышкой

focus - Начинается ввод в input
change - пользователь что то ввел в input

keydown - Нажатие кнопки на клавиатуре
keyup - отжали кнопку

transitionend - событие окончания транзиции (анимации)

submit - отправка формы
*/

/*------------------------------------------------------------------------------*/


//1. ВЕШАЕМ СОБЫТИЯ С ПОМРОЩЬЮ АТРИБУТА HTML

// <div onclick="showMessage()">Нажми на меня> </div>   (для события открываем div и пишем событие)





// 2. ВЕШАЕМ СОБЫТИЕ НА СВОЙСТВО

// let changeBtn = document.querySelector(".btn"); /*НАШЛИ КНОПКУ*/

// changeBtn.onclick = function() {    /*КОМАНДА В JS ЧТО БЫ ПРИ НАЖАТИИ НА КНОПКУ СДАЧА ВЫХОДИЛО СООБЩЕНИЕ*/
//   alert("Даем сдачу");
// }

// changeBtn.onclick = alert("Даем сдачу");       (ВТОРОЙ СПОСОБ ЗАПИСИ ВЫШЕ)




// 3. Метод addEventListener(event, function)

// let changeBtn = document.querySelector(".btn");
// changeBtn.addEventListener("click", function()  {
//   alert("Даем сдачу");
// });

// changeBtn.addEventListener("click", function()  {
//   console.log("Даем сдачу");  /*работают сразу два кода из за команды addEventListener. если просто через function то будет работать только последняя */
// });


// -------------------------------------------------------------------------------------------------------------


// СНИМАЕМ СЛУШАТЕЛЯ СОБЫТИЙ

// let changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
//   alert("Даем сдачу");
// }
// changeBtn.onclick = null;  /*Выше указали команду на кнопку сдачи, и этой командой мы убрали действие */





// let changeBtn = document.querySelector(".btn");
// function handler() {                                        /*handler так же вешает значение и далее снимает его, пэотому кнопка так же не будет работать*/
//   alert("Даем сдачу");
// }
// changeBtn.addEventListener("click", handler);
// changeBtn.removeEventListener("click", handler);




/*КОМАНДА ЧТО БЫ ПРИ НАЖАТИИ НА КРУЖКУ ДИСПЛЕЙ СТАНОВИЛСЯ КРАСНЫМ*/

// let Bigcup = document.querySelector(".cup");
// Bigcup.onclick = function() {
// let changedisplay = document.querySelector(".display");
// changedisplay.style.backgroundColor = "red";
// }


// ---------------------------------------------------------------------------------------------------------------------------------------------------------



// let coffeeButtons = document.querySelectorAll(".coffee-item");  /*this возвращает объект к которому обращен метод или свойство. ТО ЕСТЬ УКАЗЫВАЕТ В КОНСОЛИОБЪЕКТ К КОТОРОМУ МЫ ОБРАЩАЕМСЯ*/
// for (let i = 0; i < coffeeButtons.length; i++) {
//   coffeeButtons[i].onclick = function() {
//     console.log(this); /*добавив в эту функцию this, в консоли отображается код каждого элемента, на который мы нажали*/
//     // makeCoffee("Американо", 25, this) /*ДАННАЯ КОМАНДА ТАКАЯ ЖЕ КАК И ВЫШЕ. ЕСЛИ МЫ ДОБАВЛЯЕМ this, она будет прописываться в консоли при нажатии на кнопку*/
//   }
// }










