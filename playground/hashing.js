const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
//JWT Implementation
var data ={
  id:10
};
var token = jwt.sign(data,'123abc');
console.log(token);
var decoded=jwt.verify(token,'123abc');
console.log('decoded',decoded);
//Example 1-----------------------------
// var message ='I m devanshu';
// var hash =SHA256(message).toString();
// var hash1 =SHA256(message).toString();
// //var hash2 = SHA256(hash1).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
// console.log(`Hash1:${hash1}`);
//console.log(`Test: ${hash2}`);
//Example2---------------------------------
// var data={
//   id:4
// };
// var token={
//   data,
//   hash: SHA256(JSON.stringify(data)+'some').toString()
// };
// console.log(`Hash Before:${token.hash}`);
// console.log('----------------------------------');
// token.data.id=5;
// token.hash=SHA256(JSON.stringify(token.data)).toString();
// console.log(`Hash After changing Data: ${token.hash}`);
// var resultHash = SHA256(JSON.stringify(token.data)+'some').toString();
// console.log(`Hash After: ${resultHash}`);
// if(resultHash === token.hash)
// {
//   console.log('Data was not changed');
// }
// else {
//   console.log('Data was changed.Do Not Trust.');
// }
