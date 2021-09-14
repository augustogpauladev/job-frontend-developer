# Redeinova Tecnologia: Teste prático para Frontend Javascript Developer

# Projeto Feito pelo candidato: 

* ## Brandon Alves Nunes Freitas


# Como rodar o projeto;

# Forma 1:

### Passo1: 
* Na página do github selecione a branch com meu nome(brandon-alves-nunes-freitas);
### Passo 2:
* Clique no botão "code" ou "código" se estiver em portugues, em seguida clique em "Download Zip";
### Passo 3:
* Vá ao arquivo baixado e extraia, entre na pasta extraida até achar o arquivo "index.html";
### Passo 4:
* Clique nele com o botão direito do mouse e escolha abrir com um navegador de sua preferência ou arraste o arquivo para uma janela do seu navegador.

# Forma 2:

### Passo 1:
* Na página do github selecione a branch com meu nome(brandon-alves-nunes-freitas);
### Passo 2:
* Clone o repositorio em sua maquina local, usando SSH ou HTTPS;
### Passo 3:
* Dentro do repositorio local busque o arquivo index.html e repita o Passo 4 da Forma 1, para ver o codigo fonte do projeto abra a pasta do repositorio 
com um IDE de sua preferência ou um editor de texto.



## Estrutura e divisão do projeto;
    
# A divisão dos arquivos e pastas estão da seguinte forma:
Na pasta Raiz esta o arquivo HTML principal nomeado como <em>index.html</em>, há uma pasta <em>style</em> onde dentro se encontram os arquivos <em>index.css</em>
com este nome se referindo ao arquivo principal <em>index.html</em> que esta o chamando/requisitando no seu corpo, e o arquivo <em>mobile.css</em> onde esta o css responsivo da página, tambem há a pasta <em>scripts</em>, dentro da mesma se encontra o arquivo JavaScript nomeado como ,<em>index.js</em> onde esta tambem sendo chamado pelo arquivo <em>index.html</em>, há tambem a pasta <em>favicons</em> onde se encontra o arquivo favicon da pagina, arquivo criado e baixado do site <a href='https://favicon.io/'>favicon.io</a>.
    Projeto feito sem nenhum framework, utilzando as tecnologias de HTML5, CSS3 e JavaScript puro sem ajuda de plugins de terceiros.
o corpo do HTML foi feito utilzando de TAGS semânticas evitando o uso de TAGS como DIV, boa parte do corpo do HTML tambem esta sendo renderizado de forma 
dinâmica com o JavaScript.
    Estilo composto por 2 cores predominantes, uma cor de fonte neutra(branco), e uma cor diferenciada(vermelho) se houver erro na requisição da api, 
os icones que aparecem na pagina são do site <a href='https://fontawesome.com'>fontawesome</a>.
Há animações em icones, e nos elementos que entram na tela dinâmicamente, animações feitas apenas de CSS puro sem bibliotecas de externas, usando apenas do 
recurso <em>keyframes</em> nativo do CSS.
    A parte dinamica do JavaScript se baseia em coletar o valor que esta sendo digitado no input principal da pagina, logo em seguida quando o botão 
de busca for acionado chama a primeira função que faz a requisição da api <a href='https://developers.google.com/youtube/v3/getting-started' >APIs do Youtube</a>, que chama a api e rederiza os videos na tela, antes do processo estar completo chama a segunda função que irá requisitar os dados sobre o valor 
do input a api do <a href='https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/'>TicketMaster</a>, usando o recurso <em>Attraction Search</em> da <em>Discovery API</em> do TicketMaster, onde sera redenrizado na tela uma imagem e informações referentes a busca do usuário, se houver erro na busca por não haver essa informação na api do TicketMaster, uma mensagem de erro será mostrada na tela, se não for frito mais nenhuma requisição dentro 
de um determinado tempo, um sinal de exclamação(!) ficara acima dos videos carregados e abaixo do input do busca.







