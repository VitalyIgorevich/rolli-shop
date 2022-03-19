const basket = () => {
    const goodsWrapper = document.querySelector('.goods-wrapper')
    const basketWrapper = document.querySelector('.cart-wrapper')

    basketWrapper.textContent = ''

    goodsWrapper.addEventListener('click', (event) => {
        if(event.target.hasAttribute('data-cart')){
            const card = event.target.closest('.card')

            const cardInfo = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.product-img').getAttribute('src'),
                title: card.querySelector('.item-title').innerText,
                itemsInBox: card.querySelector('[data-items-in-box]').innerText,
                weight: card.querySelector('.price__weight').innerText,
                price: card.querySelector('.price__currency').innerText,
                counter: card.querySelector('[data-counter]').innerText
            }

            // Проверяем есть ли такой товар в карзине...
            const itemInCart = basketWrapper.querySelector(`[data-id="${cardInfo.id}"]`)
            // Если товар есть в корзине...
            if(itemInCart) {
                const counterElement = itemInCart.querySelector('[data-counter]')
                counterElement.innerText = parseInt(counterElement.innerText) + parseInt(cardInfo.counter)
            } else {
                basketWrapper.insertAdjacentHTML('beforeend', `<div class="cart-item" data-id="${cardInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${cardInfo.imgSrc}" alt="">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${cardInfo.title}</div>
                        <div class="cart-item__weight">${cardInfo.itemsInBox} шт. / ${cardInfo.weight} г.</div>
            
                        <!-- cart-item__details -->
                        <div class="cart-item__details">
            
                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${cardInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>
            
                            <div class="price">
                                <div class="price__currency">${cardInfo.price} ₽</div>
                            </div>
            
                        </div>
                        <!-- // cart-item__details -->
            
                    </div>
                </div>
            </div>`)
            }
             
            // Сбрасываем счетчик добавления товара на 1...
            card.querySelector('[data-counter]').innerText = 1
        }

        cartStatus()
        calculateGoodsInTheBasket()
    })


}
basket()