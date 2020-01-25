import { Router } from "express"
const routes = Router()

import ProfissionalController from './app/controllers/ProfissionalController';

routes.post("/cadastro", ProfissionalController.store)

export default routes