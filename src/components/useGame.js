import React from "react";

//Логику выносим из копонента
export default function useGame(images){ //images - массив объектов всех фотографий
//Для вычислений текущего состояия игры сохраним список отгаданных карточек
    const [fishedItems, setFinishidItems] = React.useState([]);
//счетчик шагов иры - счетчик игры
    const [stepsCount, setStepsCount] = React.useState(0);

//Ф-ция сравнения 2х карточек
    const checkItems = (firstItem, secondItem) => {
//Чтобы сравнить карточки, нам нужно сравнить полные объекты дынных
//Найдем объекты по их идентиикаторам из параметров ф-ции
          const firstImage = images.find(({id}) => id===firstItem)
          const secondImage = images.find(({id}) => id===secondItem)
//Сравним карточки по адресу изображения
          if (firstImage.url === secondImage.url){
//Если изображения совпадают, обновляем список отгаданных карточек
//Для обновления списка создаем новый массив из копии текущего
//Добавляем оба идентификатора в новый массив
            setFinishedItems((items) => [...items, firstItem, secondItem]);
          }
          setStepsCount((i) => i+1);
    };

//Ф-ция сброса игры - очищение массива отгаданных карточек и счетчика игры
    const handleReset = () => {
        setFinishedItems([]);
        setStepsCount(0);
    };

//Игра заканчивается, когда все карточки отгаданы
//чтобы понять, что все карточки отгаданы, сравнваем длину массива карточеки списка отгаданных
    const isWin = setFinishedItems.length > 0 && finishedItems.length === images.length;

//Логика игры скрыта в ф-ции, а приложению мы сделаем доступным часть параметров
    return{
        finishedItems,
        handleReset,
        stepCount,
        checkItems,
        isWin
    };
};