const bcrypt = require('bcryptjs');

//Hash the password
function hashPassword(password) {
    return bcrypt.hashSync(password, 14);
}

//compare the plaintext with the hashed password
function verifyPassword(plainText, hash) {
    return bcrypt.compareSync(plainText, hash);
}

module.exports = {
    hashPassword, 
    verifyPassword
};