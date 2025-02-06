"use strict";
$(document).ready(function (){

    $('.burger-menu').click(function(){

        $('.header__menu-items').css('display','flex');
        $('.burger-menu').css('display','none');
        $('.close-logo').css('display','flex');
    })
    $('#close-logo').click(function(){
        $('#menu-items').css('display','none');
        $('#close-logo').css('display','none');
        $('#burger-menu').css('display','flex');
    })

    $('.carousel').carousel({
            dots:true,
            arrow:false,
            time: 4,
            transition: 1,
        }
    )
    $('.owl-carousel').owlCarousel({
        loop: true,
        arrow:true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 2
            },
            1200:{
                items:3
            }
        }
    })

});
const basket01 = document.getElementById('basket1')
const basketAmount1 = document.getElementById('basket-amount1')

//

function basket(basketId, basketAmountId) {
    return function() {
        return function() {
            basketId.style.display = 'none';
            basketAmountId.style.display = 'flex';
        };
    };
}
basket01.onclick = basket(basket01, basketAmount1)();

//
let count = 1;
let totalPrice = 0;
//


const circleActive = document.getElementById('circleActive')
//

const PlusButtons = document.querySelectorAll('.plus-btn');
const MinusButtons = document.querySelectorAll('.minus-btn');
const CountLabels = document.querySelectorAll('.btn-value');

// НОРМАЛЬНЫЙ КОД ПОДЪЕХАЛ
const BasketsOn = document.querySelectorAll(".slider__basket");
const BasketAmount = document.querySelectorAll(".slider__basket-amount");

const filteredButtons = (button) => {
    return button.tagName.toLowerCase() !== 'img';
}

const PlusButtonsFiltered = Array.from(PlusButtons).filter(filteredButtons);
const MinusButtonsFiltered = Array.from(MinusButtons).filter(filteredButtons);


PlusButtonsFiltered.forEach((button, idx) => {
    button.addEventListener('click',  () => {
        let innerCount = Number(BasketAmount[idx].textContent);
        console.log('innerCount', innerCount);
        innerCount += 1;
        count +=1;
        CountLabels[idx].innerHTML = innerCount.toString();
        circleActive.innerHTML = String(innerCount + count);
    });
})

MinusButtonsFiltered.forEach((button, idx) => {
    button.addEventListener('click',  () => {
        let innerCount = Number(BasketAmount[idx].textContent)
        if (count > 1 && innerCount > 1) {
            innerCount -= 1;
            CountLabels[idx].innerHTML = innerCount.toString();
            count -= 1;
            circleActive.innerHTML = count;
        } else {
            BasketAmount[idx].style.display = 'none';
            BasketsOn[idx].style.display = 'flex';
            circleActive.innerHTML = count;
        }
    });
})

// function valueBtn1(minusBtn,countLabel,basketAmount,basketNum) {
//     return function(){
//     minusBtn.onclick = function () {
//         if (count > 1) {
//             count -= 1;
//             countLabel.innerHTML = count;
//             circleActive.innerHTML = count;
//         } else {
//             basketAmount.style.display = 'none'
//             basketNum.style.display = 'flex'
//         }
//     }}
// }
// minusbtn1.onclick = valueBtn1(minusbtn1,countLabel1,basketAmount1,basket01)
// function valueBtn2(plusBtn,countLabel){
//     return function(){
//         plusBtn.onclick = function () {
//             count += 1;
//             countLabel.innerHTML = count;
//             circleActive.innerHTML = count;
//         }
//     }
// }
// plusbtn1.onclick = valueBtn2(plusbtn1,countLabel1)
// plusbtn2.onclick = valueBtn2(plusbtn2,countLabel2)

BasketsOn.forEach(button => {
    console.log('button', button);
    button.addEventListener('click', () => {
        button.style.display = "none";
        const targetBasketAmount = BasketAmount[Array.from(BasketsOn).indexOf(button)];
        console.log('targetBasketAmount', targetBasketAmount)

        // Отображаем только найденный элемент
        targetBasketAmount.style.display = 'flex';
        circleActive.innerHTML = Number(targetBasketAmount.textContent) + count;
    });
});

// filtration on the way of the simple code
const filtrationSets = document.getElementById('filtration-sets')
const filtrationBox = document.getElementById('filtration-boxs')
const filtrationPresent = document.getElementById('filtration-presents')
const KabritaSet = document.getElementById('Kabrita__Set')
const KabritaBox = document.getElementById('Kabrita__Box')
const KabritaPresent = document.getElementById('Kabrita__Present')

filtrationSets.onclick = function(){
    KabritaSet.style.display = 'flex'
    KabritaBox.style.display = 'none'
    KabritaPresent.style.display = 'none'
}
filtrationBox.onclick = function (){
    KabritaSet.style.display = 'none'
    KabritaBox.style.display = 'flex'
    KabritaPresent.style.display = 'none'
}
filtrationPresent.onclick = function (){
    KabritaSet.style.display = 'none'
    KabritaBox.style.display = 'none'
    KabritaPresent.style.display = 'flex';
}