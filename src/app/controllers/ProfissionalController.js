import ProfissionalModel from "../models/ProfissionalModel";

class ProfissionalController {
	async store(req, res) {
		const {
			nome,
			email,
			cpf_cnpj,
			foto
		} = req.body;

		const profissional = await ProfissionalModel.create({
			nome,
			email,
			cpf_cnpj,
			foto
		});

		res.status(200).json(profissional)
	}
}

export default new ProfissionalController();
