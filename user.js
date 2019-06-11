const User = require("./User");

const user = new User("gabe", "jonson", 30);
console.log(user.age, " <<< this is a user age");
user.age = 20;
console.log(user.age, " <<< this is a user age after set age");
