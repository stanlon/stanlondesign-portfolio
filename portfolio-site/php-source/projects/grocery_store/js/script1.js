$(document).ready(function(){
  var listOfItems = [];
  var totalPrice = 0;

  $(".item").on("click", "button", function(event){
  //Item Button - Add
    console.log(event.target);
    var item = $(event.target); //button
    console.log(item.html());
    item = $(event.target).html("Undo");
    item = $(event.target).removeClass("btn-primary");
    item = $(event.target).addClass("btn-danger");

  //Item Name
    var itemName = $(event.target).parent().next().children(".itemName").addClass("blue");


  //Item Price
    var itemPrice = $(event.target).parent().next().children().find("span.itemPrice").addClass("red");

    //Option 1 - find(); - fastest, simplest way.
    //var itemPrice = $(event.target).parent().next().children().find("span.itemPrice").addClass("red");

    //Option 2 - :nth-child(2)
    //Delete .find("span") to target entire 2nd p tag.
    //var itemPrice = $(event.target).parent().next().children("p:nth-child(2)").find("span").addClass("red");

    //Option 3 - :nth-child(2)
    //Delete .children("span.itemPrice") to target entire 2nd p tag.
    //var itemPrice = $(event.target).parent().next().children("p:nth-child(2)").children("span.itemPrice").addClass("red");

    //Option 4 - nth
    // The most confusing I feel like.
    // https://api.jquery.com/children/
    //var itemPrice = $(event.target).parent().next().children().children(".itemPrice").addClass("red");

    itemPrice = $(event.target).parent().next().children().find("span.itemPrice").html();

    itemPrice = parseFloat(itemPrice);
    console.log(itemPrice);

  });

});
