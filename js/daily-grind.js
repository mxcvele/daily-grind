//alert("can you see this?");

/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
    that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  

    The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item 
    (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element 
    on the page for each day of the week.  All of the above must occur 
    within one page.

    pic - image src
    alt - an alt tag for the image
    desc - description of item
    day - the highlighted day of the week 
    color - color to match pic 
    name - the name of the coffee


*/

function coffeeTemplate(coffee){
    return `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
   <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
</p>
    `;

}


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }
 //convert to an integer
 myDay = parseInt(myDay);

//console.log(myDay);

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            pic : "images/caramel-latte.jpg", 
            alt : "a pic of caramel latte",
            desc : `it's cold, so a caramel latte sounds cozy!`, 
            day : "Sunday",
            color : "#FFDC73",
            name : "Caramel Latte"
        }; 
    break; 

    case 1:
        today = "Monday";
        coffee = {
            pic : "images/mocha.jpg", 
            alt : "a pic of mocha",
            desc : `served hot or cold, get a mocha!`, 
            day : "Monday",
            color : "#b3e6ff",
            name : "Mocha"
        };
    break; 

    case 2:
        today = "Tuesday";
        coffee = {
            pic : "images/bubble-tea.jpg", 
            alt : "a pic of bubble tea",
            desc : `I like me some bubble tea!`, 
            day : "Tuesday",
            color : "pink",
            name : "Bubble Tea"
        }; 
    break; 

    case 3:
        today = "Wednesday";
        coffee = {
            pic : "images/drip.jpg", 
            alt : "a pic of a drip coffee",
            desc : `drip coffee to match your drip!`, 
            day : "Wednesday",
            color : "brown",
            name : "Drip"
        }; 
    break; 

    case 4:
        today = "Thursday";
        coffee = {
            pic : "images/pumpkin-spice-latte.jpg", 
            alt : "a pic of a pumpkin spice latte",
            desc : `most popular during fall, it's great all year long!`, 
            day : "Thursday",
            color : "#F88379",
            name : "Pumpkin Spice Latte"
        }; 
    break; 

    case 5:
        today = "Friday";
        coffee = {
            pic : "images/cold-brew.jpg", 
            alt : "a pic of a cold brew",
            desc : `cold brew for when we're serious!`, 
            day : "Friday",
            color : "#ADBAED",
            name : "Cold Brew"
        }; 
    break;

    case 6:
        today = "Saturday";
        coffee = {
            pic : "images/frappaccino.jpg", 
            alt : "a pic of a frappaccino",
            desc : `endless flavors of blended ice coffee, topped off with whipped cream and syrup!`, 
            day : "Saturday",
            color : "#9fd1cf",
            name : "Frappaccino"
        }; 
    break;

    default: 
        today = "Something went wrong!"

}


//inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//custom color
document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);