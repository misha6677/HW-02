function isPrime(num){
    if(num>1000){
        return"Данные неверны";
    }

    if (num === 0 || num ===1){
        return"Число не является простым";
    }

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return" Число является простым";
        }
    }
}
console.log(isPrime(4))