var products =[
    {
        name:"Banana",
        type:"fruit",
        vegetarian:true,
        glutenFree:true,
        organic:true,
        price:1.99,
        //image taken from https://www.medicalnewstoday.com/articles/325879
        photo:"photos/Banana.jpg"
    },
    {
        name: "Bread",
        type:"bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.55,
        //image taken from https://www.kingarthurflour.com/recipes/the-easiest-loaf-of-bread-youll-ever-bake-recipe
        photo: "photos/Bread.jpg"
    },
    {
        name: "Apple",
        type:"fruit",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price:0.99,
        //img taken from https://www.healthline.com/health-news/gmo-apples-potatoes-hitting-shelves
        photo: "photos/Apples.jpg"
    },
    {
        name: "Chicken breast (4pcs- medium)",
        type: "meat",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 12.00,
        //img taken from https://www.tasteofhome.com/collection/chicken-mistakes/
        photo: "photos/Chicken.jpg"
    },
    {
        name: "Milk 1.2L",
        type: "dairy",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.00,
        //img taken from https://dairyfarmersofcanada.ca/en/8-facts-you-should-know-about-canadian-milk-and-antibiotics
        photo: "photos/Milk.jpg"
    },
    {
        name: "Pizza dough",
        type: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 6.00,
        //img taken from https://tastesbetterfromscratch.com/perfect-pizza-crust/
        photo: "photos/Pizza dough.jpg"
    },
    {
        name: "Popcorn",
        type: "snack",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 12.00,
        //img taken from https://cleangreensimple.com/article/vegan-popcorn/
        photo: "photos/Popcorn.jpg"
    },
    {
        name: "Yogurt",
        type: "dairy",
        vegetarian: true,
        glutenFree: true,
        organic:true,
        price: 6.00,
        //img taken from https://www.medicalnewstoday.com/articles/323169
        photo: "photos/Yogurt.jpg"
    },
    {
        name: "Salmon",
        type: "meat",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 12.00,
        //img taken from https://smokeandthyme.com/2014/01/16/beetroot-cured-salmon/raw-salmon/
        photo: "photos/Salmon.jpg"
    },
    {
        name: "Eggs (12pcs)",
        type: "dairy",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 5.99,
        //img taken from https://www.healthline.com/nutrition/10-proven-health-benefits-of-eggs
        photo: "photos/Eggs.jpg"
    }
];

//With the given restrictions makes a list of products and orders the list
function restrictList(product, restriction, is_organic, type){
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
    if (type=="all") {
        if (is_organic == true) {
            for (let i = 0; i < product.length; i += 1) {
                if ((restriction == "Vegetarian") && (product[i].vegetarian == true) && (product[i].organic == true)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "GlutenFree") && (product[i].glutenFree == true) && (product[i].organic == true)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "VegAGlu") && (product[i].glutenFree == true) && (product[i].vegetarian == true) && (product[i].organic == true)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "None") && (product[i].organic == true)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                }
            }
        } else {
            for (let i = 0; i < product.length; i += 1) {
                if ((restriction == "Vegetarian") && (product[i].vegetarian == true)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "GlutenFree") && (product[i].glutenFree == true)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "VegAGlu") && (product[i].glutenFree == true) && (product[i].vegetarian == true)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if (restriction == "None") {
                    product_names.push(product[i].name + " $" + product[i].price);
                }
            }
        }
    }
    else{
        if (is_organic == true) {
            for (let i = 0; i < product.length; i += 1) {
                if ((restriction == "Vegetarian") && (product[i].vegetarian == true) && (product[i].organic == true) &&(product[i].type==type)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "GlutenFree") && (product[i].glutenFree == true) && (product[i].organic == true) &&(product[i].type==type)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "VegAGlu") && (product[i].glutenFree == true) && (product[i].vegetarian == true) && (product[i].organic == true) &&(product[i].type==type)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "None") && (product[i].organic == true) &&(product[i].type==type)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                }
            }
        } else {
            for (let i = 0; i < product.length; i += 1) {
                if ((restriction == "Vegetarian") && (product[i].vegetarian == true) &&(product[i].type==type)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "GlutenFree") && (product[i].glutenFree == true) &&(product[i].type==type)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if ((restriction == "VegAGlu") && (product[i].glutenFree == true) && (product[i].vegetarian == true) &&(product[i].type==type)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                } else if (restriction == "None" &&(product[i].type==type)) {
                    product_names.push(product[i].name + " $" + product[i].price);
                }
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

