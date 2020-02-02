import Tags from "../models/Tags";

// TAGSCONTROLLER EM PERFEITO FUNCIONAMENTO
class TagsController {
	async index(req, res) {
		const categ = await Tags.findAll();
		const listaDeCategorias = [];
		const lista = categ.map((obj, index) => {
			const categoria = obj.categoria;
			if (listaDeCategorias.indexOf(categoria) === -1) {
				listaDeCategorias.push(categoria);
			}
		});
		const categoriasETags = listaDeCategorias.map((categoria, index) => {
			return {
				categoria: categoria,
				tags: categ
					.map((obj, index) => {
						if (obj.categoria === categoria) {
							return obj.tag;
						}
					})
					.filter(tag => tag != null)
			};
		});
		return res.send(categoriasETags);
	}
}

export default new TagsController();
