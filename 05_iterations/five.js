// const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// })

//call back function. 

//call back arrow function
// coding.forEach
// (   (item)=> 
//     {
//         console.log(item);
//     }
// )

// function printMe(item)
// {
//     console.log(item);

// }

// coding.forEach(printMe)



//call back arrow function

// coding.forEach((item,index, arr)=>
//     {
//         console.log(item,index,arr);
//     }
//     )



const myCoding=[
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"python",
        languageFileName: "py"
    },
    {
        languageName:"java",
        languageFileName: "java"
    }
    

    

]

myCoding.forEach((item)=>
    {
        console.log(item.languageName);
    })

