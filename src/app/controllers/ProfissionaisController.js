import Profissionais from "../models/Profissionais";
import { Op } from "sequelize";

class ProfissionaisController {
	async indexAll(req, res) {
		if (req.params.bairros === "_") {
			var bairros = [];
		} else {
			var bairros = req.params.bairros.split(",");
		}

		if (bairros.length > 0) {
			var prestadores = await Profissionais.findAll({
				where: {
					bairro: {
						[Op.or]: bairros
					}
				}
			});
		} else {
			var prestadores = await Profissionais.findAll();
		}

		const prestadoresFiltrados = prestadores
			.map(profissional => {
				const {
					id,
					nome,
					foto,
					tags,
					text_anuncio,
					anuncio_pago
				} = profissional;
				console.log(tags);

				const prestador = {
					id,
					nome,
					foto,
					tags,
					anuncio: {
						texto: text_anuncio,
						anuncioPago: anuncio_pago
					}
				};

				const filtros = req.params.tags.split(",");

				if (req.params.tags !== "_") {
					let tagsMatched = 0;
					if (prestador) {
						prestador.tags.map(tag => {
							if (filtros.indexOf(tag) !== -1) {
								tagsMatched += 1;
								//console.log(`A tag ${tag} foi encontrada no profissional ${prestador.nome}`)
							}
						});
					} else {
						return null;
					}

					if (tagsMatched === filtros.length) {
						//console.log(`Todas as tags pesquisadas bateram com as tags do profissional ${prestador.nome}`)
						return prestador;
					} else {
						//console.log(`${tagsMatched} tags foram encontradas no profissional ${prestador.nome}`)
						return null;
					}
				} else {
					//console.log("Essa pesquisa retornou todos os profissionais, por não haver tags")
					return prestador;
				}
			})
			.filter(prestadorValido => prestadorValido !== null);

		let profissionais = [];

		const organizarProfissionais = () => {
			let profissionaisPagos = [];
			let profissionaisGratuitos = [];

			prestadoresFiltrados.map(profissional => {
				if (profissional.anuncio_pago === true) {
					profissionaisPagos.push(profissional);
				} else {
					profissionaisGratuitos.push(profissional);
				}
			});
			profissionaisPagos.map(profissionalPago => {
				profissionais.push(profissionalPago);
			});
			profissionaisGratuitos.map(profissionalGratuito => {
				profissionais.push(profissionalGratuito);
			});

			return;
		};

		organizarProfissionais();

		const profissionaisPorPagina = 10;

		let paginas = (prestadoresFiltrados.length + 1) / profissionaisPorPagina;

		if (paginas < 1) {
			paginas = 1;
		}

		let tags;

		if (req.params.tags !== "_") {
			tags = req.params.tags;
		}

		const resumoPesquisa = {
			profissionais,
			info: { paginas, profissionaisEncontrados: prestadoresFiltrados.length },
			tags
		};
		console.log(resumoPesquisa);
		return res.json(resumoPesquisa);
	}

	async indexOne(req, res) {
		const profissionalEspecífico = await Profissionais.findOne({
			where: { id: req.params.id }
		});
		if (profissionalEspecífico === null){
			return res.json(null)
		}
		const {
			id,
			nome,
			foto,
			email,
			celular,
			whatsapp,
			telefone,
			facebook,
			linkedin,
			site_oficial,
			bairro,
			cidade,
			estado,
			tags,
			fotos,
			text_anuncio,
			anuncio_pago
		} = profissionalEspecífico;
		const profissional = {
			id,
			nome,
			icone: foto,
			contato: {
				celular,
				telefone,
				whatsapp,
				email
			},
			tags,
			localização: {
				endereço: null,
				bairro,
				cidade,
				estado
			},
			redes_sociais: {
				facebook,
				linkedin,
				site_oficial
			},
			anuncio: {
				texto: text_anuncio,
				imagens: fotos,
				anuncioPago: anuncio_pago
			}
		};
		return res.json(profissional);
	}
}

export default new ProfissionaisController();

// CODIGO ABAIXO É O MESMO UTILIZADO COM O BANCO ANTERIOR

// class ProfissionaisController {
//   async index(req, res) {
//     const prestadores = await Profissionais.findAll();
//     const prestadoresFiltrados = prestadores
//       .map(profissional => {
//         const {
//           id,
//           nome,
//           foto,
//           tags,
//           text_anuncio,
//           anuncio_pago
//         } = profissional;

//         const prestador = {
//           id,
//           nome,
//           foto,
//           tags,
//           anuncio: {
//             texto: text_anuncio,
//             anuncioPago: anuncio_pago
//           }
//         };

//         const filtros = req.params.tags.split(",");

//         if (req.params.tags !== "_") {
//           let tagsMatched = 0;
//           if (prestador.length <= 1) {
//             prestador.tags.map(tag => {
//               if (filtros.indexOf(tag) !== -1) {
//                 tagsMatched += 1;
//                 // console.log(`A tag ${tag} foi encontrada no profissional ${prestador.nome}`)
//               }
//             });
//           } else {
//             return null;
//           }

