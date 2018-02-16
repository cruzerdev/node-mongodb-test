const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='5a7944ab5f734437f4078695';
// if(!ObjectID.isValid(id))
// {
//   console.log('Id is Not Valid.');
// }

//Below if we don't put any parameter inside the find() function it will return result conating all the id's.
// Todo.find({
//   _id: id
// }).then((todos)=>
// {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>
// {
//   console.log('Todo',todo);
// });
//---------------------------------
//Done By Me
Todo.find().then((todos)=>
{
  console.log('Todos',todos);
});
//---------------------------------

// Todo.findById(id).then((todo)=>
// {
//   if(!todo)
//   {
//     return console.log('Id not found.');
//   }
//   console.log('Todo By ID',todo);
// }).catch((e)=>console.log(e));
