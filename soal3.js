function timeConversion(s) {
    let period = s.slice(-2); // AM atau PM
    let time = s.slice(0, -2); // bagian waktu tanpa AM/PM
    let [hours, minutes, seconds] = time.split(':').map(Number);

    if (period === 'AM') {
        if (hours === 12) {
            hours = 0; // 12AM menjadi 00
        }
    } else { // PM
        if (hours !== 12) {
            hours += 12; // selain 12PM, tambahkan 12 jam
        }
    }

    // Format dua digit dan gabungkan kembali
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

console.log(timeConversion("07:05:45PM")); // Output: "19:05:45"
console.log(timeConversion("12:00:00AM")); // Output: "00:00:00"
console.log(timeConversion("12:00:00PM")); // Output: "12:00:00"

let rasa = "soto ayam"
console.log(`indomie ${rasa} gurih2 enyoy`)