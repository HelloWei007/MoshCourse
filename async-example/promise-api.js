
//const p = Promise.resolve({id:1});
//const p = Promise.reject(new Error("error"));

//p.then(result => console.log(result))
//.catch(error => console.log(error));


const p1  = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async operation1-.---');
        resolve(1);
      //  reject(new Error("error"));
    },1000);
})

const p2  = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async operation2-.---');
        resolve(2);
    },2000);
})

//return the array of all promise resolved
Promise.all([p1,p2])
    .then (result => console.log(result))
    .catch(err => console.log('error',err));

//return only one value with a first resolved promise
/*Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('error', err));*/