let a = [1,2,3]
let b = [4,5,6]
let c = [9,8,9]
let x = [a,b,c]
let sukuA = 0
let sukuB = 0
for (let i = 0; i < x.length; i++){
    
    sukuA += x[i][i]
    sukuB += x[i][x.length-i-1]
    hasil = Math.abs(sukuA - sukuB)
}
console.log(hasil)

//belajar github