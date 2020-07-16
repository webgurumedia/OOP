// working with object literals
// const btn = document.getElementById("btn").addEventListener("click", loaddata);

// function loaddata(){
// const na = document.getElementById("name").value;
// const ag = document.getElementById("age").value;
// const em = document.getElementById("email").value;

const Data = {
    name: "Boluwatife",
    age: "23",
    email: "bolu@yahoo.com",
    getdata: function(){
           var time = new Date().getHours();
           if(time > 12){
            return `Good Day ${this.name} your mail:${this.email} is empty`;
        }                  
    }
    }
console.log(Data);
console.log(Data.getdata());
// document.getElementById("msg").innerHTML = Data.getdata();

// the object.assign method is used to copy all properies from an object
// it also enables us to use the function inside the data object


const obj = Object.assign({}, Data, {
    // assigning new values to the 'data' properties
    name: "King James",
    age: "35",
    email: "james@gmail.com"
});

// checking out the workflow
console.log(obj);
console.log(obj.getdata());

const arr = Object.entries(Data);

for (let i = 0; i < 4; i++) {
    console.log("Row #" + i); 
    for (let j = 0; j < 2; j++) {
       console.log(i, j, arr[i][j])
    }
 }


 const boj = {};

 Object.defineProperties(boj, {
     name: {
         value: "Derin",
         writable:  true,
     }
 });

console.log(boj.name);