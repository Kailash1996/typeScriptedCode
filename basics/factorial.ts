function factorial(n:number): number{
    if(n<0){
        throw new Error("please no -ve numbers");
        
    }
    let result = 1
    for(let i=1; i<=n;i++){
        result = result*i;
    }

    return result
}

console.log(factorial(4));
