

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/



let sum=0;
for(let i=91;i<=129;i++){
    if(i%2===1){
        sum=sum+i;
    }
}

console.log("sum of all the odd numbers from 91 to 129",sum);


let total=0;
for(let i=51;i<=81;i++){
    if(i%2===0){
        sum=sum+i;
    }
}

console.log("sum of all the even numbers from 51 to 85",sum);


