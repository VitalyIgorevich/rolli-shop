const counter = () => {
    let counter;

    window.addEventListener('click', (event) => {
        if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
            const counterWrapper = event.target.closest('.counter-wrapper')
             counter = counterWrapper.querySelector('[data-counter]')
        }
        

        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText
        }

        if (event.target.dataset.action === 'minus') {
            // Проверяем товар, который находиться в карзине...
            if(event.target.closest('.counter-wrapper') && parseInt(counter.innerText) === 1) {
                // Удаляем товар с корзины...
                event.target.closest('.cart-item').remove()
            }

            if (counter.innerText > 1) {
                counter.innerText = --counter.innerText
            }
            // Отображение статуса корзины Пустая / Полная
            cartStatus()

            calculateGoodsInTheBasket()
        }

         // Проверяем клик на + или - внутри коризины
	    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		// Пересчет общей стоимости товаров в корзине
		    calculateGoodsInTheBasket();
	}

    })

   
}
counter()