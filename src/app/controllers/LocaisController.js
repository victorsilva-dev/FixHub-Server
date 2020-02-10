import locais from "../../libraries/bairros";

// PLANOSCONTROLLER EM PERFEITO FUNCIONAMENTO
class LocaisController {
	async index(req, res) {

		res.json(locais)
	}
}

export default new LocaisController();
