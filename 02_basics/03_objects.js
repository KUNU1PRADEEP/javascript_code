// object literaalss

// Object.create=through constructur

const mySym=Symbol("key1")


const JsUser={

    name: "Kunal",
    age: 18,
    location:"jaipur",
    [mySym]: "mykey1",
    email: "kunu@jfff",
    isLoggedIn : false,
    lastLoginDays: ["monday","Saturday"]
}

 console.log(JsUser.email)
 console.log(JsUser['email'])


console.log(typeof JsUser[mySym])

JsUser.email="kkk@gmail.com"
// Object.freeze(JsUser)
JsUser.email="kkee3332@ga"
console.log(JsUser)

JsUser.greeting=function()
{
    console.log("hello, Js User");

}


JsUser.greetingTwo=function()
{
    console.log(`hello, Js User, ${this.name}`);

}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());