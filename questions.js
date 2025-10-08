const QUIZ_QUESTIONS = [
    {
        question: "Qual presidente foi o responsável por iniciar o Plano Real, crucial para a estabilidade da moeda e controle da hiperinflação?",
        answerId: "franco" // Itamar Franco
    },
    {
        question: "O governo de qual presidente ficou marcado pelo confisco de poupanças, como parte de um plano econômico drástico?",
        answerId: "collor" // Fernando Collor
    },
    {
        question: "Quem foi o presidente durante o período conhecido como 'Anos de Chumbo', auge da repressão e censura da Ditadura Militar?",
        answerId: "medici" // Emílio Médici
    },
    {
        question: "Qual presidente assinou o Ato Institucional n° 5 (AI-5), o marco de maior endurecimento do Regime Militar?",
        answerId: "costaesilva" // Costa e Silva
    },
    {
        question: "O primeiro presidente civil após a Ditadura Militar, assumiu após a morte de Tancredo Neves. Quem ele foi?",
        answerId: "sarney" // José Sarney
    },
    {
        question: "Qual presidente deu início à 'Abertura Lenta e Gradual' do regime, apesar da manutenção do AI-5 por um período?",
        answerId: "geisel" // Ernesto Geisel
    },
    {
        question: "A Lei da Anistia, fundamental para o retorno de exilados e o fim da Ditadura Militar, foi promulgada durante o governo de qual presidente?",
        answerId: "figueiredo" // João Figueiredo
    },
    {
        question: "Qual presidente implementou o 'Teto de Gastos' (Emenda Constitucional 95) e a Reforma Trabalhista após o Impeachment de sua antecessora?",
        answerId: "temer" // Michel Temer
    },
    {
        question: "Sua administração foi marcada pelo crescimento da polarização política e pela gestão da crise sanitária global de COVID-19.",
        answerId: "bolsonaro" // Jair Bolsonaro
    },
    {
        question: "Primeira mulher a ser eleita presidente do Brasil, seu segundo mandato terminou após um processo de Impeachment.",
        answerId: "dilma" // Dilma Rousseff
    },
    {
        question: "Presidente que consolidou a estabilidade econômica pós-Real e implementou o programa de reeleição no seu primeiro mandato.",
        answerId: "cardoso" // Fernando Henrique Cardoso (FHC)
    },
    {
        question: "Qual presidente extinguiu os partidos políticos existentes e impôs o bipartidarismo (ARENA e MDB) através do Ato Institucional n° 2 (AI-2)?",
        answerId: "castelobranco"
    },
    {
        question: "O governo de qual presidente assinou o temido Ato Institucional n° 5 (AI-5), suspendendo o habeas corpus e fechando o Congresso?",
        answerId: "costaesilva"
    },
    {
        question: "Qual presidente foi o responsável pela campanha nacionalista 'Brasil: Ame-o ou Deixe-o' durante o período do 'Milagre Econômico'?",
        answerId: "medici"
    },
    {
        question: "Qual presidente deu início à política de 'Abertura Lenta e Gradual' do regime, mesmo enfrentando resistência da linha-dura militar?",
        answerId: "geisel"
    },
    {
        question: "A Lei da Anistia, fundamental para o retorno de exilados e o fim da Ditadura Militar, foi promulgada durante o governo de qual presidente?",
        answerId: "figueiredo"
    },
    {
        question: "Primeiro presidente civil após a ditadura, assumiu após a morte de Tancredo Neves e foi responsável pelo Plano Cruzado.",
        answerId: "sarney"
    },
    {
        question: "Qual presidente ficou marcado pelo drástico confisco de poupanças, uma medida desesperada do seu plano econômico?",
        answerId: "collor"
    },
    {
        question: "Em cujo governo foi criado o Plano Real, crucial para a estabilidade da moeda, sendo um dos maiores legados de sua gestão?",
        answerId: "franco" // Itamar Franco
    },
    {
        question: "Qual presidente consolidou a estabilidade econômica pós-Real e teve sucesso na aprovação da Emenda da Reeleição?",
        answerId: "cardoso" // FHC
    },
    {
        question: "O ministro da Fazenda que implementou o Plano Real em 1994 se tornaria o presidente que o sucederia. De quem estamos falando?",
        answerId: "cardoso" // FHC
    },
    {
        question: "Em cuja administração foi implementado o programa Bolsa Família e o país atingiu o grau de investimento pelas agências de risco?",
        answerId: "lula"
    },
    {
        question: "Primeira mulher a ser eleita presidente do Brasil, seu segundo mandato foi interrompido por um processo de Impeachment.",
        answerId: "dilma"
    },
    {
        question: "Qual presidente aprovou a Emenda Constitucional do Teto de Gastos (EC 95) e a Reforma Trabalhista?",
        answerId: "temer"
    },
    {
        question: "Qual presidente enfrentou a intensa crise sanitária global da COVID-19, período marcado por grande polarização política?",
        answerId: "bolsonaro"
    },
    {
        question: "Em 2005, o Escândalo do Mensalão abalou qual administração, centrada em uma coalizão de partidos?",
        answerId: "lula"
    },
    {
        question: "Qual presidente, apesar de ser o último militar, lançou o projeto 'Diretas Já' para promover eleições diretas, que acabou sendo derrotado?",
        answerId: "figueiredo" // João Figueiredo
    },
    {
        question: "Durante o governo de qual presidente houve o ápice da repressão política e o uso de tortura como método sistemático de controle?",
        answerId: "medici" // Emílio Médici
    },
    {
        question: "Quem foi o presidente cujo governo foi interrompido por uma doença grave, levando à formação de uma Junta Militar Provisória?",
        answerId: "costaesilva" // Costa e Silva
    },
    {
        question: "A posse de qual presidente marcou o início oficial do Regime Militar em 1964, logo após o golpe?",
        answerId: "castelobranco" // Castelo Branco
    },
    {
        question: "Qual presidente convocou a Assembleia Nacional Constituinte que elaborou a 'Constituição Cidadã' de 1988?",
        answerId: "sarney" // José Sarney
    },
    {
        question: "Em qual governo ocorreu o primeiro grande programa de privatizações de estatais brasileiras, incluindo empresas de telecomunicações?",
        answerId: "cardoso" // FHC
    },
    {
        question: "A crise cambial de 1999, que resultou na mudança do regime de câmbio para flutuante, ocorreu durante o segundo mandato de qual presidente?",
        answerId: "cardoso" // FHC
    },
    {
        question: "Qual presidente foi o precursor do conceito de 'Luz Para Todos', expandindo a energia elétrica para áreas rurais?",
        answerId: "lula" // Lula
    },
    {
        question: "O *impeachment* desta presidente foi motivado pelas chamadas 'pedaladas fiscais', manobras contábeis para maquiar as contas públicas.",
        answerId: "dilma" // Dilma Rousseff
    },
    {
        question: "A Lei de Responsabilidade Fiscal (LRF), um marco de controle das contas públicas estaduais e federais, foi criada sob qual presidente?",
        answerId: "cardoso" // FHC
    },
    {
        question: "A Medida Provisória da Liberdade Econômica, um marco na desburocratização e incentivo a novos negócios, foi sancionada por qual presidente?",
        answerId: "bolsonaro" // Jair Bolsonaro
    },
    {
        question: "A proposta de Reforma da Previdência, que alterou as regras de idade mínima e tempo de contribuição, foi uma prioridade de qual presidente?",
        answerId: "bolsonaro" // Jair Bolsonaro
    },
    {
        question: "O governo de transição de qual presidente foi responsável pela criação do Fundo de Financiamento Estudantil (FIES) para o ensino superior?",
        answerId: "franco" // Itamar Franco
    },
    {
        question: "A Medida Provisória que instituiu o auxílio emergencial em resposta à pandemia de COVID-19 foi assinada em qual governo?",
        answerId: "bolsonaro" // Jair Bolsonaro
    },
    {
        question: "Qual presidente teve sua posse marcada por uma transição tensa e pela implementação de grandes reformas estruturais, como a Reforma Trabalhista?",
        answerId: "temer" // Michel Temer
    },
    {
        question: "Em qual governo foi criado o Ministério da Ciência e Tecnologia (MCT), marcando um avanço na política científica nacional?",
        answerId: "sarney" // José Sarney
    },
    {
        question: "Qual presidente foi o primeiro a ser eleito por voto direto após o Regime Militar, despertando grande euforia popular na época?",
        answerId: "collor" // Fernando Collor
    },
    {
        question: "A política externa de 'pragmatismo responsável', focada em relações comerciais com países em desenvolvimento, marcou a gestão de qual presidente militar?",
        answerId: "geisel" // Ernesto Geisel
    },
    {
        question: "Qual presidente, antes de assumir, teve uma carreira notável como sociólogo e foi Ministro das Relações Exteriores e da Fazenda?",
        answerId: "cardoso" // FHC
    },
    {
        question: "O escândalo do Mensalão, envolvendo desvios de dinheiro público para compra de apoio político no Congresso, abalou a administração de qual presidente?",
        answerId: "lula" // Lula
    },
    {
        question: "A crise de energia de 2001, que levou ao racionamento conhecido como 'Apagão', ocorreu no segundo mandato de qual presidente?",
        answerId: "cardoso" // FHC
    },
    {
        question: "Qual presidente foi o primeiro a ter um vice que era do partido de oposição (o MDB), formando uma aliança inusitada para o cargo?",
        answerId: "lula" // Lula (com José Alencar)
    },
    {
        question: "A criação das Unidades de Pronto Atendimento (UPAs) e a expansão do SAMU foram políticas de saúde consolidadas no governo de qual presidente?",
        answerId: "dilma" // Dilma Rousseff
    },
    {
        question: "Em qual governo o Brasil alcançou o status de 'Grau de Investimento' pelas agências de risco internacionais, um marco de confiança econômica?",
        answerId: "lula" // Lula
    },
    {
        question: "A criação do Plano Nacional de Educação (PNE) e a expansão do PRONATEC (programa técnico) foram focos da política educacional de qual presidente?",
        answerId: "dilma" // Dilma Rousseff
    },
    {
        question: "Qual presidente teve sua imagem de posse na rampa marcada pela ausência da faixa presidencial, devido ao contexto de Impeachment?",
        answerId: "temer" // Michel Temer
    },
    {
        question: "A Lei da Anistia para Militares, que complementou a anistia política de 1979, foi proposta durante o mandato de qual presidente?",
        answerId: "castelobranco" // Castelo Branco (É um ato de 1964)
    },
    {
        question: "O fim do financiamento público da TV Brasil e a redução do número de ministérios foram medidas iniciais de qual presidente?",
        answerId: "bolsonaro" // Jair Bolsonaro
    },
    {
        question: "Qual presidente sofreu o processo de *impeachment* mais rápido da história do Brasil, sendo afastado em menos de dois anos de mandato?",
        answerId: "collor" // Fernando Collor
    },
    {
        question: "O primeiro presidente a enfrentar uma pandemia global (COVID-19) em seu mandato, o que dominou a política pública por mais de um ano.",
        answerId: "bolsonaro" // Jair Bolsonaro
    },
    {
        question: "Qual presidente sancionou o Estatuto da Terra em 1964, a lei que instituiu as bases da política de reforma agrária no país?",
        answerId: "castelobranco"
    },
    {
        question: "Qual presidente militar supervisionou grandes projetos de infraestrutura, como a Ponte Rio-Niterói e a Rodovia Transamazônica?",
        answerId: "medici"
    },
    {
        question: "Em qual governo foi criada a Receita Federal do Brasil, unificando a administração tributária e aduaneira?",
        answerId: "geisel"
    },
    {
        question: "A criação do Conselho de Controle de Atividades Financeiras (COAF) visando a prevenção de lavagem de dinheiro, ocorreu na administração de qual presidente?",
        answerId: "collor"
    },
    {
        question: "A política de privatizações foi intensificada com a venda de grandes estatais como a Companhia Vale do Rio Doce (CVRD) no governo de qual presidente?",
        answerId: "cardoso"
    },
    {
        question: "Qual presidente, ao sancionar a Lei da Anistia (1979), vetou o artigo que garantia a reintegração de servidores públicos cassados ao serviço ativo?",
        answerId: "figueiredo"
    },
    {
        question: "O primeiro uso notável da Lei de Crimes de Responsabilidade (Lei 1.079/50) contra um presidente civil ocorreu no mandato de qual presidente?",
        answerId: "sarney"
    },
    {
        question: "Qual presidente sancionou a Lei de Diretrizes e Bases da Educação Nacional (LDB - Lei 9.394/96), consolidando o marco legal da educação brasileira?",
        answerId: "cardoso"
    },
    {
        question: "A criação da Empresa Brasil de Comunicação (EBC) e a expansão da TV Pública ocorreram no governo de qual presidente?",
        answerId: "lula"
    },
    {
        question: "Qual presidente, em um movimento polêmico, eliminou a obrigatoriedade da contribuição sindical no pacote da Reforma Trabalhista de 2017?",
        answerId: "temer"
    },
    {
        question: "Qual presidente propôs a meta de 'Déficit Zero' no início de seu governo, prometendo estabilizar as contas públicas?",
        answerId: "collor"
    },
    {
        question: "O governo de transição de qual presidente determinou a suspensão da importação de veículos, protegendo a indústria nacional?",
        answerId: "franco" // Itamar Franco
    },
    {
        question: "O escândalo dos 'Anões do Orçamento', que envolvia desvios de recursos federais, abalou a credibilidade do Congresso no governo de qual presidente?",
        answerId: "sarney"
    },
    {
        question: "A crise econômica de 2014-2016 e a forte recessão foram frequentemente associadas ao que críticos chamavam de 'Nova Matriz Econômica' de qual presidente?",
        answerId: "dilma"
    },
    {
        question: "Qual presidente assinou o Acordo de Livre Comércio Mercosul-União Europeia, considerado um marco nas relações exteriores brasileiras?",
        answerId: "bolsonaro"
    },
    {
        question: "A criação do Movimento Brasileiro de Alfabetização (MOBRAL), visando a erradicação do analfabetismo, ocorreu no governo de qual presidente militar?",
        answerId: "medici" // Emílio Médici
    },
    {
        question: "Qual presidente, eleito indiretamente, foi o primeiro a governar o país após o fim do AI-5 e deu sequência à abertura política?",
        answerId: "figueiredo" // João Figueiredo
    },
    {
        question: "O escândalo do 'Cheque Mate', que envolveu denúncias de corrupção na Caixa Econômica Federal e abalou a credibilidade do governo, ocorreu sob qual presidente?",
        answerId: "collor" // Fernando Collor
    },
    {
        question: "Qual presidente convocou a Assembleia Nacional Constituinte em 1987, que resultou na promulgação da 'Constituição Cidadã'?",
        answerId: "sarney" // José Sarney
    },
    {
        question: "Em cujo mandato ocorreu o primeiro grande ciclo de obras de infraestrutura com foco na integração nacional, como a BR-101?",
        answerId: "castelobranco" // Castelo Branco
    },
    {
        question: "Qual presidente criou a Agência Nacional de Telecomunicações (ANATEL) após a privatização do sistema Telebrás?",
        answerId: "cardoso" // FHC
    },
    {
        question: "A política de 'Três Metas' (câmbio flutuante, metas de inflação e superávit primário) foi adotada para estabilizar a economia no início do governo de qual presidente?",
        answerId: "cardoso" // FHC
    },
    {
        question: "O Plano de Aceleração do Crescimento (PAC), focado em investimentos em infraestrutura e logística, foi lançado em qual administração?",
        answerId: "lula" // Lula
    },
    {
        question: "Em qual governo a Comissão Nacional da Verdade foi estabelecida para investigar violações de direitos humanos ocorridas entre 1946 e 1988?",
        answerId: "dilma" // Dilma Rousseff
    },
    {
        question: "O governo de qual presidente investiu na política de cotas raciais e sociais nas universidades federais, expandindo o acesso ao ensino superior?",
        answerId: "lula" // Lula
    },
    {
        question: "Qual presidente revogou a Lei de Segurança Nacional (LSN), substituindo-a pela nova Lei do Estado Democrático de Direito?",
        answerId: "bolsonaro" // Jair Bolsonaro
    },
    {
        question: "O governo de transição de qual presidente foi responsável pela criação do PROERBE, programa de renegociação de dívidas rurais?",
        answerId: "franco" // Itamar Franco
    },
    {
        question: "A Operação Lava Jato, que se intensificou e expôs vastos esquemas de corrupção, teve grande impacto na administração de qual presidente, que assumiu após o impeachment?",
        answerId: "temer" // Michel Temer
    },
    {
        question: "Em cujo governo o Brasil conquistou o tricampeonato mundial de futebol, um evento usado intensamente na propaganda política da época?",
        answerId: "medici" // Emílio Médici
    },
    {
        question: "O vice-presidente de quem assumiu a presidência após o *impeachment* e sancionou o Plano Real, tornando-se o presidente de fato?",
        answerId: "collor" // Fernando Collor (Vice: Itamar Franco)
    },
    {
        question: "Qual presidente, antes de assumir, foi um dos principais signatários do Manifesto dos 13, que criticava o governo João Goulart?",
        answerId: "castelobranco" // Castelo Branco
    },
    {
        question: "A extinção da Lei de Imprensa de 1967, que vigorou durante a ditadura, e a aprovação de uma nova legislação ocorreram em cuja administração?",
        answerId: "lula" // Lula
    },
    {
        question: "Qual presidente convocou o primeiro plebiscito pós-Ditadura para decidir a forma e o sistema de governo do país (Monarquia vs. República)?",
        answerId: "franco" // Itamar Franco
    },
    {
        question: "A política de subsídios e crédito agrícola conhecida como 'Plano Safra' foi consolidada e expandida significativamente na administração de qual presidente?",
        answerId: "lula" // Lula
    },
    {
        question: "Qual presidente criou a figura do 'Superministro' da Fazenda, conhecido por ter poderes excepcionais para combater a inflação?",
        answerId: "collor" // Fernando Collor (Zélia Cardoso de Mello)
    },
    {
        question: "O governo de qual presidente militar foi o primeiro a ser interrompido por doença, levando a uma Junta Militar provisória no poder?",
        answerId: "costaesilva" // Costa e Silva
    },
    {
        question: "Qual presidente enfrentou a primeira grande greve geral dos trabalhadores rurais e urbanos em seu mandato, marcando o início da crise política?",
        answerId: "figueiredo" // João Figueiredo
    },
    {
        question: "A criação dos Juizados Especiais Cíveis e Criminais (JECRIMs), simplificando a justiça de menor complexidade, ocorreu no mandato de qual presidente?",
        answerId: "cardoso" // FHC
    },
    {
        question: "Qual presidente assumiu após a cassação do seu antecessor e implementou o Ministério da Transparência, Fiscalização e Controle?",
        answerId: "temer" // Michel Temer
    },
    {
        question: "A decisão de sediar a Copa do Mundo de 2014 e as Olimpíadas de 2016 foi tomada durante o governo de qual presidente?",
        answerId: "lula" // Lula
    },
    {
        question: "Qual presidente estabeleceu o Código Florestal (Lei 12.651/12), após um longo debate sobre a proteção de reservas legais e áreas de preservação permanente (APPs)?",
        answerId: "dilma" // Dilma Rousseff
    },
    {
        question: "A demarcação de terras indígenas e a criação de unidades de conservação foram suspensas e reduzidas significativamente na administração de qual presidente?",
        answerId: "bolsonaro" // Jair Bolsonaro
    },
    {
        question: "Em cujo mandato ocorreu o grande escândalo da Operação Satiagraha, que investigou o desvio de verbas e a espionagem ilegal?",
        answerId: "lula" // Lula
    },
    {
        question: "O governo de qual presidente ficou marcado pela grande pressão do movimento 'Caras Pintadas', que exigia seu afastamento?",
        answerId: "collor" // Fernando Collor
    },
    {
        question: "A criação da Agência Nacional de Energia Elétrica (ANEEL), reguladora do setor elétrico, ocorreu no governo de quem?",
        answerId: "cardoso" // FHC
    }
];

const ALL_PRESIDENTS = [
    { id: "castelobranco", nome: "Castelo Branco" },
    { id: "costaesilva", nome: "Costa e Silva" },
    { id: "medici", nome: "Médici" },
    { id: "geisel", nome: "Geisel" },
    { id: "figueiredo", nome: "Figueiredo" },
    { id: "sarney", nome: "Sarney" },
    { id: "collor", nome: "Collor" },
    { id: "franco", nome: "Franco" },
    { id: "cardoso", nome: "FHC" },
    { id: "lula", nome: "Lula" },
    { id: "dilma", nome: "Dilma" },
    { id: "temer", nome: "Temer" },
    { id: "bolsonaro", nome: "Bolsonaro" }
];