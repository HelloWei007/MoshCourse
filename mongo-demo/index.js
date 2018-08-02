const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(()=>console.log('connected to MongoDB..'))
    .catch(err => console.err('error connectiong'));


const coursesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: String,
    tag: [ String ],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course',coursesSchema);

/* crate a new row in moongoDb you need to connect in the db,
create a schema, pass the Schema to mongoose model, creat
the class,and save the class with a asy function*/
async function createCourse(){
    const course = new Course({
        name: 'angular',
        author: 'Alice',
        tag: ['angular', 'front'],
        isPublished: true
    });
    try{
       const result = await course.save();
       console.log(result);
        
    }catch(err){
        console.log(err.message);
    }
    
}

async function getCourses(){
    //mongo query 
    /*eq,ne.gt,gte,lt,lte,in, nin */
    const courses = await Course
        .find({ name: 'Bob',isPublished: true})
        //.fid ({price: {$gt: 10}) price > 10
        .limit(10)
        .sort({name : 1})
        .select({name: 1, tags: 1 });

    console.log(courses);
}

async function updateCourse(id){
   /* const course = await Course.findById(id);
    if(!course)return ;
    course.isPublished = true;
    course.author= 'new...';
    const result = await course.save();
    console.log(result);*/
/************** */
    //also you can update with update metho you have to reead the documentation
  /* const result = await Course.update({_id:id},{
       $set:{
           author: 'hello',
           isPublished: false
       }
   });
   console.log(result);*/
   /******************* */
   
   const result = await Course.findByIdAndUpdate(id, {
       $set: {
           author: 'jason',
           isPublished: false
       }
   },{new: true});
   console.log(result);
}

async function removeCourse(id) {
   const result = await Course.deleteOne({_id: id});
   //const course = await Course.findByIdAndRemove(id);
   console.log(result);
}



createCourse();
