import Planos from "../models/Planos";

// PLANOSCONTROLLER EM PERFEITO FUNCIONAMENTO
class PlanosController {
	async index(req, res) {

		const { id_profissional } = req.params
		const plano = await Planos.findAll({
			where: { id_profissional }
		});
		return res.send(plano);
	}
}

export default new PlanosController();
