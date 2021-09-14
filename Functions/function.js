/* 

Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer,n . It must return the value of  (i.e., n factorial).

Input Format

Locked stub code in the editor reads a single integer, n, from stdin and passes it to a function named factorial.


*/

function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}

const result = factorial(6)
console.log(result)




