"use strict"

let progressBar = document.querySelector(".progress-bar");
let bigCup = document.querySelector('.cup');
let state = "idle"
let balance = document.querySelector(".form-control");
 
    
/*Переменная state отвечает за текущее состояние кофе-машины
Возможные значения:
"idle" = ожидание
"cooking" - готовка
"ready" = кофе готов, но пока не забран.
после забора кофе state* возвращается в значение idle*/

function makeCoffee(name, price, element) {
  if (state != "idle") { /*прописали возврат, по статусам которые присвоили (статусы выше написали != это не равно*/
    return;
  }
  let balance = document.querySelector(".form-control");
  if (balance.value >= price) { /*Условие о том, что баланс должен быть больше или равен сумме покупке*/
    balance.value -= price;   /*balance.price = balance value = price*/
    balance.style.backgroundColor = ""; /*этой командой, если баланса достаточно, снова будет гореть белым*/
    changeDisplayText(`Ваш ${name} готовится.`); /*Текст на дисплее когда делается кофе*/
    state = "cooking";
    let coffeeCup = element.querySelector("img"); /*данной командой мы ищем все картинки в переменной*/ 
    let cupSrc = coffeeCup.getAttribute("src");
    console.log(cupSrc); /*данной командой, при нажатии на кружку, пишет путь к картинке*/
    bigCup.setAttribute("src", cupSrc); /*теперь при нажатие, меняется картинка кружки*/
    bigCup.style.display = "inline"; /*при этой команде display меняет значение с nane из js на данное, то есть появляется*/
    
    
    let readyPercent = 0; /*начался код по шкале готовке*/
    let cookingInterval = setInterval(function() {
      readyPercent++;
      /*console.log(readyPercent);*/
      requestAnimationFrame(function() {   /*ОБЪЕДЕНЯЕТ АНИМАЦИИ, если на сайте их много, делать лучше через эту команду, иначе сайт может лечь*/
        bigCup.style.opacity = readyPercent + "%";
        progressBar.style.width = readyPercent + "%";
      })
      // bigCup.style.opacity = readyPercent + "%"; /*этой командой кружка становится более видимой с повышения процентов*/
      // progressBar.style.width = readyPercent + "%"; /*обязательно надо указывать еденицу измерения, это строка отвечает за заполнение шкалы!!*/
       changeDisplayText(`Ваш ${name} готовится. ${readyPercent}% `) /*ДОБАВИЛИ ПОКАЗАТЕЛЬ % готовки*/
      if(readyPercent >= 100) {
        clearInterval(cookingInterval);
        changeDisplayText(`Ваш ${name} готов!`); /*текст после готовки*/
        state = "ready";
        bigCup.style.cursor = "pointer"; /*добавялет курсор при наводке, на чашку когда она готова*/
        bigCup.onclick = function() {
          takeCoffee();
        }
      }
    }, 30) /*шкала готовки идет до сюда. ТО ЕСТЬ ДО 100*/
  } else {
    balance.style.backgroundColor = "red"; /*Сделали так, что если суммы хватает, он отнимает от баланса, если не хватает, окно баланса загорается красным*/
    changeDisplayText("недостаточно средств"); /*Текст на дисплее когда нет денег*/
  }
}

function takeCoffee() {
  bigCup.style.display = "none"; /*после готовки кофе, стакан снова исчетает, можно оставит пустые ковычки*/
  bigCup.style.opacity = "0" /*после готовки прозрачность становится полная, можно оставить и пустые ковычки*/
  bigCup.style.cursor = '';
  
  progressBar.style.width = 0; /*счетчик сбрасывается после готовки*/
  
  changeDisplayText("выберите кофе"); /*так же после сбора кофе, появляется эта надпись на дисплее*/
  bigCup.onclick = null; /*Это строкой мы обнуляем событие, иначе после первой готовке все ломается*/
  state = "idle";
}


function changeDisplayText(message) { /*ДАННАЯ ФУНКЦИО СОЗДАНА КАК ШАБЛОН ДЯЛ ИЗМЕНЕНИЯ ТЕКСТА НА ДИСПЛЕЕ*/
  let displayText = document.querySelector(".display-text");
  displayText.innerHTML = message;
}


/*---------------------------------Drag'n' Drop---------------------------------------------------- (ТАЩИТЬ И КЛАСТЬ ПЕРЕВОД)*/

let money = document.querySelectorAll('.money img');


