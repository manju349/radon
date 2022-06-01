// For todays date;
let date = new Date().toLocaleDateString();
console.log(date);

module.exports.date=date



const nameOfMonth = new Date().toLocaleString(
    'default', {month: 'long'}
  );

module.exports.nameOfMonth=nameOfMonth


const getBatchInfo=function(){
    console.log('Radon, W3D3, the topic for today is Nodejs module system')
}
module.exports.getBatchInfo=getBatchInfo
