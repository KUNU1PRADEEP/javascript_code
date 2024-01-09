function sayMyName(){

    console.log("k");
    console.log('j');
}
sayMyName()
function addTwoNumbers(number1, number2)
{
    console.log(number1+number2);
}
addTwoNumbers(3,4)
addTwoNumbers(3,"4")
//..num=rest operator/spred operator- for passing multiple value.
function calculateCartPrice(...num1)
{
    return num1
}

console.log(calculateCartPrice(200,300,400))

const user={
    username:"Kunal",
    price: 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}`)


}
handleObject(user);