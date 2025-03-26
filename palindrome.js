function palindromeNumber(num){
 let rev=0; originalNum=num;
 while(num>0){
    let ld = num%10;
    rev = rev*10+ld;
    num = Math.floor(num/10);
 }
 if(rev === originalNum) {
    console.log("it's a palindrome 🎊")
    return true;
 }else{
    console.log("it's not a palindrome!")
    return false;
 }

}
palindromeNumber(212);