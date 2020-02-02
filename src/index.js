import server from './server.js';

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`Servidor em funcionamento utilizando a porta ${PORT}`);
})