function oddOrEven(array) {
    let sum = 0;
     array.forEach( num => sum += num);
    
    if (sum % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }