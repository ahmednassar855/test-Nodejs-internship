import mongoose from 'mongoose'

export const dbConnection = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://127.0.0.1:27017/test-NodeJs').then( ()=> {
        console.log('data base connected successfully');
    } ).catch( (err) => {
        console.log('data base connection error!!!!');
    });
}