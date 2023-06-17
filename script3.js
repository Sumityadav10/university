let heroEnd = document.querySelector(".form");
let y = heroEnd.offsetTop;
console.log(y);
let navHeight = document.querySelector(".navbar");
let x = navHeight.offsetHeight;
console.log(x);

window.addEventListener("scroll", () => {
  if (window.scrollY > y - x + 20 ) 
  {
    navHeight.classList.add("activeBar");
  }
   else
   
   {
    navHeight.classList.remove("activeBar");
  }
});




let names = document.querySelector("#yourname").value;
let mail = document.querySelector("#yourmail").value;
let number = document.querySelector("#yournum").value;
let dob = document.querySelector("#DOB").value;
// let submitBtn = document.querySelector("#formSubmit").value;


let nameBox = document.querySelector("#namepart");
let mailBox = document.querySelector("#mailpart");
let numBox = document.querySelector("#numberpart");
let dobBox = document.querySelector("#dobpart");

let admnBanner = document.querySelector(".query");
let formBox = document.querySelector(".form");
let credBox = document.querySelector(".credentials");

let crossBtn = document.querySelector("#cross");

let askQuery = document.querySelector(".askQuery");

let queryForm = document.querySelector(".queryForm");



askQuery.addEventListener("click", () => {

  credBox.classList.remove("activate");
  queryForm.classList.add("activate");

  



});



crossBtn.addEventListener("click", () => {

  credBox.classList.remove("activate");
  admnBanner.classList.remove("deactivate");
formBox.classList.remove("deactivate");



});




function showCredentials()
{


admnBanner.classList.add("deactivate");
formBox.classList.add("deactivate");
credBox.classList.add("activate");

nameBox.innerText= names;
mailBox.innerText =mail;
numBox.innerText=number;
dobBox.innerText=dob;


};


function validate()
{
    if(names==""){

        alert("enter correct name");

        console.log("it also runs")



        return false;
    }

    if(mail===""){

        alert("enter correct mail");

        return false;
    }

    if(number===""){

        alert("enter correct number");

        return false;
    }

    if(dob===""){

        alert("enter correct dob");

        return false;
    }

    alert("submit successful");
    return true;
};


 function proceed()
{

 names = document.querySelector("#yourname").value;
 mail = document.querySelector("#yourmail").value;
 number = document.querySelector("#yournum").value;
 dob = document.querySelector("#DOB").value;


     let bool = validate();
     console.log("it runs");

     if(bool===true)
     {
        showCredentials();

        console.log("last function");
     }

     


};

