import jwt from "jsonwebtoken";
import { promisify } from "util";

import jwtSecret from "../../config/jwt";

export default async (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) {
		res.status(401).json({ erro: "Token não fornecido" });
	}

	try {
		const decoder = await promisify(jwt.verify)(token, jwtSecret);

		req.id = decoder.id
		req.nome = decoder.nome
		req.cpf_cnpj = decoder.cpf_cnpj
		req.email = decoder.email

		return next();
	} catch (jwtError) {
		return res
			.status(401)
			.json({ erro: "Token inválido", jwtError });
	}
};
