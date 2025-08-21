

window.onload=init;
function init() {
    getStarters()
    getMainCourses()
   
}

async function getStarters (){

       try {const response = await fetch ("http://127.0.0.1:3000/api/starters")
        if(response.ok) {
            const data= await response.json();
            console.log(data);
            displayStarters(data) }} catch {
            console.log("fel");}          
        
     
    }


async function displayStarters (data) {
        let starters = document.getElementById("starters")
        starters.innerHTML="";


        data.forEach(starter => {
            let newElLi= document.createElement ("li")      //Skapar nytt element (li)
            newElLi.innerHTML= (`<strong>${starter.sName}</strong> <br> ${starter.sDescription}  <br>  ${starter.sPrice}:-`) //Skapar texten till det som visas i listan
             //newElLi.setAttribute('id', flag.id) //Skapar attributet id
            //newElLi.appendChild(newText) //Lägger newText som "barn" till newElLi
            starters.appendChild(newElLi) // Lägger newElLi som "barn" till expEl
    })
        

    } 

    async function getMainCourses (){

       try {const response = await fetch ("http://127.0.0.1:3000/api/maincourses")
        if(response.ok) {
            const data= await response.json();
            console.log(data);
            displayMainCourses(data) }} catch {
            console.log("fel");}          
        
     
    }


async function displayMainCourses (data) {
        let mainCourses = document.getElementById("mainCourses")
        mainCourses.innerHTML="";


        data.forEach(mainCourse => {
            let newElLi= document.createElement ("li")      //Skapar nytt element (li)
            newElLi.innerHTML= (`<strong>${mainCourse.mainCourseName}</strong> <br> ${mainCourse.mainCourseDescription}  <br>  ${mainCourse.mainCoursePrice}:-`) //Skapar texten till det som visas i listan
             //newElLi.setAttribute('id', flag.id) //Skapar attributet id
            //newElLi.appendChild(newText) //Lägger newText som "barn" till newElLi
            mainCourses.appendChild(newElLi) // Lägger newElLi som "barn" till expEl
    })
        

    } 

