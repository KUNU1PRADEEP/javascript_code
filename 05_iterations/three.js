//for of

const arr=[1,2,3,4,5]

//for(const iterator of Object)

for(const num of arr)
    {
        console.log(num);
    }

const greetings="Hello World !"

for (const greet of greetings)
    {
        console.log(`Each char is ${greet}`);
    }

// map

const map= new Map()
map.set('IN',"India")
map.set('USA',"AMERICA")
map.set('FR',"France")
map.set('IN',"India")
map.set('IN',"India")
map.set('IN',"India")
map.set('IN',"India")


console.log(map);

// for(const key of map)
//     {
//         console.log(key)
//     }

// for(const [key, value] of map)
//     {
//         console.log(key, ':-', value);
//     }

for (const key in map)
{
    console.log(key);
}

const myObject= {
    'game1': 'NFS',
    'GAME2': 'Spiderman'
}

