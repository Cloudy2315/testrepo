function staircase(n){
let page = "#"
let space = " "
let x = 4
let page1 = 0
let page2 = 0
let hasil = 0
for(let i = 0; i < x; i++){
    page2 = space.repeat(x-i)
    page1 = page.repeat(i+1)
    hasil = page2 + page1
console.log(hasil)
}
}
staircase(hasil)
