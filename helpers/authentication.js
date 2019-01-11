module.exports = function authenticate(userid, password) {
    if (userid == "admin" && password == "admin123") {

        return true;
    }

    return false;
}