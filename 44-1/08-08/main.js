//событие -> event
//ищет обработчик события -> функция(обработчик/handler, слушатель/listener, коллбэк/callback, подписчик/subscriber)
//браузер генерирут обьект, со сведениями о произошедшем события -> event, ev, e
//вызывает обработчик с обьектом события в параметрах


const sml = document.getElementById('small');
const mdm = document.getElementById('medium');
const big = document.getElementById('big');
const onClickHandler = (e) => {
    if(e.target.tagName === 'BUTTON'){
        console.log(e.target.name)
    }

}
//sml.onclick = onClickHandler; // <- oldscool
//sml.onclick = null; //<- удаляем

sml.addEventListener('click', onClickHandler);
// mdm.addEventListener('click', onClickHandler);
// big.addEventListener('click', onClickHandler);
// sml.removeEventListener('click',onClickHandler)//<- удаляем

