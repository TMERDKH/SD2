var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// connection notifcations
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

// TEST STUFF
var userSchema = mongoose.Schema({
    name: String
});

// test method
userSchema.methods.test = function() {
    var testMessage = this.name
        ? "User name is " + this.name
        : "I don't have a name";
    console.log(test);
};

// model tests
var User = mongoose.model('User', userSchema);

var testUser = new User({ name: 'Mathew' });
console.log(testUser.name);

testUser.save(function (err, testUser) {
    if (err) return console.error(err);
    testUser.test();
});

// END TEST STUFF