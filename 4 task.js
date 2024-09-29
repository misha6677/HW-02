function printNumbers(from, to){
    let current = from;

    const intervalid = setInterval(()=> {
        console.log(current);
        if (current === to){
            clearInterval(intervalid)
        }
        current++;
    }, 1000)
}
printNumbers(5,15);