/*Objective: Grocery Store Website

Create a website for a grocery store where the user can pick from different items. The user will clcik a button from a box which should show the name of the item, the price and a picture of the item.

Each time the user clicks "Add" on an item, the total price should go up. Display the total price on a fixed bar on the left of the page.

User has option to click and "Undo" an item which will subtract that item from the total price/amount. Have the total price start off at $0.00.

NEXT:
Once user hits finish, send the user to a checkout page, showing the user all of the items they are purchasing and how much their total price is.

*/

$(document).ready(function(){
  var listOfItems = [];
  var totalPrice = 0.00;
  var groceryList = $("ul#groceryList");

  $(".item").on("click", "button", function(event){
    var item = $(event.target);         //Button Being Clicked
    var itemBtnText = item.html();      //Button Text
    var itemName = $(event.target).parent().next().children(".itemName").html();  //Item Name
    //console.log(itemName);
    var itemPrice = $(event.target).parent().next().children().find("span.itemPrice").html(); //Item Price
    itemPrice = parseFloat(itemPrice);  //Item Price Turned into a number from a string.
    var totalAmount = $("span#totalAmount");  //Total Amount on priceBar

    /* Conditional
    The conditional is going to be based off of whether the Buttons Text says "Add" or "Undo"
    meaning if the Buttons Text says "Add" then
      1. Change the Buttons Text to "Undo"
      2. Change the Buttons Color to red by removing class "btn-primary" and adding class "btn-danger".
      3. Push the Items Name into the "listOfItems" array.
      4. Add Items Price to the Total Price
      5. Display that new total price on the price bar.

    Else - Do the opposite for numbers 1-5 above.
    */

    if( itemBtnText === "Add" ) {
      //Item Button
        item = $(event.target).html("Undo");
        item = $(event.target).removeClass("btn-primary");
        item = $(event.target).addClass("btn-danger");

      //Item Name
        //Pushes item thats clicked into listOfItems array
        listOfItems.push(itemName);
        //console.log(itemName);
        //console.log(listOfItems);

      //Item Price
        //console.log(itemPrice);
        totalPrice = totalPrice + itemPrice;
        totalPrice = Number(totalPrice.toFixed(2));
        //console.log(totalPrice);
        //console.log(typeof totalPrice);
        totalAmount = totalAmount.html(totalPrice);

    }  else {
      //Item Button
        item = $(event.target).html("Add");
        item = $(event.target).removeClass("btn-danger");
        item = $(event.target).addClass("btn-primary");

      //Item Name
        //Whichever item user decides to click "Undo" will pull that item from the Grocery list or in this case the listOfItems array.
        //console.log(itemName);
        var i = listOfItems.indexOf(itemName); //return items position as a #
        //console.log(i);
        listOfItems.splice(i, 1); //Searches listOfItems array for that position and deletes it.
        //console.log(listOfItems);

      //Item Price
        //Subtracts items price from total amount.
        //console.log(itemPrice);
        totalPrice = totalPrice - itemPrice;
        totalPrice = Number(totalPrice.toFixed(2));
        //console.log(totalPrice);
        //console.log(typeof totalPrice);
        totalAmount = totalAmount.html(totalPrice);
    }
    console.log(listOfItems);
  });

  //Show Grocery Items in Modal When Finished Button is clicked.
  $("#priceBar button").click(function(event){
    if(groceryList.html() !== groceryList.html("")) {
      groceryList = groceryList.html("");
      console.log(groceryList);
      listOfItems.forEach(function(groceryItem) {
        groceryList.append("<li>" + groceryItem + "</li>");
      });
      console.log(groceryList);
    }
  });

  //Problem Before - Duplicated the list after hitting finish button.
  /*$("#priceBar button").click(function(event){
    listOfItems.forEach(function(groceryItem) {
      groceryList.append("<li>" + groceryItem + "</li>");
    });
  });*/

});
