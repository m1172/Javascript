console.log(2401**(1/4));

var a ="* * * * * * ==================================\n * * * * *  ==================================";
var b = "==============================================";

for (let i = 0; i < 4; i++){
    console.log(a);
}
console.log("* * * * * * ==================================");
for (let i = 0; i < 6; i++){
    console.log(b);
}

var a= "5";
var b=`${a}+${a}${a}+${a}${a}${a}`
console.log(eval(b));


for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

var c = parseInt(Math.random()*100)
console.log(c);
console.log(c<100);

console.log(c>100);