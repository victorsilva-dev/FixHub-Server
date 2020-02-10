import locais from "../../libraries/bairros";

// PLANOSCONTROLLER EM PERFEITO FUNCIONAMENTO
class LocaisController {
	async index(req, res) {

		res.send(locais)
	}
}

export default new LocaisController();
