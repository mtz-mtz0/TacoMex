import mongoose from 'mongoose';


async function connect(){
try{

   await mongoose.connect('mongodb://localhost/tacomexDB', {
       // useNewUrlParser: true 
});
console.log('>>>database connected')
}catch{
console.log('Error');
 
}



}

export default connect;



