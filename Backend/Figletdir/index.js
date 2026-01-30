const figlet = require('figlet');

//figlet is used to print in terminal 

figlet("Meraj ", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});