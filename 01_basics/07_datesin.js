let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let mycreatedDate=new Date(2023, 0,23)
console.log(mycreatedDate.toDateString());


let myTimeStamp=Date.now()

console.log(myTimeStamp);

console.log(Date.now());


let newDate=new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{weekday:"long"
    

})

