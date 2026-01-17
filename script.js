let darkBtn = document.getElementById("dark");
let normalBtn = document.getElementById("light");
let purpleBtn = document.getElementById("purple");

function clearThemes(){
    document.body.classList.remove("dark","purple");
}
darkBtn.addEventListener("click",function(){
    clearThemes();
    document.body.classList.toggle("dark");
});

normalBtn.addEventListener("click",function(){
    clearThemes();
});

purpleBtn.addEventListener("click",function(){
    clearThemes();
    document.body.classList.add("purple");
});
