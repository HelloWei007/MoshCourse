console.log('Before');
//getUser(1, displayUser);
console.log('After');


function displayCommits(commits){
    console.log(commits);
}
function displayRespositories(repository){
         console.log('repository', repository);
         getCommits(repository, displayCommits);
}
function displayUser(user){
    getRepositories(user.githubUsername);
}

// if you want to get the return value from
//asynchrono methor you must use 
// callbacks, Promises , Async/await


//It is very important diferent between the Asy and Syn
//If you want t write the previois code in Syn:

/*console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.githubUsername);
const commits = getCommits(repos[0]);
console.log('After');*/

/*const p = getUser(1);
p.then( user =>console.log(user));*/

/*getUser(1)
    .then(user => getRepositories(user.githubUsername)) //first promise 
    .then(repository =>getCommits(repository[0]))
    .then(commits => console.log('Commits',commits))   //secondPromise
    .catch(err => console.log("error"));
*/

    //Async and Await write a async code like sync code


async function awaiyExample(){ /*use async to asynchro*/
    /*try is like cath in promise */
    try{
        const user = await getUser(1); //like then in promise
        const repos = await getRepositories(user.githubUsername);
        const commit = await getCommits(repos[0]);
        console.log(commit);
    }catch(err){
        console.err('error',err.message);
    }    
    
}
awaiyExample();





function getUser(id) {

    return new Promise((resolve,reject)=>{
          setTimeout(() => {
              console.log('getUser...');
              resolve({
                  id: id,
                  githubUsername: 'jiawei'
              });
          }, 2000);
    });
}

function getRepositories(username) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('getRepositories...');

            resolve(['repo1', 'repo2', 'repo3']);
         // reject("errrrr");
        }, 2000);
    });
    
}

function getCommits(repository) {

    return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve("commit");
         }, 2000);
    });
   
}