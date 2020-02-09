import { Router } from "express";
import ProfissionaisController from "./app/controllers/ProfissionaisController";
import TagsController from "./app/controllers/TagsController";
import PlanosController from "./app/controllers/PlanosController";

const routes = Router();

//ROTAS EM PERFEITO FUNCIONAMENTO
//Rota de Busca dos filtros para pesquisa e cadastro de profisionais
routes.get("/filtros", TagsController.index);
//Rota de Busca de planos de planos pagos pelos profissionais. Implementação de funcionalidade futura
routes.get("/planos/:id_profissional", PlanosController.index);
//Rota de pesquisa por profissionais
routes.get(
	"/profissionais/:bairros/:tags/:pesquisa/:page",
	ProfissionaisController.indexAll
);
//Rota de busca de informações de um profissional para exposição pública
routes.get("/profissionais/:id", ProfissionaisController.indexOne);

// //ROTAS A SEREM CRIADAS
// //Rota de cadastro do profissional
// routes.post("/profissionais", ProfissionaisController.store);
// //Rota de busca de informações de um profissional para exposição privada
// routes.post("/profissionais/:id", ProfissionaisController.indexOneAuth);
// //Rota de atualização de dados do profissional
// routes.patch("/profissionais/:id", ProfissionaisController.update);
// //Rota de troca de senha do profissional
// routes.post("/profissionais/senha", ProfissionaisController.passwordUpdate);
// //Rota de cadastro de usuários
// routes.post("/usuarios", UsuariosController.store);
// //Rota de busca de informações de um usuário para exposição privada
// routes.post("/usuarios/:id", UsuariosController.indexOneAuth);
// //Rota de atualização de dados do usuário
// routes.patch("/usuarios/:id", UsuariosController.update);
// //Rota de troca de senha do profissional
// routes.post("/usuarios/senha", UsuariosController.passwordUpdate);
// //Rota de criação de review
// routes.post("/usuarios/avaliacoes", AvaliacoesController.store);
// //Rota de busca de informações sobre review
// routes.get("/usuarios/avaliacoes/:id", AvaliacoesController.index);
// //Rota de atualização de review
// routes.patch("/usuarios/avaliacoes/id", AvaliacoesController.update);

export default routes;
