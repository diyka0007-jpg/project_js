let a = 1
let b = 1
let c = 1


if (a == b || a == c || b == c){
    console.log("teng");
}else if(a > b && a > c){
    console.log("a");
}else if(b > c){
    console.log("b");
}else{
    console.log("c");
}