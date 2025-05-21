function compareTriplets(a, b) {

let x = 3
let hasilbudi = 0
let hasilani = 0
let budi = 0
let ani = 0

for(let i = 0 ; i < x; i++){
    let budi = a[i]
    let ani = b[i]
if(budi > ani){
    hasilbudi += 1
}else if(budi < ani){
    hasilani += 1
}
}
console.log(hasilbudi, hasilani)
}
let a = [1,2,3]
let b = [3,2,1]
hasil = compareTriplets(a,b)

