

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display .

 */

/*programming hero*/

let sum=0;
let i=81;
while(i<=131){
    if (i%2===1) {
        sum=sum+i;
    }
    i++;
}
console.log("sum of all the odd numbers from 81 to 131",sum);

let total=0;
let n=206;
while(n<=311){
    if (n%2===0) {
        total=total+n;
    }
    n++;
}
console.log("sum of all even numbers from 206 to 311",total)
