console.log('Before');
const user = getUser(1);;
console.log(user);
console.log('After');


function getUser(id){
    setTimeout(() => {
        console.log('database...');
    return{id:id, githubUsername:'jiawei'};
    }, 2000)
    return 1;
}   