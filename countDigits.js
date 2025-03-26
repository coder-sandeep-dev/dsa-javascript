function countDigits(num) {
  if(num===0){
    console.log(1);
    return;
  }
  let count = 0;
  num = Math.abs(num);
  while(num>0) {
    num = Math.floor(num / 10);
    count++;
  }
  console.log(count);
  return count;
}

countDigits(12345)