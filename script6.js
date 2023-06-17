const reviews = [
    {
      id: 1,
      name: 'angela green',
      job: 'Google',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "accusamus distinctio error Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. eum odit quod corporis voluptatibus animi earum quae voluptates? Nemo, quidem cupiditate.",
    },
    {
      id: 2,
      name: 'anne madison',
      job: 'Apple',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Vel quam, autem ex vitae accusamus distinctio error Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit quod corporis voluptatibus animi earum quae voluptates? Nemo, quidem cupiditate.',
    },
    {
      id: 3,
      name: 'philip radisson',
      job: 'Meta',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: "Lorem animi earum quae voluptates? Nemo, quidem cupiditate ipsum dolor sit amet consectetur, adipisicing elit. Vel quam, autem ex vitae accusamus distinctio error eum odit quod corporis voluptatibus .",
    },
    {
      id: 4,
      name: 'brian morris',
      job: 'Amazon',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: " error eum odit quod corporis voluptatibus animi earum quae voluptates? Nemo, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quam, autem ex vitae accusamus distinctio  quidem cupiditate.",
    },
  ];



  const image = document.querySelector(".image");
  const names = document.querySelector(".name");
  const profile = document.querySelector(".jobProfile");
  const description = document.querySelector(".description")
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");


  let currentIndex = 0;

  defaultDisplay();



  function defaultDisplay()
  {
        let item = reviews[currentIndex];


        image.src = item.img;
        
        names.textContent= item.name;

        

        profile.textContent= item.job;

        

        description.textContent= item.text;
        

  };

  rightBtn.addEventListener("click" ,() => {

currentIndex++;

if(currentIndex>reviews.length-1)
{
    currentIndex=0;
} 

defaultDisplay();


  });

  leftBtn.addEventListener("click" ,() => {

    currentIndex--;
    
    if(currentIndex<0)
    {
        currentIndex=reviews.length-1;
    } 
    
    defaultDisplay();
    
    
      });


      let heroEnd = document.querySelector(".container");
let y = heroEnd.offsetTop;
console.log(y);
let navHeight = document.querySelector(".navbar");
let x = navHeight.offsetHeight;
console.log(x);

window.addEventListener("scroll", () => {
  if (window.scrollY > y - x ) 
  {
    navHeight.classList.add("activeBar");
  }
   else
   
   {
    navHeight.classList.remove("activeBar");
  }
});



