var a=4,b,c="5",sum,d=false;
sum=a%b;
//typeof funksiyasi bize deyisenin datatype-ni qaytarir
// length funksiyasi bize arraydeki ifadelerin sayini qaytarir
// +,-,*,/,%(Qaliqi Qaytarir)
//== (Beraberlik sertini yoxlayir)
//===(hem deyisenlerin ozlerini hemde datatype-lerini yoxlayir)
//!-inkar
// a+=b  (a=a+b)
//a-=b  (a=a-b)
//a++ a-ni 1 vahid artiracaq
//a-- a-ni 1 vahid azaldacaq
//&& (and) olduqda her iki deyisen true ve ya false olmalidir
//|| (or) olduqda bir deyisen bele true olarsa netice olaraq true qaytaracaq 
b=a--;

// function Get_Class(){
//     document.getElementById("text").innerHTML='Biz "JavaScripte" basladiq';
// }
var car=["Mercedes","Bmw","Audi","Mazda","Kia","Nissan"];
var obj={firstname:"Aygun",lastname:"Bayramova",age:"20"};

document.getElementById("text1").innerHTML="<br>"+obj.firstname+" "+ obj.lastname+" "+obj.age;
document.getElementById("text").innerHTML=car.length;