// for(let i = 0; 1 < money.length; i++) {
// let bill = money[i];
// }
for(let bill of money) { /*сокращеная форма написения кода сверху!!!. bill это счет, money деньги, название этих переменных сами придумываем. НО ДАННЫМ КОДОМ МЫ ПРОСТО МОЖЕМ ПЕРЕБРАТЬ МАССИВ, если нужно изменение то используем код выше*/
  bill.onmousedown = function (event) {   /*прописали удерживание мышки*/
    // console.log(event); /*УКАЗАВ ЭТУ КОМАНДУ, при нажатие на купюру, УКАЗЫВАЮТСЯ КООРДИНАТЫ */
    takeMoney(event, bill);
  }
}


function takeMoney(event, bill) {
  event.preventDefault();  /*ДАННЫЙ МЕТОД ПРЕОСТАНАВЛИВАЕТ СОБЫТИЯ БРАУЗЕРА. ТО ЕСТЬ РАЬНШЕ МЫ ЗАЖИМАЛИ МЫШКОЙ ОБЪЕКТ И ПОЯВЛЯЛСЯ ПРИЗРАК, с этой командой больше не появляется*/
  
  let mouseX = event.clientX; /*ДАННЫМИ КОМАНДАМИ МЫ ПОЛУЧАЕМ КООРДИНАТЫ МЫШКИ*/
  let mouseY = event.clientY;
  
  
  bill.style.transform = "rotate(90deg)";   /*rotate это переворот, deg это сокуращение, градусы*/
  let billCoords = bill.getBoundingClientRect(); /*считывает размер и координаты купюры. команда, как я понял, нужна для передвижения купюры*/
  console.log(billCoords);
  
  
  bill.style.position = "absolute"; /*задали координаты мышки.тееперь при нажатие, купюры будут убегать*/
  bill.style.top = mouseY - billCoords.width/2 + "px"; /*привязали тем, что купюры встают на центр курсора если нажать на их край*/
  bill.style.left = mouseX - billCoords.height/2 + "px"; /*привязали тем, что купюры встают на центр курсора если нажать на их край*/

  window.onmousemove = function(event) {  /*ЭТОЙ КАМАНДОЙ ТЕПЕРЬ ПРИ НАЖАТИИ КУПЮРА ПРИЛИПАЕТ К МЫШКЕ.   window ЭТО ЗНАЧИТ РАБОТАЕТ ПО ВСЕМУ ЭКРАНУ*/
    let mouseX = event.clientX; /*ДАННЫМИ КОМАНДАМИ МЫ ПОЛУЧАЕМ КООРДИНАТЫ МЫШКИ*/
    let mouseY = event.clientY;
    bill.style.top = mouseY - billCoords.width/2 + "px"; /*привязали тем, что купюры встают на центр курсора если нажать на их край*/
    bill.style.left = mouseX - billCoords.height/2 + "px"; /*привязали тем, что купюры встают на центр курсора если нажать на их край*/
    
  }
  bill.onmouseup = function (event) {  /*СДЕЛАЛИ ЭТОЙ КОМАНДОЙ ТАК, что бы при отжимании мышки, отпускали купюру*/
    window.onmousemove = null;
    console.log( inAtm(bill) ); {
      let balance = document.querySelector(".form-control"); /*нашли баланс опять. т.к. первый раз была внутренняя переменная*/
      balance.value = +balance.value + +bill.dataset.cost;
      bill.remove();
      console.log(bill.dataset.cost);
    }
  }
}

function inAtm(bill) {
  let atm = document.querySelector('.atm');
  let atmCoords = atm.getBoundingClientRect(); /*считываем координаты atm*/
  let billCoords = bill.getBoundingClientRect(); /*считываем координаты купюр*/
  
  let atmLeftTopX = atmCoords.x; /*указали верхние углы купюроприемника*/
  let atmLeftTopY = atmCoords.y;
  
  let atmLeftBottomX = atmCoords.x;
  let atmLeftBottomY = atmCoords.y + atmCoords.height/3;
  
  let atmRightTopX = atmCoords.x + atmCoords.width;
  let atmRightTopY = atmCoords.y;
  
  let billLeftTopX = billCoords.x;
  let billLeftTopY = billCoords.y;
  
  let billRightTopX = billCoords.x + billCoords.width;
  let billRightTopY = billCoords.y;
  
  // console.log( [atmLeftTopX, atmLeftTopY, atmLeftBottomX, atmLeftBottomY, atmRightTopX, atmRightTopY, billLeftTopX, billLeftTopY, billRightTopX, billRightTopY] ); /*вызываем консоль для того, что бы проверить все ли координаты отобразились которые мы указали выше*/
  
  if (billLeftTopX > atmLeftTopX /*тут уже расписали условия, в каких точках должны соприкоснуться купюра и купюраприемник.*/
      && billLeftTopY > atmLeftTopY
      && billLeftTopY < atmLeftBottomY
      && billRightTopX < atmRightTopX
      ) {
        return true; /*ЕСЛИ ТОЧКИ СОПРИКАСАЮТСЯ, тогда true*/
      } else {
        return false; /*если не соприкасаются то false*/
      }
  
}  
  


