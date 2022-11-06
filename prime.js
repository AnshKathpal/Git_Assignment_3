function primeNum(n){  
  let count = 0;
  if(n<=1){
    console.log("Number is not prime");
  }else{
     for(i=1;i<=n;i++){
      if(n%i==0){
        count++;
      }
    } 
  
    if(count==2){
      console.log("Number is prime");
    }else {
      console.log("Number is not prime");
    }
  }
}
primeNum(9);