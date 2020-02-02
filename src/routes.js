import { Router } from "express";
const routes = Router();

import ProfissionaisController from "./app/controllers/ProfissionaisController";
import TagsController from "./app/controllers/TagsController";
import PlanosController from "./app/controllers/PlanosController";

// routes.post("/cadastro", ProfissionaisController.store)

//ROTAS EM PERFEITO FUNCIONAMENTO
routes.get("/filtros", TagsController.index);
routes.get("/planos/:id_profissional", PlanosController.index);
routes.get("/profissionais/:bairros/:tags/:pesquisa/:page", ProfissionaisController.indexAll);
routes.get("/profissionais/:id", ProfissionaisController.indexOne);



export default routes;
