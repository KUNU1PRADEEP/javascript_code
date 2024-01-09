// const tinderUser = new Object() -- singleton object
const tinderUser={}       //-- non singleton Object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false


console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kunal",
            lastname: "jais"

        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname);
//?-ask if value exist then continue else cazz.

const obj1= {1: "A", 2: "B",}
const obj2={3: "a", 4: "B"}
// const obj3= {obj1, obj2}


// const obj3= Object.assign({}, obj1, obj2)

const obj3={ ...obj1, ...obj2}
console.log(obj3);

// const user= {
//     {
//     //     id:1,
//     //     email:"kuk@k"
//     // }
//     // {
//     //     id:1,
//     //     email:"kuk@k"
//     // }
//     // {
//     //     id:1,
//     //     email:"kuk@k"
//     // 
// }

//     users[1].email
//     console.log(tinderUser);

//     console.log(Object.keys(tinderUser));

//     console.log(Object.values(tinderUser));

//     console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// }



const course= { 
    coursename: "js in hindi",
    price: "999",
    courseInstructure: "hitesh Sir"

}
//course.courseInstructure

// const {courseInstructure}=course

// console.log(courseInstructure);


const {courseInstructure: instructor}=course

console.log(instructor);

//destructuring
const navbar=({company})=> {

}
navbar(company= "kunal")
  

//random user me api
[
    {},
    {},
    {},
    {}
]


{"results":[{"gender":"female","name":{"title":"Ms","first":"Emmanuel","last":"Skoropadskiy"},"location":{"street":{"number":5700,"name":"Soborna ploshcha"},"city":"Zhitomir","state":"Sumska","country":"Ukraine","postcode":29504,"coordinates":{"latitude":"78.8185","longitude":"146.7335"},"timezone":{"offset":"+10:00","description":"Eastern Australia, Guam, Vladivostok"}},"email":"emmanuel.skoropadskiy@example.com","login":{"uuid":"4cff9c4b-3d32-4490-9709-f91fd59c01be","username":"organicwolf661","password":"646464","salt":"2mltLb2E","md5":"2f18766c18403e0202845ba0d1915b1c","sha1":"9c33590723c5976d1f7d467207eec5fb4001b0c7","sha256":"9eeda8abe4f46687b578556746bd25609dd2e3c2ce1a5f6089431cec6dd56b1f"},"dob":{"date":"1951-03-21T13:36:32.743Z","age":72},"registered":{"date":"2022-01-14T02:18:28.892Z","age":1},"phone":"(068) P70-0791","cell":"(066) E49-8499","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/80.jpg","medium":"https://randomuser.me/api/portraits/med/women/80.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/80.jpg"},"nat":"UA"}],"info":{"seed":"18c59894910a3e45","results":1,"page":1,"version":"1.4"}}
  //json formatter


