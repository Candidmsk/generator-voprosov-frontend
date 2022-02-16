let difficultLevel = document.querySelector('.difficult-level');
let difficultLevelRange = document.querySelector('.range');
let textPlace = document.querySelector('.popup__inner-text');
let answerButton = document.querySelector('.button-block__generate_ask');

console.log(answerButton.value)

let workingObject;



//КНОПКА ИЗМЕНЕНИЯ СЛОЖНОСТИ

function changeDifficultLevel () {

    answerButton.value = "Подсмотреть ответ";

    console.log('сработало' + 'value: ' + difficultLevel.value)
    if(difficultLevel.value == 1) {
        difficultLevelRange.textContent = 'Легко';
    }
    if(difficultLevel.value == 2) {
        difficultLevelRange.textContent = 'Средне';
    }
    if(difficultLevel.value == 3) {
        difficultLevelRange.textContent = 'Сложно';
    }
}


//КНОПКА ГЕНЕРАЦИИ ВОПРОСА

function generateQuestions () {
    
    console.log('кнопка работает');
    answerButton.value = "Подсмотреть ответ";

    if(difficultLevel.value == 1) {
        let random = Math.floor(Math.random() * easy.length);
        workingObject = easy[random];
        console.log(workingObject);
        textPlace.textContent = easy[random].ask;
    }
    if(difficultLevel.value == 2) {
        let random = Math.floor(Math.random() * normal.length);
        workingObject = normal[random];
        console.log(workingObject);
        textPlace.textContent = normal[random].ask;
    }
    if(difficultLevel.value == 3) {
        let random = Math.floor(Math.random() * hard.length);
        workingObject = hard[random];
        console.log(workingObject);
        textPlace.textContent = hard[random].ask;
    }
}

//ГЕНЕРАЦИЯ

function generateAnswer () {
    console.log(workingObject);
    console.log(answerButton.value);

    if (workingObject === undefined) {
        textPlace.textContent = "Сначала нужно сгенирировать вопрос";
    } else {

    if (answerButton.value === "Подсмотреть ответ") {
        console.log('Сработало подсмотреть ответ');
        if (workingObject.answer === "") {
            textPlace.textContent = "Разработчик-лентяй не подготовил ответ для этого вопроса"
            answerButton.value = "Закрыть подсказку";
        } else {
        textPlace.textContent = workingObject.answer;
        answerButton.value = "Закрыть подсказку";
        };
    } else if (answerButton.value === "Закрыть подсказку"){
        textPlace.textContent = workingObject.ask;
        answerButton.value = "Подсмотреть ответ";
    }

    };

};
