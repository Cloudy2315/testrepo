function minMaxSum(arr) {
let max = arr[0]
let min = arr[0]
let sum = 0

for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }else if (min > arr[i]){
        min = arr[i]
    }
    sum += arr[i]
}
let maxSum = sum - min
let minSum = sum - max

console.log(minSum +" "+ maxSum)
}

let soal = [1,3,5,7,9]
minMaxSum(soal)
//soal RETURN MIN MAX
//Hasil akhir 
//min = 1+3+5+7 = 16
//max = 3+5+7+9 = 24
