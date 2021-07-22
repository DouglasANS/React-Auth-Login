# React-Auth-Login

O projeto possui... ->

1- Uma página de login com opções de logar, recuperar a senha via email e registrar um novo usuário.<br/>
2- O formulário de registro é separado em 3 partes, O primeiro voltado a pessoa, o segundo ao endereço e o terceiro voltado aos dados da profissão. Todos os campos possuem validação para não prosseguir o Registro caso um ou mais campos estiverem vazio, e na parte de preenchimento de dados do Endereço possui a opção de consultar o endereço pelo CEP através de uma requisição API externa.<br/>
3- Existe a opção de recuperar a senha, na qual é enviado um código para o email e através dele, e exclusivamente dele, é possível recuperar a senha<br/>
4- Ao se logar o sistema verifica no backend se o usuário e senha existem, caso não, um alert irá surgir, caso exista, o login é realizado<br/>
5- Efetuado o login é possível perceber que é impossível acessar a página de login, como também se o usuário não estiver logado é impossível acessar páginas exclusivas para usuários online. <br/>
6- O site comtém um Header que mostra o nome do usuário atual, menu de locomoção entre páginas e uma opção de sair, onde faz logout e encerra a sessão.
7- Ao logar a primeira página é o Dashboard, nele contém os dados de todos os usuários cadastrados e a quantidade de profissionais cadastrados de acordo com a profissão.<br/>
8- No settings há a opção de fazer a Atualização dos dados de apenas 3 campos, Ainda em settings é possível excluir a sua conta <br/>
