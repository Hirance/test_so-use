document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.row');
    let elements = document.querySelectorAll('.col-sm');
    let btnMix = document.querySelector('.shuffleButton');
    let indexArr = []; // массив, куда будут добавляться новые сгенерированные индексы при перемешивании элементов
    
    mixElements = () => {
      
      while (indexArr.length < elements.length) {
        let newIndex = getRandomInt(0, elements.length - 1); // генерируем случайное число от 0 до длины массива элементов - 1
        if (indexArr.indexOf(newIndex) == -1) { // если такого числа еще не было в массиве с новыми индексами...
          indexArr.push(newIndex); // ...то добавляем
        }
      }
      
      let fragment = document.createDocumentFragment();
      let newOrderArr = []; // массив, куда будут добавляться элементы изначального массива в новом (случайном) порядке
      for (let i = 0; i < indexArr.length; i++) {
        newOrderArr.push(elements[indexArr[i]]); // добавляем элементы изначального массива в порядке, соответствующем индексам массива indexArr (ранее сгенерированный случайный порядок)
      }

      for (let i = 0; i < newOrderArr.length; i++) {
        fragment.appendChild(newOrderArr[i]); // добавляем все элементы сгенерированного массива во фрагмент
      }

      container.innerHTML = ''; // очищаем контейнер
      container.appendChild(fragment); // вставляем фрагмент с перемешанными элементами
      
      indexArr.length = 0; // очищаем массив случайных идексов
    }      
    getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    btnMix.addEventListener('click', () => {
        mixElements();
    })
    mixElements();
})