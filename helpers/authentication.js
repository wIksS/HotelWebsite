module.exports = function authenticate(userid, password) {
    if (userid == "admin" && password == "3sKTAausCZqVjdfm") {

        return true;
    }

    return false;
}