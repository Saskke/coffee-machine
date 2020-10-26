<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href='style.css'> <!--подключили файл style.css-->
    <title>Кофемашина</title>
  </head>
  <body>
    <div class ="container"> <!--Картинки с кофе, ценой и названием-->
      <div class="row">
        <div class="col-6 coffee-list d-flex flex-column justify-content-around"> <!--d-flex это флекс контейнеры, надпись d-flex и далее вписали для того, что бы при растягивание квадрата со значками кофе, значки кофе равномерно распределялись а неоставались на месте-->
          <div class="coffee-item" onclick="makeCoffee('Американо', 50, this)"> <!--onclick="makeCoffee('Американо', 50)" это команда нажатия кнопки, так же для всех сниху, отображается название и цена в консоли-->
            <img src="img/americano.png" alt="Американо">
            <span>Американо - 50руб.</span>
          </div>
          <div class="coffee-item" onclick="makeCoffee('Каппучино', 73, this)"> <!--event это элемент события-->
            <img src="img/cappuccino.png" alt="Капучино">
            <span>Каппучино - 73руб.</span>
          </div>
          <div class="coffee-item" onclick="makeCoffee('Эспрессо', 61, this)">
            <img src="img/espresso.png" alt="Эспрессо">
            <span>Эспрессо - 61руб.</span>
          </div>
          <div class="coffee-item" onclick="makeCoffee('Латте', 112, this)">
            <img src="img/latte.jpg" alt="Латте">
            <span>Латте - 112руб.</span>
          </div>
        </div>
        <div class='col-6 coffee-oper'>
          <div class= "row">
            <div class="col-6">
            <div class="display">
              <p class="display-text">Выберите кофе</p>
              <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%; transition: none";></div>
            </div>
            
          </div>
          <div class='cup-container'>
            <img src="img/americano.png" alt='' class='cup'>
            </div>
          </div>  
            <div class="col-6">
            <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Баланс" aria-label="Имя получателя" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">&#8381</span>
            </div>
          </div>
          <div class="atm-container">
            <img src="img/bill_acc.png" alt="" class="atm">
          </div>
          <button class="btn btn-primary btn-block my-2 change-button">Сдача</button> <!--вписали кнопку, btn-primary это цвет, а btn-block растянули её, что бы в HTML дистанцию сделать, можно писать команду m.. где Y это высота (X ширина).      onclick="alert("Получаем сдачу")" этой командой сделает действие на кнопку -->
          <div class="change-container">
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class = "money"> <!--отдельный див куда мы вставили купюры-->
    <img src="img/50rub.jpg" alt="" data-cost = '50'> <!--data-cost это вставка для JS. ЧТО БЫ НАЙТИ ЭТИ ОБЪЕКТЫ как class только лучше этим пользоваться если изначально класс не указан-->
    <img src="img/100rub.jpg" alt="" data-cost = '100'>
    <img src="img/500rub.jpg" alt="" data-cost = '500'>
  </div>
    <!-- Optional JavaScript -->
   <!--  <script src='lesson.js'></script> -->
    <script src='script.js'></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>