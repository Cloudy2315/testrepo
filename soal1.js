function plusminus(testarray) {
    let counterX = 0; //positive
    let counterY = 0; //negative
    let counterZ = 0; //zero
  
    for (let i = 0; i < testarray.length; i++) {
  
      if (testarray[i] > 0) {
          counterX += 1 // x = x + 1
      } else if (testarray[i] < 0) {
          counterY += 1
      } else if ((testarray[i] === 0)) {
          counterZ += 1
      }
    }
  
    let x = counterX/testarray.length
    let y = counterY/testarray.length
    let z = counterZ/testarray.length
    
    console.log(x.toFixed(6))
  console.log(y.toFixed(6))
    console.log(z.toFixed(6))
  }
  
  let array = [1, 0, 5, -1, -1];
  
  plusminus(array);
  