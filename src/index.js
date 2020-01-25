import server from './server.js';

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Servidor em funcionamento utilizando a porta ${PORT}`);
})