var models = [
    {
        name:'Bmw M3',
        image:'img/bmw_m3.jpg',
        link:'https://tr.wikipedia.org/wiki/BMW_M3'
    },
    {
        name:'Fiat Egea',
        image:'img/fiat_egea.jpg',
        link:'https://tr.wikipedia.org/wiki/Fiat_Egea'
    },
    {
        name:'Ford Fiesta ST',
        image:'img/ford_fiesta_St.jpg',
        link:'https://en.wikipedia.org/wiki/Ford_Fiesta#Fiesta_ST/XR4'
    },
    {
        name:'Opel Insignia',
        image:'img/opel_insignia.jpg',
        link:'https://tr.wikipedia.org/wiki/Opel_Insignia'
    },
    {
        name:'Renault Clio',
        image:'img/renault_clio.jpg',
        link:'https://tr.wikipedia.org/wiki/Renault_Clio'
    },
    {
        name:'Toyota Rav4',
        image:'img/toyota_rav4.jpg',
        link:'https://tr.wikipedia.org/wiki/Toyota_RAV4'
    },
]

var car_img = document.getElementById("img");
var car_link = document.getElementById("img_href");
var car_link2 = document.getElementById("img_href2");
var car_txt = document.getElementById("img_txt");

var footer = document.getElementById("footer");
var next_btn = document.getElementById("next");
var back_btn = document.getElementById("back");

var hover = false;
var nmb = 0;

setInterval(slide,2000);

footer.addEventListener("mouseenter", function(){hover = true;})
footer.addEventListener("mouseleave",function(){hover = false;})

function slide(){
    if(hover==false){
    car_img.src = models[nmb].image;
    car_link.href = models[nmb].link;
    car_link2.href = models[nmb].link;
    car_txt.innerHTML = models[nmb].name;
    
    if(nmb<5){
        nmb++;
    }
    else{
        nmb=0;
    }
}
}

next_btn.addEventListener("click",function next(e){
    if(nmb<5){
        nmb++;
    }
    else{
        nmb=0;
    }
    car_img.src = models[nmb].image;
    car_link.href = models[nmb].link;
    car_link2.href = models[nmb].link;
    car_txt.innerHTML = models[nmb].name;
    e.preventDefault();
})

back_btn.addEventListener("click",function back(e){
    if(nmb>0){
        nmb--;
    }
    else{
        nmb=5;
    }

    car_img.src = models[nmb].image;
    car_link.href = models[nmb].link;
    car_link2.href = models[nmb].link;
    car_txt.innerHTML = models[nmb].name;
    e.preventDefault();
})