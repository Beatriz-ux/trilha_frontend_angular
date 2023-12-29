import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
})
export class NoticiasComponent {
  apikey = '9b2a06d5c4193cb95cbbf36ad5826f0c';
  url =
    'https://gnews.io/api/v4/search?q=curso superior&lang=pt&max=10&apikey=' + this.apikey;
  noticias: IArticles[] = [];
  ngOnInit() {
    this.insereNoticias();
    // this.noticias = [
    //       {
    //           "title": "Lula credencia Impa como Instituição de Educação Superior",
    //           "description": "O 1º curso do Instituto de Matemática Pura e Aplicada será gratuito e terá investimento de quase R$ 17 milhões. Leia no Poder360.",
    //           "content": "O 1º curso do Instituto de Matemática Pura e Aplicada será gratuito e terá investimento de quase R$ 17 milhões\nO presidente Luiz Inácio Lula da Silva (PT) assinou nesta 4ª feira (6.dez.2023) o credenciamento do Impa (Instituto de Matemática Pura e Ap... [1667 chars]",
    //           "url": "https://www.poder360.com.br/governo/lula-credencia-impa-como-instituicao-de-educacao-superior/",
    //           "image": "https://static.poder360.com.br/2023/12/Lula-credenciamento-Impa-848x477.jpg",
    //           "publishedAt": "2023-12-06T22:43:11Z",
    //           "source": {
    //               "name": "Poder360",
    //               "url": "https://www.poder360.com.br"
    //           }
    //       },
    //       {
    //           "title": "Mineiros que têm diploma de curso superior somam 17,4%",
    //           "description": "Já 5% têm ensino médio incompleto e 28,1% ensino médio completo",
    //           "content": "Em Minas Gerais, 17,4% da população com 25 anos ou mais têm diploma de curso superior. Por outro lado, 34,2% dos moradores do Estado não completaram o ensino fundamental. Os dados são da “Síntese de Indicadores Sociais: uma análise das condições de v... [1492 chars]",
    //           "url": "https://www.otempo.com.br/cidades/mineiros-que-tem-diploma-de-curso-superior-somam-17-4-1.3288958",
    //           "image": "https://www.otempo.com.br/image/contentid/policy:1.3288965:1701889317/graduation-cap-3430710-1280-jpg.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=c33d9dc",
    //           "publishedAt": "2023-12-06T19:01:57Z",
    //           "source": {
    //               "name": "O Tempo",
    //               "url": "https://www.otempo.com.br"
    //           }
    //       },
    //       {
    //           "title": "Concurso Unificado Nacional: buscador do GLOBO mostra vagas por salário e nível de instrução",
    //           "description": "Ferramenta permite ao candidato consultar quais são as oportunidades em cada ministério ou agência, elencando por faixa salarial e exigência de ensino médio ou curso superior",
    //           "content": "O governo federal vai lançar até o próximo dia 20 o edital de seu primeiro Concurso Público Nacional Unificado (CPNU), já apelidado de “Enem dos concursos”, que vai oferecer, numa única prova, 6.640 vagas.\nO GLOBO obteve acesso ao perfil dessas vagas... [5569 chars]",
    //           "url": "https://oglobo.globo.com/economia/noticia/2023/12/04/concurso-unificado-nacional-buscador-do-globo-mostra-vagas-por-salario-e-nivel-de-instrucao.ghtml",
    //           "image": "https://s2-oglobo.glbimg.com/ObUVDuG5g-gm6tDclCYumXCt9Vk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/E/p/hET0dDRke1Lt0r07uvfw/header.jpg",
    //           "publishedAt": "2023-12-04T07:01:56Z",
    //           "source": {
    //               "name": "O Globo",
    //               "url": "https://oglobo.globo.com"
    //           }
    //       },
    //       {
    //           "title": "ONG fundada em Harvard oferece curso gratuito a jovens",
    //           "description": "Curso gratuito é voltado para jovens de baixa renda que sejam parte da primeira geração de suas famílias a ter acesso ao ensino superior.",
    //           "content": "A Aspire Institute, organização sem fins lucrativos fundada na Universidade de Harvard, recebe inscrições para curso gratuito de desenvolvimento de liderança.\nA iniciativa é voltada para jovens de baixa renda que sejam parte da primeira geração de su... [1169 chars]",
    //           "url": "https://catracalivre.com.br/educacao/ong-fundada-em-harvard-oferece-curso-gratuito-a-jovens/",
    //           "image": "https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=1200,h=638,fit=cover,format=jpeg/wp-content/uploads/2023/12/harvard-cursos-gratuitos.jpg",
    //           "publishedAt": "2023-12-01T14:22:11Z",
    //           "source": {
    //               "name": "Catraca Livre - Notícias",
    //               "url": "https://catracalivre.com.br"
    //           }
    //       },
    //       {
    //           "title": "Governo aprova prémio para jovens que fiquem em Portugal após ensino superior",
    //           "description": "Os jovens terão direito à devolução do valor equivalente à propina ao longo de um período equivalente ao número de anos do curso. Medida vai abranger cerca de 250 mil estudantes.",
    //           "content": "Os jovens terão direito à devolução do valor equivalente à propina ao longo de um período equivalente ao número de anos do curso. Medida vai abranger cerca de 250 mil estudantes.\nO Conselho de Ministros aprovou esta quarta-feira o decreto-lei que cri... [1730 chars]",
    //           "url": "https://www.publico.pt/2023/11/30/sociedade/noticia/governo-aprova-premio-jovens-fiquem-trabalhar-portugal-apos-ensino-superior-2072062",
    //           "image": "https://imagens.publico.pt/imagens.aspx/1863307?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Publico.png",
    //           "publishedAt": "2023-11-30T08:59:34Z",
    //           "source": {
    //               "name": "PÚBLICO",
    //               "url": "https://www.publico.pt"
    //           }
    //       },
    //       {
    //           "title": "Tecnólogo pode fazer concurso para nível superior?",
    //           "description": "Muitos tecnólogos têm dúvidas se de fato podem concorrer em algum concurso para nível superior, se o curso é suficiente para tal ação.",
    //           "content": "MEC explica a relação do concurso para nível superior e tecnólogos\nMuitos tecnólogos têm dúvidas se de fato podem concorrer em algum concurso para nível superior, isto é, se o curso é suficiente para tal ação.\nDiante disso, trouxemos os esclareciment... [3716 chars]",
    //           "url": "https://noticiasconcursos.com.br/tecnologo-pode-fazer-concurso-para-nivel-superior/",
    //           "image": "https://noticiasconcursos.com.br/wp-content/uploads/2023/11/noticiasconcursos.com.br-tecnologo-pode-fazer-concurso-para-nivel-superior-student-849825-1280.jpg",
    //           "publishedAt": "2023-11-29T14:58:54Z",
    //           "source": {
    //               "name": "Notícias Concursos",
    //               "url": "https://noticiasconcursos.com.br"
    //           }
    //       },
    //       {
    //           "title": "\"Apoia o sionismo genocida\". Ativistas 'atacam' Universidade Lusíada",
    //           "description": "Em causa está o facto da instituição de ensino superior ter recebido uma \"aula aberta\" do vice-chefe de missão da embaixada de Israel em Portugal, que terá \"incitado ao atual genocídio em curso na Faixa de Gaza\", revela o Coletivo pela Libertação da Palestina.",
    //           "content": "O Coletivo pela Libertação da Palestina anunciou esta quinta-feira mais uma ação contra a \"propaganda sionista\", desta vez na Universidade Lusíada de Lisboa.\nA instituição \"recebeu na quarta-feira uma aula aberta com o vice-chefe de missão da embaixa... [1144 chars]",
    //           "url": "https://www.noticiasaominuto.com/pais/2446998/apoia-o-sionismo-genocida-ativistas-atacam-universidade-lusiada",
    //           "image": "https://media-manager.noticiasaominuto.com/1280/naom_655f38eecd233.jpeg",
    //           "publishedAt": "2023-11-23T11:50:45Z",
    //           "source": {
    //               "name": "Notícias ao Minuto",
    //               "url": "https://www.noticiasaominuto.com"
    //           }
    //       },
    //       {
    //           "title": "Curso no DF é pioneiro na capacitação para transplantes de órgãos",
    //           "description": "Pós-graduação da Escola Superior de Ciências da Saúde amplia conhecimento de profissionais de todo o Brasil na gestão do sistema...",
    //           "content": "Pós-graduação da Escola Superior de Ciências da Saúde amplia conhecimento de profissionais de todo o Brasil na gestão do sistema nacional da área\nAs aulas da segunda turma da pós-graduação em Gestão do Sistema Brasileiro de Transplantes de Órgãos e T... [3569 chars]",
    //           "url": "https://jornaldebrasilia.com.br/brasilia/curso-no-df-e-pioneiro-na-capacitacao-para-transplantes-de-orgaos/",
    //           "image": "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2023/11/19165839/Foto-Arquivo-Agencia-Saude.jpg",
    //           "publishedAt": "2023-11-19T07:59:00Z",
    //           "source": {
    //               "name": "Jornal de Brasília",
    //               "url": "https://jornaldebrasilia.com.br"
    //           }
    //       },
    //       {
    //           "title": "Quase 90% dos microempreendedores não têm curso superior",
    //           "description": "Pesquisa realizada pelo Centro de Apoio aos Pequenos Empreendimentos (Ceape Brasil), com 26 mil empreendedores de diversos estados brasileiros, mostra que 87% dos entrevistados não concluíram e nem estavam cursando faculdade até julho de 2023. Em 2019, o percentual era de 88%.\nH...",
    //           "content": "Pesquisa realizada pelo Centro de Apoio aos Pequenos Empreendimentos (Ceape Brasil), com 26 mil empreendedores de diversos estados brasileiros, mostra que 87% dos entrevistados não concluíram e nem estavam cursando faculdade até julho de 2023. Em 201... [2366 chars]",
    //           "url": "https://www.tnh1.com.br/noticia/nid/quase-90-dos-microempreendedores-nao-tem-curso-superior/",
    //           "image": "https://www.tnh1.com.br/fileadmin/_processed_/6/8/csm_microempreendedores-curso-superior_822bec516b.jpg",
    //           "publishedAt": "2023-11-14T00:50:00Z",
    //           "source": {
    //               "name": "TNH1",
    //               "url": "https://www.tnh1.com.br"
    //           }
    //       },
    //       {
    //           "title": "Pesquisa: quase 90% dos microempreendedores não têm curso superior",
    //           "description": "Houve aumento do número de pessoas que declararam ter terminado o segundo grau.",
    //           "content": "Pesquisa realizada pelo Centro de Apoio aos Pequenos Empreendimentos (Ceape Brasil), com 26 mil empreendedores de diversos estados brasileiros, mostra que 87% dos entrevistados não concluíram e nem estavam cursando faculdade até julho de 2023. Em 201... [2367 chars]",
    //           "url": "https://paraibaonline.com.br/economia/2023/11/13/pesquisa-quase-90-dos-microempreendedores-nao-tem-curso-superior/",
    //           "image": "https://paraibaonline.com.br/wp-content/uploads/2023/11/empreendedorismo.jpg",
    //           "publishedAt": "2023-11-13T21:28:48Z",
    //           "source": {
    //               "name": "Paraíba Online",
    //               "url": "https://paraibaonline.com.br"
    //           }
    //       }
    //   ]
  
  }
  insereNoticias() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data: INews) => {
        this.noticias = data.articles;
      });
  }
}

interface INews {
  totalArticles: number;
  articles: IArticles[];
}

interface IArticles {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}
