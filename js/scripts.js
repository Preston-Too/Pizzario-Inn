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
        alert('Your Order will be delivered soon. Thank You')
    })


