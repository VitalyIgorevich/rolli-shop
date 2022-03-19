const getDataCatalog = () => {
    const goodsWrapper = document.querySelector('.goods-wrapper')

    const renderGoods = (goods) => {
        goodsWrapper.textContent = ''

        goods.forEach(goodItem => {
            goodsWrapper.insertAdjacentHTML('beforeend', `<div class="col-md-6">
            <div class="card mb-4" data-id="${goodItem.id}">
                <img class="product-img" src="img/roll/${goodItem.imgSrc}" alt="">
                <div class="card-body text-center">
                    <h4 class="item-title">${goodItem.title}</h4>
                    <p><small data-items-in-box class="text-muted">${goodItem.itemsInBox} шт.</small></p>

                    <div class="details-wrapper">
                        <div class="items counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter>1</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__weight">${goodItem.weight} г.</div>
                            <div class="price__currency">${goodItem.price} ₽</div>
                        </div>
                    </div>

                    <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

                </div>
            </div>
        </div>`)
        });
    }

    const getData = () => {
        fetch('http://localhost:3000/goods')
        .then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error(`Данные не были получены, ошибка ${data.status} ${data.statusText}`)
            }
        })
        .then((data) => {
            renderGoods(data)
            
        })
        .catch((err) =>{
            console.error('Ошибка')
        })
    }
    getData()

}
getDataCatalog()