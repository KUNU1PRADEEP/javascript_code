// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

// //scope-> {} comes with if, else.

// if(true)
// {
//     let a=10
//     const b=20
//     var c=30
// }

//dom- document object model


// function one()
// {
//     const username="Kunal"

//     function two ()
//     {
//         const website="youtube"
//         console.log(username);
//     }

//     // console.log(website);- cant access

//     two()
// }

// one()

if(true)
{
    const username="kunal"
    if(username==="kunal")
    {
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website);- wrong.
}

//console.log(username)- wrong.

// ++++++++++++++++++++++++++++++++++++==================


function addone(num)
{
    return num+1
}

addone(5);

const addTwo=function(num)