1-masala

var a = 5
var b = a%2

console.log(b ==0 && `${a} Juft son ` || `${a} Toq son`);

var a = 5
var b =a%2
console.log( b==1 && a+" Toq son");
console.log( b==0 && a+ " Juft son");

2-masala

var a = 12
var a = a.toString()
console.log(a.length);

3-masala

var a=8
var b=6

console.log(a<b && b-a);
console.log(a>b && a-b);

havo = 20

if(havo>= 20 && havo < 50){
    console.log('bugun havo issiq');
}else if (havo<20 && havo > 0 ){
    console.log('bugun havo iliq');
}else if(havo < 0){
    console.log('bugun havo sovuq');
}else{
    console.log('nomalum ob havo');
}
 
 var havo1 = 'bulutli'

switch (havo1){
    case 'iliq': console.log('soyabon shartmas');break;
    case 'sovuq': console.log('isiqroq kiyinib oling'); break;
    case 'issiq': console.log('yengil kiyinib oling'); break;
    default: console.log('bunday malumot yoq');
}

var number = [0,1, 2, 3, 4, 5, 6, 7, 8 ];

number.reduce((count, value) => {
    console.log(count, value);
}, 0);
