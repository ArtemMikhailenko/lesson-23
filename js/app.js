//Завдання 1

let arr = ['Mike', 'Nikola', 'Tom']
console.log(arr[2])
arr[1]='Alex'
console.log(arr)
arr.splice(1,2)
console.log(arr)
console.log(arr.length)


//Завдання 2

let a = [5, 3, -4, 25, 32, -16, 6]
let b = [21, -30, 9, 5, 12, -19, 5, 25]
 let num1=0;
 let num2=0;
function comparison(a,b){
    for( let i = 0 ; i < b.length ; ++i){
    if (a[i]<b[i]){
        num1++;
    } else if(a[i]>b[i]) {
        num2++;
    } else if (a[i]===b[i]) {
        num1++;
        num2++;
    }
}
console.log(num1)
console.log(num2)
if (num1>num2){
    console.log('b>a')
} else if (num1<num2){
    console.log('a>b')
} else {
    console.log('a==b')
}
}
comparison(a,b);


//Завдання 3

let phrase = 'I am learning JavaScript right now';
phrase = phrase.split(' ');
console.log(phrase)


//Завдання 4

let a = [5, 3, 8, 5, 3, 2, 1, 2];
let b = [];
a.forEach((item) => {
    if (b.indexOf(item) === -1) {
        b.push(item);
    }
});
console.log(b);

//Завдання 5

let users = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 21 },
  { id: 5, age: 17 },
  { id: 6, age: 20 },
  { id: 7, age: 25 },
];

function selectionAge(users){
 users.forEach(user => {
    if (user.age > 18 && user.age < 21)
 console.log(user.id)
})
}
selectionAge(users)
