//-------------//
//   NAVBAR    //
//-------------//

const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
  // hambruger animation
  hamburger.classList.toggle("is-active");
  // mobilenav appears
  mobilenav.classList.toggle("is-active");
});

//-------------//
//    FAQ's    //
//-------------//

// make a loop for all accordion questions
document.querySelectorAll(".accordion-question").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("click!");
    let accCollapse = item.nextElementSibling;

    // Open accordion item
    if (!item.classList.contains("open")) {
      console.log("toggle accordion button");

      // Gettin the height
      accCollapse.style.display = "block";
      let accHeight = accCollapse.clientHeight;
      console.log("accHeight");

      // Setting the height
      setTimeout(() => {
        accCollapse.style.height = accHeight + "px";
        accCollapse.style.display = "";
      }, 1);

      // Remove "collapse", add "collapsing" to .accordion_collapse (sibling)
      accCollapse.classList = "accordion-collapse collapsing";

      // After X amount of time, remove "collapsing" class and add "open" class
      setTimeout(() => {
        console.log("toggle collapsing");
        accCollapse.classList = "accordion-collapse open";
      }, 300);
    }

    // Close accordion item
    else {
      // Remove "collapse open" from .accordion-collapse, add "collapsing"
      accCollapse.classList = "accordion-collapse collapsing";

      setTimeout(() => {
        accCollapse.style.height = "0px";
      }, 1);

      // After X amount of time, temove "collapsing" class and andd "collapse" class
      setTimeout(() => {
        console.log("close accordion content");
        accCollapse.classList = "accordion-collapse collapse";
        accCollapse.style.height = "";
      }, 300);
    }

    item.classList.toggle("open");

    accCollapse.classList.toggle("open");
  });
});

//-------------//
//    CART     //
//-------------//

// all initial elements
const payAmountBtn = document.querySelector("#payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElem = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElem = document.querySelectorAll("#price");
const subtotalElem = document.querySelector("#subtotal");
const taxElem = document.querySelector("#tax");
const totalElem = document.querySelector("#total");

// loop: for add event on multiple `increment` & `decrement` button
for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    // collect the value of `quantity` textContent,
    // based on clicked `increment` button sibling.
    let increment = Number(this.previousElementSibling.textContent);

    // plus `increment` variable value by 1
    increment++;

    // show the `increment` variable value on `quantity` element
    // based on clicked `increment` button sibling.
    this.previousElementSibling.textContent = increment;

    totalCalc();
  });

  decrementBtn[i].addEventListener("click", function () {
    // collect the value of `quantity` textContent,
    // based on clicked `decrement` button sibling.
    let decrement = Number(this.nextElementSibling.textContent);

    // minus `decrement` variable value by 1 based on condition
    decrement <= 1 ? 1 : decrement--;

    // show the `decrement` variable value on `quantity` element
    // based on clicked `decrement` button sibling.
    this.nextElementSibling.textContent = decrement;

    totalCalc();
  });
}

// function: for calculating total amount of product price
const totalCalc = function () {
  // declare all initial variable
  const tax = 0.05;
  let subtotal = 0;
  let totalTax = 0;
  let total = 0;

  // loop: for calculating `subtotal` value from every single product
  for (let i = 0; i < quantityElem.length; i++) {
    subtotal +=
      Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
  }

  // show the `subtotal` variable value on `subtotalElem` element
  subtotalElem.textContent = subtotal.toFixed(2);

  // calculating the `totalTax`
  totalTax = subtotal * tax;

  // show the `totalTax` on `taxElem` element
  taxElem.textContent = totalTax.toFixed(2);

  // calcualting the `total`
  total = subtotal + totalTax;

  // show the `total` variable value on `totalElem` & `payAmountBtn` element
  totalElem.textContent = total.toFixed(2);
  payAmountBtn.textContent = total.toFixed(2);
};

//----------------------//
//    Active BUTTONS    //
//----------------------//

var yourbuttons = document.getElementsByClassName("selected");
for (var i = yourbuttons.length - 1; i >= 0; i--) {
  var currentbtn;
  yourbuttons[i].onclick = function () {
    if (currentbtn) {
      currentbtn.classList.remove("select");
    }
    this.classList.add("select");
    currentbtn = this;
  };
}
