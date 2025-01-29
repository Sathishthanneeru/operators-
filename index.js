let a = 10 + "5";
console.log(a);

// o/p: 105

let x = 10;
x += 5;
console.log(x);

//op:15

let x1 = 10;
x1 *= 2;
console.log(x1);

//op;20

let b = 10 / 2;
console.log(b);

//op:5

let c = 10 % 3;
console.log(c);

//op:3

let x3 = 10;
x3 = x3 ** 2;
console.log(x3);

// op:100

let d = 10 > 5 && 5 > 10;
console.log(d);

//op:false

let e = 10 === "10";
console.log(e);


//op:false

let f=null??'default'
console.log(f)

//op:default

let g=10||'default'
console.log(g)

//op:10

let h=10&5;
console.log(h)


//op:0
let i=10|5;
console.log(i)


// op:15

let j=10^5;
console.log(j)

//op:15

let x4=10;
let y=++x4;
console.log(x4)
console.log(y)

// op:11,11

let x5=10;
let y1=x5++;
console.log(x5)
console.log(y1)

// op:11,16


let x6=10;
console.log(++x6)
// op:11

let x7=10;
console.log(x7++);
//op:10

let x8=10;
y2=--x8;
console.log(x8)
console.log(y2)

// op:9,9


const obj={a:{b:'c'}};
console.log(obj?.a?.b);

//op: c

const obj1={a:{b:'c'}};
console.log(obj1?.a?.c);

//op:undefined


const obj3={a:{b:'c'}};
console.log(obj3?.b?.c);


// op:undefined


