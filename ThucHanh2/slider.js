// left
var btn_left=document.querySelector(".banner_arrow_left");
var btn_right=document.querySelector(".banner_arrow_right");

var listimg=document.querySelectorAll(".banner");
console.log(btn_left);
var Size=listimg.length-1;
console.log(Size);
var count=0;
var a="banner_active"
var time=0;
function timer(ms)
{
    time=setInterval(()=>{
        btn_right.click();
    }, ms)
}
timer(5000);
btn_right.onclick=()=>{  
    clearInterval(time);
    if(count !=Size)
    {
        
        listimg[count].classList.add( "toLeft");
        count++;
        console.log(`${a}`);
        listimg[count].classList.add(`${a}`, "rightToleft");
        let end=setTimeout(()=>{
            listimg[count].classList.remove("rightToleft");
            listimg[count-1].classList.remove(`${a}`, "toLeft");
            },850)
    }
    else
    {
        listimg[Size].classList.add( "toLeft");
        count=0;
        console.log(`${a}`);
        listimg[0].classList.add(`${a}`, "rightToleft");
        let end=setTimeout(()=>{
            listimg[0].classList.remove("rightToleft");
            listimg[Size].classList.remove(`${a}`, "toLeft");
            }, 850)
        
    }
    timer(5000);
}
btn_left.onclick=()=>{
    clearInterval(time);
    if(count !=0)
    {
        listimg[count].classList.add( "toRight");
        count--;
        console.log(`${a}`);
        listimg[count].classList.add(`${a}`, "leftToright");
        let end=setTimeout(()=>{
            listimg[count].classList.remove("leftToright");
            listimg[count+1].classList.remove(`${a}`, "toRight");
            },850)
    }
    else
    {
        listimg[count].classList.add( "toRight");
        count=Size;
        console.log(`${a}`);
        listimg[count].classList.add(`${a}`, "leftToright");
        let end=setTimeout(()=>{
            listimg[count].classList.remove("leftToright");
            listimg[0].classList.remove(`${a}`, "toRight");
            },850)
        
    }
    timer(5000);
}
var test=new Promise((resolve)=>{
    resolve("ok");
})
test
    .then((item)=>{
        console.log(2);
    })
    .then((item)=>{
        console.log(3);
    })