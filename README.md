# Esqueleto MVC

Este reposítório contém um esqueleto de projeto MVC com diversas dependências pré-instaladas. Utiliza JavaScript ES8 sendo executado pelo Node.js com MySQL como banco de dados e Sequelize como ORM.

## Instalação

Para utilizar este projeto alguns pré-requisitos devem ser satisfeitos:
	- O Node.js versão 12.13.1 ou superior deve estar instalado em sua máquina;
	- Caso queira se conectar com um banco de dados MySQL local tenha o MySQL Server versão 8.18 ou superior instalado em sua máquina(Também recomendo que utilize alguma GUI para o MySQL como o MySQL Workbench ou phpMyAdmin);
	- Também provenho um arquivo .editorconfig já configurado, caso queira fazer uso do arquivo(algo que definitivamente recomendo) instale a extensão EditorConfig em seu editor de texto/IDE preferido.

Satisfazendo os pré requisitos acima, baixe os arquivos do repositório clicando em "clonar ou baixar" no canto superior direito da página ou por meio da linha de comando caso possua o GIT instalado em sua máquina:

```

git init
git clone https://github.com/vsilvasoares1710/Esqueleto-MVC-Node-MySQL-Sequelize

```

Com os arqivos em sua máquina navegue até a pasta raíz do projeto e instale todas as dependências do projeto executando os seguintes comandos:

```javascript

npm install
npm install --save sequelize
npm install --save nodemon
npm install --save sucrase

```

A partir desse momento, na pasta raíz do projeto sera criada uma pasta chamada node_modules, que todas as dependências do projeto devidamente instaladas em sua máquina além de outras dependências provenientes do Node.js.

## Dependências Instaladas

* Axios: Facilita a realização de requisições HTTP(XmlHttpRequests);
* Bcrypt: Permite criptografar informações sensíveis(como senhas por exemplo), por meio da criação de hashes com um segredo;
* CORS: Garante que as APIs criadas com esse projeto possam ser acessadas por servidores diferentes do servidor de desenvolvimento;
* express: Framework que possibilita a criação de um servidor com diversos métodos utilizados para criar acessar e manipular endpoints na aplicação;
* JSON Web Token(também conhecido como JWT): Ferramenta de autenticação que gera tokens criptografados utilizados para controle de logins e autenticação de aplicações web em geral;
* mysql2: Pacote mais utilizado para a manipulação de bancos de dados MySQL, permite a realização de querys SQL;
* Nodemon: Dependência excenlente parao proceso de desenvolvimento que monitora diversos arquivos da aplicação, realizando reload automático do servidor uma vez que qualquer aruivo monitorado seja modificado;
* Sequelize: ORM utilizado para manipular bancos de dados relacionais, abstraindo a SQL, permitindo que o banco de dados possa ser manipulado por meio de puro JavaScript;
* Sucrase: Pacote que possibilita o desenvolvimento de aplicações com todas as características do ECMAScript 8, que possam ser executados pelo Node.js;
* YUP: Uma das ferramentas mais populares para higienização de dados e validação de formulários.

## Estrutura do Projeto

    .
    ├── ..											# Pasta raíz do projeto
		├──node_modules							# Pasta de dependências do projeto
    │   └── ...
    ├──src											# Pasta fonte do projeto
    │   ├──app									# Pasta que contém o núcleo da aplicação
    │   │		├──controllers			# Pasta dos controladores lógicos da aplicação
    │   │		├──middlewares			# Pasta dos intermediadores da aplicação
		│   │   └──models						# Pasta dos modelos de dados da aplicação
    │   └──config								# Pasta que amazena configurações do projeto
    └── ...



