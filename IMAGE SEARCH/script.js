const apikey="Kex13Gy4IIx0HoN_1OZJ-uaW-MSp0qllLSyNHepoIO4";
const from=document.querySelector("form");
const input=document.getElementById("search-input");
const inputButton=document.getElementById("search-button");
const scarchResult=document.querySelector(".search-results");
const  showmore=document.getElementById("showmore");

let inputdata="";
let count=1; 

async function scarch_images(){
    inputdata=input.value;
    const url= `https://api.unsplash.com/search/photos?page=${count}&query=${inputdata}
    &client_id=${apikey}`;

    scarchResult.innerHTML = '';

    const response = await fetch(url);  // Use the variable 'url' instead of the string 'url'
    const data =await response.json();
    const results=data.results;
    // if(count==1){
    //     scarchResult.innerHTML="";

    // }
    results.map((results)=>{
        const imgwraper=document.createElement('div');
        imgwraper.classList.add('search-result');
        const image=document.createElement('img');
        image.src=results.urls.small;
        imgwraper.appendChild(image);
       scarchResult.appendChild( imgwraper)
    })
    count++;
    console.log(count)
    if(count>1){
        showmore.style.display="block";
    }
    results.value="";
    
}

inputButton.addEventListener('click',(e)=>{
    e.preventDefault();
    page=1;
    scarch_images();
})

showmore.addEventListener('click', () => {
    // Increment count by 2 when the showmore button is clicked
    scarch_images();
});