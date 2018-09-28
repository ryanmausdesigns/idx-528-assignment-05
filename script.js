//even
var user_input = 0
do { 
    user_input = prompt("please enter an even number");
    user_input = parseInt( user_input, 10);  
} while (user_input  % 2 == 1 );



//odd
do { 
    user_input = prompt("please enter an odd number");
    user_input = parseInt( user_input, 10);  
} while (user_input  % 2 == 0 );






var fruits = [

]
for (let i = 0; i < 10; i++ ) {
fruit_input = prompt("enter a fruit");
fruits.push(fruit_input); 
};

var to_find = prompt("enter a fruit name"); 
for (var fruit_index = 0; fruit_index < fruits.length; fruit_index++){
    if (fruits[fruit_index] == to_find )
    { break; }
};


if (fruits[fruit_index] == to_find ){
    console.log("your fruit is at index" + fruit_index) 
};

if (fruits[fruit_index] != to_find) {
    console.log("your fruit is not in the array ")
}

