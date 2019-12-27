function getMin(...nums) {
    let min = nums[0];
    for (let num of nums) {
      if (min > num) {
          min = num;
      } 
    }
    return min;
}

getMin(3, 0, -3);