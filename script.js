document.querySelector("#r1l").addEventListener("mousemove",function(){
    gsap.to("#r1ltext h2",{
        top: "0px",
        duration: .5,
    })
    gsap.to("#r1l img",{
        top: "-15%",
        duration: .5
    })
    gsap.to("#r1l h1",{
        opacity: 1,
        duration: .5
    })
})
document.querySelector("#r1l").addEventListener("mouseleave",function(){
    gsap.to("#r1ltext h2",{
        top: "-100px",
        duration: .5,
    })
    gsap.to("#r1l img",{
        top: "-11%",
        duration: .5
    })
    gsap.to("#r1l h1",{
        opacity: 0,
        duration: .5
    })
})
document.querySelector("#r1r").addEventListener("mousemove",function(){
    gsap.to("#r1rtext h2",{
        top: "0px",
        duration: .5,
    })
    gsap.to("#r1r img",{
        top: "-100%",
        duration: .5
    })
    gsap.to("#r1r h1",{
        opacity: 1,
        duration: .5
    })
})
document.querySelector("#r1r").addEventListener("mouseleave",function(){
    gsap.to("#r1rtext h2",{
        top: "-100px",
        duration: .5,
    })
    gsap.to("#r1r img",{
        top: "-94%",
        duration: .5
    })
    gsap.to("#r1r h1",{
        opacity: 0,
        duration: .5
    })
})
document.querySelector("#r2l").addEventListener("mousemove",function(){
    gsap.to("#r2ltext h2",{
        top: "0px",
        duration: .5,
    })
    gsap.to("#r2l img",{
        top: "-34%",
        duration: .5
    })
    gsap.to("#r2l h1",{
        opacity: 1,
        duration: .5
    })
})
document.querySelector("#r2l").addEventListener("mouseleave",function(){
    gsap.to("#r2ltext h2",{
        top: "-100px",
        duration: .5,
    })
    gsap.to("#r2l img",{
        top: "-28%",
        duration: .5
    })
    gsap.to("#r2l h1",{
        opacity: 0,
        duration: .5
    })
})
document.querySelector("#r2r").addEventListener("mousemove",function(){
    gsap.to("#r2rtext h2",{
        top: "0px",
        duration: .5,
    })
    gsap.to("#r2r img",{
        top: "-113%",
        duration: .5
    })
    gsap.to("#r2r h1",{
        opacity: 1,
        duration: .5
    })
})
document.querySelector("#r2r").addEventListener("mouseleave",function(){
    gsap.to("#r2rtext h2",{
        top: "-100px",
        duration: .5,
    })
    gsap.to("#r2r img",{
        top: "-108%",
        duration: .5
    })
    gsap.to("#r2r h1",{
        opacity: 0,
        duration: .5
    })
})
document.querySelector("#lnav2 i").addEventListener("click",function(){
    gsap.timeline()    
    .to("#lnav3",{
        width: "0px",
        duration: .5
    })
    .to("#lnavtext>h1",{
    right: "0px",
    duration: .7
    })
    .to("#slider",{
        left: "0%",
        duration: .7
    })
    .to("#slider>img",{
        opacity: 1,
        rotate: "-50seg",
        duration: .2
    })
})
document.querySelector("#slider2 h1:nth-child(2)").addEventListener("click",function(){
    gsap.timeline()
    .to("#slider>img",{
        opacity: 0,
        duration: .2
    })    
    .to("#slider",{
        left: "-60%",
        duration: 1.5
    })
    .to("#lnavtext>h1",{
        right: "210px",
        duration: .7
        })
    .to("#lnav3",{
        width: "200px",
        duration: .5
    })
})


document.querySelector("#slider").addEventListener("mousemove",function(dets){
    document.querySelector("#slidermousemove").style.left = `${dets.x-80}px`;
    document.querySelector("#slidermousemove").style.top = `${dets.y-60}px`;
})

document.querySelectorAll("#slider2>h1").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        document.querySelector("#slidermousemove").style.scale = 0
    })
})

document.querySelectorAll("#slider2>h1").forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        document.querySelector("#slidermousemove").style.scale = 1
    })
})


document.querySelectorAll("#slider3>i").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        document.querySelector("#slidermousemove").style.scale = 0
    })
})

document.querySelectorAll("#slider3>i").forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        document.querySelector("#slidermousemove").style.scale = 1
    })
})