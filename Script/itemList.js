var products =[
    {
        name:"Banana",
        vegetarian:true,
        glutenFree:true,
        organic:true,
        price:1.99},
    {
        name: "Bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.55
    },
    {
        name: "Apple",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price:0.99
    },
    {
        name: "Chicken breast (4pcs- medium)",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 12.00
    },
    {
        name: "Milk 1.2L",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.00
    },
    {
        name: "Pizza dough",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 6.00
    },
    {
        name: "Popcorn",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 12.00
    },
    {
        name: "Yogurt",
        vegetarian: true,
        glutenFree: true,
        organic:true,
        price: 6.00
    },
    {
        name: "Salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 12.00
    },
    {
        name: "Eggs (12pcs)",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 5.99
    }
];

//With the given restrictions makes a list of products and orders the list
function restrictList(product, restriction, is_organic){
    let temp;
    for (let i = 0; i < product.length; i++) {
        for (let j = 0; j < product.length; j++) {
            if (product[i].price < product[j].price) {
                temp = product[i]
                product[i] = product[j]
                product[j] = temp
            }
        }
    }
    let product_names = [];
    if (is_organic == true){
    for (let i=0; i<product.length;i+=1){
        if ((restriction == "Vegetarian")&&(product[i].vegetarian == true)&&(product[i].organic==true)){
            product_names.push(product[i].name+" $"+product[i].price);
        }
        else if ((restriction == "GlutenFree")&&(product[i].glutenFree == true)&&(product[i].organic==true)){
            product_names.push(product[i].name+" $"+product[i].price);
        }
        else if ((restriction == "VegAGlu")&& (product[i].glutenFree == true)&&(product[i].vegetarian == true)&&(product[i].organic==true)){
            product_names.push(product[i].name+" $"+product[i].price);
        }
        else if ((restriction == "None") &&(product[i].organic==true)){
            product_names.push(product[i].name+" $"+product[i].price);
        }
    }}
    else{
        for (let i=0; i<product.length;i+=1){
            if ((restriction == "Vegetarian")&&(product[i].vegetarian == true)){
                product_names.push(product[i].name+" $"+product[i].price);
            }
            else if ((restriction == "GlutenFree")&&(product[i].glutenFree == true)){
                product_names.push(product[i].name+" $"+product[i].price);
            }
            else if ((restriction == "VegAGlu")&& (product[i].glutenFree == true)&&(product[i].vegetarian == true)){
                product_names.push(product[i].name+" $"+product[i].price);
            }
            else if (restriction == "None"){
                product_names.push(product[i].name+" $"+product[i].price);
            }
        }
    }
    return product_names;
}
// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosen_products){
    let total_price = 0;
    for (let i=0; i<products.length;i+=1){
        if (chosen_products.indexOf(products[i].name+" $"+products[i].price)> -1){
            total_price += products[i].price;
        }
    }
    return total_price.toFixed(2);
}

