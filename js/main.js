// Creo lista di codici Coupon
let couponList = [
    "9832QDFGT",
    "8573DCURE",
    "6472REWSF",
    "1298TOTTI",
    "9876TIHG2",
    "1234BOOLE"
];

// Dichiaro variabili
let calculateBtn = document.getElementById("calculate-btn");
let price = 50;
let coupon = document.getElementById("coupon");

//Creo funzione tasto "Calculate"
calculateBtn.addEventListener("click", function()
{
    //Variabili degli input inseriti
    var burgerName = document.getElementById("burger-name").value;
    if (burgerName != "") {
        var added = document.getElementsByClassName('adds');
        addIngredient(added);
        addCoupon(couponList, coupon);
        document.getElementById("final-price").innerHTML = "$ " + price;
    } else {
        alert("Inserire un nome al panino!")
    }
}
)

/* ---> FUNZIONI <--- */

//Funzione per i checkbox degli ingredienti
function addIngredient(element) {
    for ( var i = 0; i < element.length; i++) {
        if (element[i].checked) {
          price += parseInt(element[i].value);
        }
    }
}

//Funzione per applicare il coupon
function addCoupon(array, input) {
    if ( array.includes(input.value) ) {
        price -= price * 0.2;
    }
}
