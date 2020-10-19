$(document).ready(function () {
    $('#btnSubmit').click(function (event) {
        $('#mySummary').show();
        var flavorType = $('#flavor').val();
        var flavorsize = $('#size').val();
        var flavorCrust = $('#crust').val();
        var toppingValue = $("input[name='toppings']:checked").val();


        var userInput = new Order(flavor(), size(), crust(), toppings(), number());
        console.log(userInput);
        var totalCost = userInput.totalcost();

        $('#typeOfPizza').text(flavorType);
        $('#typeOfSize').text(flavorsize);
        $('#typeOfTopping').text(toppingValue);
        $('#typeOfCrust').text(flavorCrust);
        $('#typeOfQty').text(number());
        $('#typeOfCost').text(totalCost);


    })

    $('.pickUp').click(function () {
        alert('Thanks for your Order. Kindly Pick it up at the counter');
    })

    $('.deliver').click(function () {
        $('.cdata-overlay').show();
    })
    $('.go').click(function () {
        alert('Your Order will be delivered soon. Delivery fee is Ksh. 150')
        alert("Thank you for believing in us.")
    })



    function flavor() {
        var pizzaFlavor = document.getElementById('flavor').value;

        if (pizzaFlavor === 'BBQ Chicken Pizza') {
            return 100
        }
        else if (pizzaFlavor === 'Margherita Pizza') {
            return 200
        }
        else if (pizzaFlavor === 'Pepperoni Pizza') {
            return 150
        }
        else if (pizzaFlavor === 'Hawaiian Pizza') {
            return 100
        }
        else if (pizzaFlavor === 'Periperi Pizza') {
            return 200
        }
        else if (pizzaFlavor === 'Meat Lovers Pizza') {
            return 130
        }

    }

    function size() {
        var pizzaSize = document.getElementById('size').value;
        if (pizzaSize === 'Large') {
            return 800
        }
        else if (pizzaSize === 'Medium') {
            return 650
        }
        else if (pizzaSize === 'Small') {
            return 500
        }

    }
    function crust() {
        var preferredCrust = document.getElementById('crust').value;
        if (preferredCrust === 'Crispy') {
            return 200
        }
        else if (preferredCrust === 'Stuffed') {
            return 150
        }
        else if (preferredCrust === 'Glutten Free') {
            return 180
        }
    }
    function toppings() {
        return 100
    }
    function number() {
        var pizzaNumber = document.getElementById('quantity').value;
        return parseInt(pizzaNumber);

    }
    function Order(flavor, size, crust, topping, quantity) {
        this.newFlavor = flavor;
        this.newSize = size;
        this.newCrust = crust;
        this.newTopping = topping;
        this.newQuantity = quantity;
    }

    Order.prototype.totalcost = function () {
        return ((this.newFlavor + this.newCrust + this.newSize + this.newTopping) * this.newQuantity)
    }
    event.preventDefault();

});