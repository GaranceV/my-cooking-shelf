import { db } from '../database';

// our example model is just an Array
// const recipes = [];

export function goDoStuff(obj) {
    console.log(obj);
    db.collection('quotes').save(obj, (err, result) => {
       if (err) return console.log(err)
       console.log('you saved it!');
       return result;
   });
}

export function testingFunction() {
    return 4;
}