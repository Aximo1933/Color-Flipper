const colors = ["green", "red", "Cyan", "Blue","DarkBlue","LightBlue","Purple","Yellow","Lime","Magenta","Pink","White","Silver","Orange","Brown","Maroon","Green","Olive","Aquamarine"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber=getRandonNo();
    console.log(getRandonNo());
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});


function getRandonNo(){
    return Math.floor(Math.random()*colors.length);
};