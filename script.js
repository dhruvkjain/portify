let btn = document.getElementsByClassName("circle")[0];
btn.addEventListener("click",()=>{
    btn.classList.toggle("rotate");
    let c1 = document.getElementsByClassName("circle1")[0];
    let c2 = document.getElementsByClassName("circle2")[0];
    let c3 = document.getElementsByClassName("circle3")[0];
    let c4 = document.getElementsByClassName("circle4")[0];
    let c5 = document.getElementsByClassName("circle5")[0];
    let c6 = document.getElementsByClassName("circle6")[0];
    let c7 = document.getElementsByClassName("circle7")[0];
    let c8 = document.getElementsByClassName("circle8")[0];
    c1.classList.toggle("comeout");
    c2.classList.toggle("comeout2");
    c3.classList.toggle("comeout3");
    c4.classList.toggle("comeout4");
    c5.classList.toggle("comeout5");
    c6.classList.toggle("comeout6");
    c7.classList.toggle("comeout7");
    c8.classList.toggle("comeout8");
    console.log("check check")
})
