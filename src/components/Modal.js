export default function Modal({ children}) {
    //Компонент отрисовывает внешнее содержание
    //внутри двух HTML-элементов для отображеия подложки и контейнера модального окна
    return(
        <div className="modal">
<div className="modal-box">{children}</div>
        </div>
    )
}