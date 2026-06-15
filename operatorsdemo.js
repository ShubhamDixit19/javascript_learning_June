let x=10,y=20;

//arithmatic operators +,-,/,*,**,%, ++, --

console.log(x+y); //30
console.log(y-x); //10
console.log(y*x); //200
console.log(y/x); //2
console.log(y%x); //0
console.log(5**2); //25

// x=x+1;
// x++;  //post increment
++x;  //pre increment
console.log(x); //11

y=20;
//y=y-1;
//y--  //post decrement
--y  //pre decrement
console.log(y);  //19


//asignment operators;

x=100;
y=50;
console.log(x); //100

x+=y;  // x=x+y;
console.log(x); //150
console.log(x+=y); //x=x+y
console.log(x-=y); //x=x-y
console.log(x*=y); //x=x*y
console.log(x/=y); //x=x/y
console.log(x%=y); //x=x%y

//relational or comparision operators
//always returs a boolean values true/false
//< > <= >= !=
x=10;
y=20;

console.log(x>y); //false
console.log(x<y); //true
console.log(x<=y); //true
console.log(x>=y); //false
console.log(x!=y); //true
console.log(x==y); //false

//termnary operators;

console.log(x<y?x:y);  //return x value 10: if x<y is true it will return x and if x>y is false it will return y
console.log(y>x?y:x);  //return y value 20 

//logical operators - && (and) ,|| (or),! (not) 

let a=true;
let b=false;

console.log(a && b); //return true if both values are true
console.log(a && b); //return false if both values are false
console.log(a || b); //return true if one of them is true
console.log(!a);     //a is true , nota should be false




