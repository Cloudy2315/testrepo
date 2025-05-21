function timeConversion(s){
let period = s.slice(-2) //AM atau PM
let time = s.slice(0, -2) // waktunya
let [hours, minutes, seconds] = time.split(':').map(Number);

if(period === "AM"){
    if(hours === 12){
        hours = 0
    }
 } else{
    if (hours!== 12){
        hours += 12
    }
 }
  // Format dua digit dan gabungkan kembali
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
console.log(timeConversion("07:02:42PM"))