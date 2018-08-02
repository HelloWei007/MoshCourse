
//creating promise
const p = new Promise(
    (resolve,reject)=>{
        setTimeout(() => {
            //resolve(1); // pending => resolved, fulfilled
            reject(new Error('MESSAGE')); // pending => rejected
        }, 2000);
        
    
    }
);

//consuming  use then for resolve, and use catch for reject

p
    .then(result => console.log('result',result))
    .catch(err => console.log('error',err.message)); 