//           if (tagsMatched === filtros.length) {
//             // console.log(`Todas as tags pesquisadas bateram com as tags do profissional ${prestador.nome}`)
//             return prestador;
//           } else {
//             // console.log(`${tagsMatched} tags foram encontradas no profissional ${prestador.nome}`)
//             return null;
//           }
//         } else {
//           // console.log("Essa pesquisa retornou todos os profissionais, por não haver tags")
//           return prestador;
//         }
//       })
//       .filter(prestadorValido => prestadorValido !== null);

//     let profissionais = [];

//     const organizarProfissionais = () => {
//       let profissionaisPagos = [];
//       let profissionaisGratuitos = [];

//       prestadoresFiltrados.map(profissional => {
//         if (profissional.anuncio_pago === true) {
//           profissionaisPagos.push(profissional);
//         } else {
//           profissionaisGratuitos.push(profissional);
//         }
//       });
//       profissionaisPagos.map(profissionalPago => {
//         profissionais.push(profissionalPago);
//       });
//       profissionaisGratuitos.map(profissionalGratuito => {
//         profissionais.push(profissionalGratuito);
//       });

//       return;
//     };
//     organizarProfissionais();

//     const profissionaisPorPagina = 10;

//     let paginas = (prestadoresFiltrados.length + 1) / profissionaisPorPagina;

//     if (paginas < 1) {
//       paginas = 1;
//     }

//     let tags;

//     if (req.params.tags !== "_") {
//       tags = req.params.tags;
//     }

//     const resumoPesquisa = {
//       profissionais,
//       info: { paginas, profissionaisEncontrados: prestadoresFiltrados.length },
//       tags
//     };
//     console.log(resumoPesquisa);
//     return res.json(resumoPesquisa);
//   }

//   async indexOne(req, res) {
//     const profissionalEspecífico = await Profissionais.findOne({ where: {id: req.params.id}})
//     const {
//       id,
//       nome,
//       foto,
//       email,
//       celular,
//       whatsapp,
//       telefone,
//       facebook,
//       linkedin,
//       site_oficial,
//       bairro,
//       cidade,
//       estado,
//       tags,
//       fotos,
//       text_anuncio,
//       anuncio_pago
//     } = profissionalEspecífico;
//     const profissional = {
//       id,
//       nome,
//       foto,
//       contato: {
//         celular,
//         telefone,
//         whatsapp,
//         email
//       },
//       tags,
//       localização: {
//         endereço: null,
//         bairro,
//         cidade,
//         estado,
//       },
//       redes_sociais: {
//         facebook,
//         linkedin,
//         site_oficial
//       },
//       anuncio: {
//         texto: text_anuncio,
//         imagens: fotos,
//         anuncioPago: anuncio_pago
//       }
//     }
//     return res.json(profissional)
//   }

//   async store(req, res) {
//     const {
//       nome,
//       cpf_cnpj,
//       foto,
//       email,
//       celular,
//       whatsapp,
//       telefone,
//       facebook,
//       linkedin,
//       site_oficial,
//       bairro,
//       cidade,
//       estado,
//       tags,
//       fotos,
//       text_anuncio,
//       senha
//     } = req.body;
//     const prestador = await Profissionais.create({
//       nome,
//       cpf_cnpj,
//       foto,
//       email,
//       celular,
//       whatsapp,
//       telefone,
//       facebook,
//       linkedin,
//       site_oficial,
//       bairro,
//       cidade,
//       estado,
//       tags,
//       fotos,
//       text_anuncio,
//       senha
//     });
//     return res.json(prestador);
//   }

//   // async update(req, res) {
//   // 	const { senha_antiga } = req.body;

//   // 	const prestador = await Prestador.findByPk(req.userId);

//   // 	if (senha_antiga && !(await prestador.checkSenha(senha_antiga))) {
//   // 		return res.status(400).json({ erro: 'A senhas não são iguais' });
//   // 	}

//   // 	const {
//   //     id,
//   //     nome,
//   //     cpf_cnpj,
//   //     foto,
//   //     email,
//   //     celular,
//   //     whatsapp,
//   //     telefone,
//   //     facebook,
//   //     linkedin,
//   //     site_oficial,
//   //     bairro,
//   //     cidade,
//   //     estado,
//   //     tags,
//   //     fotos,
//   //     text_anuncio,
//   //     senha
//   // 	} = await prestador.update(req.body);

//   // 	return res.json({
//   //     id,
//   //     nome,
//   //     cpf_cnpj,
//   //     foto,
//   //     email,
//   //     celular,
//   //     whatsapp,
//   //     telefone,
//   //     facebook,
//   //     linkedin,
//   //     site_oficial,
//   //     bairro,
//   //     cidade,
//   //     estado,
//   //     tags,
//   //     fotos,
//   //     text_anuncio,
//   //     senha
//   // 	});
//   // }
// }
// export default new ProfissionaisController();
