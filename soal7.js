let x = 0
let y = 0
let z = 0
let array = [1,1,0,-1,-1]
for(let i = 0; i < array.length; i++){
    if(array[i]>0){
        x += 1 
    }else if(array[i] < 0 ){
        y += 1
    }else if(array[i] === 0){
        z += 1
    }

}
let x1 = x/array.length
let y1 = y/array.length
let z1 = z/array.length

console.log(x1)
console.log(y1)
console.log(z1)
