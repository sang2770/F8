// cuon chuot
window.onscroll = function() {myFunction()};

function myFunction(){
    var a=document.documentElement.scrollTop;
    var headerHeight=document.getElementsByTagName("header")[0].clientHeight;
    var Section1=document.getElementsByClassName("one")[0];
    var Section2=document.getElementsByClassName("two")[0];
    var Section4=document.getElementsByClassName("four")[0];
    var Section5=document.getElementsByClassName("five")[0];
    // Menu
    console.log(headerHeight);
    if(a>headerHeight)
    {
        document.getElementsByClassName("header__menu")[0].style.backgroundColor = "var(--white-color)";
        document.getElementsByClassName("header__menu")[0].style.boxShadow = "1px 1px 5px #ccc";
    }
    else
    {
        document.getElementsByClassName("header__menu")[0].style.backgroundColor = "transparent";
        document.getElementsByClassName("header__menu")[0].style.boxShadow = "none";
    }
    
    // tao hieu ung
    // two
    // if(a > (Section1.offsetTop - 400) )
    // {
    //     Section1.style.animation="Hien forwards 0.6s";
    // }
    
    // if(a > (Section2.offsetTop - 400) )
    // {
    //     Section2.style.animation="Hien forwards 0.6s";
    // }
    
    // // four
    // if(a > (Section4.offsetTop - 300) )
    // {
    //     Section4.style.animation="Hien forwards 0.6s";
    // }
    
    // // five
    // if(a > (Section5.offsetTop - 400) )
    // {
    //     Section5.style.animation="zoom forwards 0.6s";
    // }
    
}
// click
// Cart
var cart=document.querySelectorAll(".header__menu-item-r a")[3];
var closebtn=document.getElementsByClassName("close-cart")[0];
console.log(cart);
var header_cart=document.getElementsByClassName("header__cart")[0];
cart.addEventListener("click", function(event)
{
    event.preventDefault();
    // header_cart.classList.add("enableshow");
    header_cart.style.animation="rightToleft forwards 0.6s";

})
closebtn.addEventListener("click", function(event)
{
    event.preventDefault();
    header_cart.style.animation="toright forwards 0.6s";
    // header_cart.classList.remove("enableshow");


})
var bar=document.getElementsByClassName("bar")[0];
var menubar=document.getElementsByClassName("default")[0];
menubar.addEventListener("click", function(){
    console.log("menu");
    bar.style.display="block";
    bar.style.animation="leftToright  forwards 0.6s";
});
var closebar=document.getElementsByClassName("close")[0];
closebar.onclick=function(e){
    e.preventDefault();
    bar.style.animation="toleft  forwards 0.6s";
    // console.log(e.animationName);
}
console.log(document.body.clientWidth);
