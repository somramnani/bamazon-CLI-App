var mysql = require("mysql");
var inquirer = require("inquirer");
var Table =  require("cli-table2");
var colors = require("colors")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Dragonfly_23",
  database: "bamazon"
})

connection.connect(function(err) {
  if(err) throw err;
  console.log("connected as id " + connection.threadId);
  

});

function getTable() {
  console.log('\n')
  var query = "SELECT * FROM products";
  connection.query(query, function(err, res) {
    let table = new Table({
      head:
        [
          'ID'.bold, 
          'Item Description'.bold, 
          {
            hAlign: 'center', 
            content: 'Department'.bold
          }, 
            
            {
              hAlign: 'center', 
              content: 'Price'.bold
            }, 
            'In Stock'.bold
          ],

      colWidths: [5,100,25,10,10]
    })
    for (var i = 0; i < res.length; i++) {
     
        table.push(
          [colors.cyan.bold(res[i].id), 
          res[i].product_name, 
          res[i].depart_name,
          {
            hAlign:'right', 
            content :'$'+parseFloat(res[i].price).toFixed(2)
          }, 
          {
            hAlign: 'right', 
            content: parseInt(res[i].stock_quantity)
          }
        ])
    
    }
    console.log(table.toString())
    purchasePrompt();
    });
  }


  function purchasePrompt(){
    inquirer
    .prompt([
      {
        name: "itemID",
        type: "input",
        message: "What is the ID of the product you would like to buy?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?"
      }
    ])
    .then(function(answer){
      var userID = answer.itemID;
      var quantity = answer.quantity;
      purchaseOrder(userID, quantity);   
    });

  }

  function purchaseOrder(ID, amountNeeded){
    connection.query("SELECT * FROM products WHERE id = " + connection.escape(ID), function(err,res){
      if(err) throw err;
    
      if(amountNeeded <= res[0].stock_quantity){
        var total = res[0].price * amountNeeded;
        var newQty = res[0].stock_quantity - amountNeeded;
        console.log("Your total cost for " + amountNeeded +" " + res[0].product_name + "is $" + total);
        connection.query("UPDATE products SET stock_quantity = " + newQty + " WHERE id = " + connection.escape(ID), function(err,res){
          if(err) throw err;
        } );
      }
    
      else{
        console.log("Insufficient quantity! We do not have enough of " + res[0].product_name );
      }

      getTable();
 
  });
}
getTable();
 
     
   





