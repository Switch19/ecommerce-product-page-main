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
console.log(productImage);
console.log(products);

// Menu and Cart Toggle
menuOpen.addEventListener('click', () => {
    menuToggle(menuOpen, menuClose)
});
menuCloseButton.addEventListener('click', () => {
    menuToggle(menuClose, menuOpen)
});
cartIcon.addEventListener('click', () => {
    cartSection.classList.toggle('hidden')
    let cartDiv = ` <div class="cart-div container bg-white rounded-xl flex flex-col justify-between  px-8 pt-8 pb-16 md:p-6 md:w-4/12 lg:w-3/12">
    <h2 class="mb-4 text-xl font-medium text-darkGrayishBlue">Cart</h2>
    <hr class="w-full mb-8 md:block">
    <p class="mx-auto text-xl text-darkGrayishBlue pt-8 md:pb-4">Your cart is empty</p>
    </div> 
    `
    if (counter > 0 && (cartNotification.classList.contains('hidden') === false)) {
        cartTotal = 125 * counter;
        cartTotal += cartTotal;
        cartDiv = `
        <div class="cart-div container bg-white rounded-xl flex flex-col justify-between  px-8 pt-8 pb-16 md:p-6 md:w-4/12 lg:w-3/12">
        <h2 class="mb-4 text-xl font-medium text-darkGrayishBlue">Cart</h2>
        <hr class="w-full mb-8 md:block">
        <div class="flex justify-between items-center mb-4">
          <img src="./images/image-product-1-thumbnail.jpg" class="w-1/4 rounded-xl mr-4 md:mr-2" alt="">
          <div class="w-3/9">
            <p class="text-sm text-darkGrayishBlue">Fall Limited Edition Sneakers</p>
            <p class="text-sm text-darkGrayishBlue">$125.00 * <span>${counter}</span> <span class="font-bold text-black">${cartTotal}</span></p>
          </div>
          <img src="./images/icon-delete.svg" class="cursor-pointer" alt="delete-icon">
        </div>
        <div class="text-white rounded-lg bg-orange flex justify-center items-center container mx-auto py-3">
          <h4 class="cursor-pointer p-">Checkout</h4>
        </div>

      </div> 
        `
    }
    cartSection.innerHTML = cartDiv;
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
    products.forEach((product) => {
        product.addEventListener("click", (e) => {
            const currentProduct = e.currentTarget.classList[1];
            productImage.src = `./images/image-${currentProduct}.jpg`
            
    
        })
    })
    























































function menuToggle(open, close) {
    open.classList.add('hidden');
    close.classList.remove('hidden');
}


































