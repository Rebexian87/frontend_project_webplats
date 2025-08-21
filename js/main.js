

window.onload=init;
function init() {
    getStarters()
    getMainCourses()
    getDesserts()
    getWine()

    document.getElementById("menuStarters").style.display="none"
    document.getElementById("menuMainCourses").style.display="none"
    document.getElementById("menuDesserts").style.display="none"
    document.getElementById("menuWine").style.display="none"

    let buttonNext1=document.getElementById("buttonNext1")
    buttonNext1.addEventListener("click", goToStarters)
    let buttonBefore2=document.getElementById("buttonBefore2")
    buttonBefore2.addEventListener("click", goToCover)
    let buttonNext2=document.getElementById("buttonNext2")
    buttonNext2.addEventListener("click", goToMainCourse)
    let buttonBefore3=document.getElementById("buttonBefore3")
    buttonBefore3.addEventListener("click", goToStarters)
    let buttonNext3=document.getElementById("buttonNext3")
    buttonNext3.addEventListener("click", goToDesserts)
    let buttonBefore4=document.getElementById("buttonBefore4")
    buttonBefore4.addEventListener("click", goToMainCourse)
    let buttonNext4=document.getElementById("buttonNext4")
    buttonNext4.addEventListener("click", goToWine)
    buttonBefore5=document.getElementById("buttonBefore5")
    buttonBefore5.addEventListener("click", goToDesserts)
   
}

function goToStarters() {
    document.getElementById("menuCover").style.display="none"
    document.getElementById("menuMainCourses").style.display="none"
    document.getElementById("menuDesserts").style.display="none"
    document.getElementById("menuWine").style.display="none"
    document.getElementById("menuStarters").style.display="block"
}

function goToCover(){
    document.getElementById("menuStarters").style.display="none"
    document.getElementById("menuMainCourses").style.display="none"
    document.getElementById("menuDesserts").style.display="none"
    document.getElementById("menuWine").style.display="none"
    document.getElementById("menuCover").style.display="block"
}

function goToMainCourse() {
    document.getElementById("menuStarters").style.display="none"    
    document.getElementById("menuDesserts").style.display="none"
    document.getElementById("menuWine").style.display="none"
    document.getElementById("menuCover").style.display="none"
    document.getElementById("menuMainCourses").style.display="block"
}

function goToDesserts() {
    document.getElementById("menuStarters").style.display="none"  
    document.getElementById("menuWine").style.display="none"
    document.getElementById("menuCover").style.display="none"
    document.getElementById("menuMainCourses").style.display="none"
    document.getElementById("menuDesserts").style.display="block"
}

function goToWine() {
    document.getElementById("menuStarters").style.display="none" 
    document.getElementById("menuCover").style.display="none"
    document.getElementById("menuMainCourses").style.display="none"
    document.getElementById("menuDesserts").style.display="none"
    document.getElementById("menuWine").style.display="block"
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


async function getDesserts (){

       try {const response = await fetch ("http://127.0.0.1:3000/api/dessert")
        if(response.ok) {
            const data= await response.json();
            console.log(data);
            displayDesserts(data) }} catch {
            console.log("fel");}          
        
     
    }


async function displayDesserts (data) {
        let desserts = document.getElementById("desserts")
        desserts.innerHTML="";


        data.forEach(dessert => {
            let newElLi= document.createElement ("li")      //Skapar nytt element (li)
            newElLi.innerHTML= (`<strong>${dessert.dessertName}</strong> <br> ${dessert.dessertDescription}  <br>  ${dessert.dessertPrice}:-`) //Skapar texten till det som visas i listan
             //newElLi.setAttribute('id', flag.id) //Skapar attributet id
            //newElLi.appendChild(newText) //Lägger newText som "barn" till newElLi
            desserts.appendChild(newElLi) // Lägger newElLi som "barn" till expEl
    })
        

    } 

    async function getWine (){

       try {const response = await fetch ("http://127.0.0.1:3000/api/wine")
        if(response.ok) {
            const data= await response.json();
            console.log(data);
            displayWine(data) }} catch {
            console.log("fel");}          
        
     
    }


async function displayWine (data) {
        let wines = document.getElementById("wine")
        wines.innerHTML="";


        data.forEach(wine => {
            let newElLi= document.createElement ("li")      //Skapar nytt element (li)
            newElLi.innerHTML= (`<strong>${wine.wineName}</strong> <br> ${wine.wineDescription}  <br>  ${wine.winePrice}:-/ ${wine.winePrice2}:-`) //Skapar texten till det som visas i listan
             //newElLi.setAttribute('id', flag.id) //Skapar attributet id
            //newElLi.appendChild(newText) //Lägger newText som "barn" till newElLi
            wines.appendChild(newElLi) // Lägger newElLi som "barn" till expEl
    })
        

    } 

 