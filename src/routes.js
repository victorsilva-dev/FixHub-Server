import { Router } from "express";
import TagsController from "./app/controllers/TagsController";
import PlanosController from "./app/controllers/PlanosController";
import LocaisController from "./app/controllers/LocaisController";
import ProfissionaisController from "./app/controllers/ProfissionaisController";

const routes = Router();

//ROTAS EM PERFEITO FUNCIONAMENTO
//Rota de Busca dos filtros para pesquisa e cadastro de profisionais
routes.get("/filtros", TagsController.index);
//Rota para exposição dos estados, cidades e bairros
routes.get("/locais", LocaisController.index)
//Rota de Busca de planos de planos pagos pelos profissionais. Implementação de funcionalidade futura
routes.get("/planos/:id_profissional", PlanosController.index);
//Rota de pesquisa por profissionais
routes.get(
	"/profissionais/:estado/:cidade/:bairros/:tags/:pesquisa/:page",
	ProfissionaisController.indexAll
);
//Rota de busca de informações de um profissional para exposição pública
routes.get("/profissionais/:id", ProfissionaisController.indexOne);

//ROTAS EM TESTE

//ROTAS A SEREM CRIADAS
// //Rota de cadastro do profissional
routes.post("/profissionais", ProfissionaisController.store);
// //Rota de busca de informações de um profissional para exposição privada
// routes.post("/profissionais/:id", ProfissionaisController.indexOneAuth);
// //Rota de atualização de dados do profissional
// routes.put("/profissionais/:id", ProfissionaisController.update);
// //Rota de login do profissional
// routes.post("/profissionais/entrar", ProfissionaisController.login);
// //Rota de troca de senha do profissional
// routes.post("/profissionais/senha", ProfissionaisController.passwordUpdate);
// //Rota de cadastro de usuários
// routes.post("/usuarios", UsuariosController.store);
// //Rota de busca de informações de um usuário para exposição privada
// routes.post("/usuarios/:id", UsuariosController.index);
// //Rota de atualização de dados do usuário
// routes.put("/usuarios/:id", UsuariosController.update);
// //Rota de login do usuário
// routes.post("/usuarios/entrar", UsuariosController.login);
// //Rota de troca de senha do profissional
// routes.post("/usuarios/senha", UsuariosController.passwordUpdate);
// //Rota de criação de review
// routes.post("/usuarios/avaliacoes", AvaliacoesController.store);

export default routes;
