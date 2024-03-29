const menuOpen = document.querySelector('.menu');
const menuClose = document.querySelector('.close');
const menuCloseButton = document.querySelector('.closebtn');

const cartIcon = document.querySelector('.cart-icon');
const cartSection = document.querySelector('.cart-section');
const addToCart = document.querySelectorAll('.cart-result');
const cartNotification = document.querySelector('.cart-count-notify')

const counterButtons = document.querySelectorAll('.counter');
const counterResult = document.querySelector('.counter-result');
let counter = 0;

const productImage = document.querySelector(".main-product");
const products = document.querySelectorAll(".product");
// Menu and Cart Toggle
menuOpen.addEventListener('click', () => {
    menuToggle(menuOpen, menuClose)
});
menuCloseButton.addEventListener('click', () => {
    menuToggle(menuClose, menuOpen)
    console.log("click")
});
// counter and Cart Buttons
    counterButtons.forEach((count) => {
        count.addEventListener('click', (e) => {
            const currentCountButton = e.currentTarget;
            if (currentCountButton.classList.contains('plus') && counter >=0) {
                counter++;
                counterResult.innerHTML = counter;
                cartResult(counter);
                

            }else if (counter > 0){
                 counter--;
                 counterResult.innerHTML = counter;
                 cartResult(counter);
                }
            
        })
    })
    function cartResult(count) {
        addToCart.forEach((store) => {
            store.addEventListener('click', (e) => {
                if (count > 0) {
                    cartNotification.classList.remove('hidden');
                } else {
                    cartNotification.classList.add('hidden');
                }
                cartNotification.innerHTML = count;
            })
        })
}

// Product Images
    products.forEach((product) => {
        product.addEventListener("click", (e) => {
            const currentProduct = e.currentTarget.classList[1];
            productImage.src = `./images/image-${currentProduct}.jpg`
            cartIcon.addEventListener('click', () => {
                cartSection.classList.toggle('hidden')
                let cartDiv = ` 
                <div class="cart-div container  bg-white rounded-xl flex flex-col justify-between  px-8  py-16 md:p-6 md:w-3/12 lg:w-4/12">
                    <h2 class="mb-4 text-xl font-medium text-darkGrayishBlue">Cart</h2>
                    <hr class="w-full mb-8 md:block">
                    <p class="mx-auto  text-xl text-darkGrayishBlue pt-8 pb-16 md:pb-4">Your cart is empty</p>
                </div>
                `
                if (counter > 0) {
                    cartTotal = 125 * counter;
                    cartTotal += cartTotal;
                    cartDiv = `
                    <div class="cart-div container  bg-white rounded-xl flex flex-col justify-between  px-8 md:p-0 md:p-6 md:w-3/12 lg:w-4/12">
                        <h2 class="mb-4 text-xl font-medium text-darkGrayishBlue">Cart</h2>
                        <hr class="container mb-8 md:block">
                        <div class="flex justify-between items-center mb-4">
                        <img src="./images/image-${currentProduct}-thumbnail.jpg" class="w-1/5 rounded-xl mr-4 md:mr-2 md:rounded" alt="">
                        <div class="w-3/9">
                            <p class="text-sm text-darkGrayishBlue">Fall Limited Edition Sneakers</p>
                            <p class="text-sm text-darkGrayishBlue">$125.00 * <span>${counter}</span> <span class="font-bold text-black">${cartTotal}</span></p>
                        </div>
                        <img src="./images/icon-delete.svg" class="cursor-pointer" alt="delete-icon">
                        </div>
                        <div class="container rounded-lg bg-orange flex justify-center items-center mx-auto  mb-4 text-white text-sm hover:opacity-75">
                            <button class="cursor-pointer py-3 px-8">Checkout</button>
                        </div>
                    </div>
                    `
                }
                cartSection.innerHTML = cartDiv;
            });            
            
        })
    })

    
// slider mobile
const moveButtonMobile = document.querySelectorAll(".move-img")
let productCounter = 1

moveButtonMobile.forEach((moveto) => {
    moveto.addEventListener("click", () => {
        if (moveto.classList.contains("right") && productCounter < 4) {
            productCounter++
            productImage.src = `./images/image-product-${productCounter}.jpg`
        }
        else if (moveto.classList.contains("left") && productCounter > 1) {
            productCounter--
            productImage.src = `./images/image-product-${productCounter}.jpg`
        }
    })
})





















































function menuToggle(open, close) {
    open.classList.add('hidden');
    close.classList.remove('hidden');
}


































