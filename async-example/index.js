console.log('Before');
getUser(1,(user) => {
    getRepositories(user.githubUsername, (repository) => {
        console.log('repository', repository);
        getCommits(repository,(commits)=>{

        });
    });
});
console.log('After');

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

function getUser(id, callback) {
    setTimeout(() => {
        console.log('database...');
        callback({
            id: id,
            githubUsername: 'jiawei'
        });

    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)
}

function getCommits(repository, callback) {
    setTimeout(() => {
        callback("commit");
    }, 2000)
}