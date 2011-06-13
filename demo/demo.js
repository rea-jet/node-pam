var pamlib = require('../build/default/pam.node');
var pam = new pamlib.PAM();

// This should output false because (clearly) your username is not myusername
// and your password is mypassword. Change it and it should work!

// PAM service name. On Fedora 15, standard system auth service name is system-auth.
// Change accordingly or write your own.
var service = "system-auth";
var username = "myusername";
var password = "mypassword";
console.log("Username: " + username + ", password: " + password + ", output: " + pam.authenticate(service, username, password));