// ---------------------------------------СОЗДАНИЕ ЭЛЕМЕНТОВ-------------------------------------------------------------------------
let changeButton = document.querySelector(".change-button"); /*нашли кнопку сдачи*/
changeButton.onclick = function () {
  takeChange();
}

function takeChange() {
  let balance = document.querySelector(".form-control");
  if (balance.value >= 10) {
    balance.value -= 10;
    createCoin("10");
    return setTimeout( function() {
      takeChange()}, 300);
  } else if (balance.value >= 5) {
    balance.value -=5;
    createCoin("5");
    return setTimeout( function() {
      takeChange()}, 300);
  } else if (balance.value >= 2) {
    balance.value -=2;
    createCoin("2");
    return setTimeout( function() {
      takeChange()}, 300); 
  } else if (balance.value >= 1 ) {
    balance.value -= 1;
    createCoin("1");
    return setTimeout( function() {
      takeChange()}, 300);
  }
}

function createCoin(nominal) { /*ДАННЫМ КОДОМ МЫ БЕЗ HTML через JS НАШЛИ КАРТИНКУ МОНЕТЫ И ВСТАВИЛИ ЕЁ В КОД*/
  let coinSrc = "";  /*ПРОПИСАЛИ ВСЕ МОНЕТЫ, что бы картинки подгрузились. и так же укзаали что в иных значениях будет консоль эррор*/
  switch (nominal) {
    case "10":
      coinSrc = "img/10rub.png";
      break;
      case "5":
        coinSrc = 'img/5rub.png';
      break;
      case "2":
        coinSrc = "img/2rub.png";
      break;
      case "1":
        coinSrc = "img/1rub.png";
      break;
      default:
      return console.error("Неправильный номинал монеты");
  }
  let coin = document.createElement('img');
  coin.setAttribute("src", coinSrc);
  coin.style.width = "50px"; /*ПРОПИСАЛИ РАЗМЕР МОНЕТЫ. ЭТО ВЫСОТА*/
  coin.style.height = "50px"; /* ЭТО ШИРИНА*/
  coin.style.position = "absolute";
  let changeContainer = document.querySelector(".change-container");
  let containerCoords = changeContainer.getBoundingClientRect();
  coin.style.top = Math.floor(Math.random() * (containerCoords.height - 50 )) + "px"; /*СДВИГАЕМ МАНЕТЫ В БЛОКЕ, рандом используем что бы они падали в случайном порядке*/
  coin.style.left = Math.floor(Math.random() * (containerCoords.width - 50 )) + "px"; /*(containerCoords.height - 50 )) -50 прописали ЧТО БЫ МАНЕТКИ ИЗ КАНТЕЙНЕРА НЕ ВЫХОДИЛИ. ТОЖЕ САМОЕ И НА СТРОЧКЕ ВЫШЕ */
  coin.style.transition = "transform 300ms"; /*АНИМАЦИЯ ДЛЯ МОНЕТКИ*/
  coin.style.transform = "translateY(-40%)"; /*команда что бы монетка была изначально выше*/
  setTimeout(function() {  /*задали таймер что бы монетки не сразу смещались*/
    coin.style.transform = "translateY(0%)"
  }, 30)
  changeContainer.append(coin);/* КОНЕЦ КОДА ПО СОЗДАНИЮ МОНЕТКИ ЧЕРЕЗ JS. что бы вызвать её на данном этапе нужно написать createCoin()   apend добавляет в конец*/

/*ВНУТРЬ В НАЧАЛО = prepend
рядом перед - before
рядом после = after
вместо - replaceWith*/

}














