const crypto = require("crypto");

let jwtSecret = null;

if (jwtSecret === null) {
	jwtSecret = crypto.randomBytes(64).toString("hex");
}

module.exports =
	"96c1fc743223bcc17fc5409d8812f52944e4ca2d03455597d0ee8bcf756b072e35e34808eda05c6792a2daca7a1568bd3fd22f533504b85d367bb3709cca6044";
