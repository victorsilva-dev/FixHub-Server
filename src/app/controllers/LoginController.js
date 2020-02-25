import Profissionais from "../models/Profissionais";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtSecret from "../../config/jwt";

class LoginController {
	async login(req, res) {
		const { email, senha } = req.body;

		if (!email | !senha) {
			return res.status(400).json({
				erro: "Por favor informe um email e uma senha para realizar o login"
			});
		}
		const user = await Profissionais.findOne({
			where: { email }
		});
		if (!user) {
			return res.status(404).json({ erro: "Email não encontrado" });
		}

		try {
			if (await bcrypt.compare(senha, user.senha)) {
				const { id, nome, cpf_cnpj, email } = user;
				const sessão = {
					id,
					nome,
					cpf_cnpj,
					email
				};

				const token = jwt.sign(sessão, jwtSecret, { expiresIn: 86400 });
				console.log(token);
				return res.status(200).json(token);
			} else {
				return res.status(404).json({ erro: "Senha Incorreta" });
			}
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ erro });
		}
	}
}

export default new LoginController();
