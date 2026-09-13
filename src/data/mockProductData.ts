import { FrameworkInfo, GraphNodeStep, DependencyLink, PricingPlan, EvidenceDemoItem } from '../types';

export const FRAMEWORKS_DATA: FrameworkInfo[] = [
  {
    id: 'iso27001',
    name: 'ISO/IEC 27001',
    version: '2022',
    badge: 'HUB / SOA',
    color: 'border-cyan-500 text-cyan-400 bg-cyan-500/10',
    controlsCount: 93,
    description: 'Sistema de Gestão de Segurança da Informação (SGSI) — padrão internacional e espinha dorsal da plataforma.',
    role: 'Eixo de Certificação e Hub Central de Evidências',
    domains: ['Organizacional (37)', 'Pessoas (8)', 'Físico (14)', 'Tecnológico (34)'],
    mappingHub: '100% de controles correlacionados ao SOA',
  },
  {
    id: 'cis',
    name: 'CIS Controls',
    version: 'v8',
    badge: 'DEFESA OPERACIONAL',
    color: 'border-emerald-500 text-emerald-400 bg-emerald-500/10',
    controlsCount: 153,
    description: 'Center for Internet Security Controls — 18 grupos, 153 salvaguardas práticas e 3 níveis de Implementation Groups (IG1, IG2, IG3).',
    role: 'Prontidão Operacional & Higiene Cibernética',
    domains: ['Inventário de Ativos', 'Proteção de Dados', 'Gestão de Acessos', 'Defesa de Malware'],
    mappingHub: 'Mapeamento automático com Anexo A da ISO',
  },
  {
    id: 'nist',
    name: 'NIST CSF',
    version: '2.0',
    badge: 'ESTRATÉGIA GLOBAL',
    color: 'border-indigo-500 text-indigo-400 bg-indigo-500/10',
    controlsCount: 106,
    description: 'Cybersecurity Framework do NIST 2.0 — 6 funções estratégicas, 22 categorias e 106 subcategorias.',
    role: 'Visão Executiva de Resiliência e Continuidade',
    domains: ['Govern (GV)', 'Identify (ID)', 'Protect (PR)', 'Detect (DE)', 'Respond (RS)', 'Recover (RC)'],
    mappingHub: 'Herança direta de riscos e controles',
  },
  {
    id: 'cobit',
    name: 'COBIT 2019',
    version: '2019',
    badge: 'GOVERNANÇA TI',
    color: 'border-amber-500 text-amber-400 bg-amber-500/10',
    controlsCount: 41,
    description: 'Governança e Gestão de TI Corporativa — 40 objetivos distribuídos em 5 domínios fundamentais da ISACA.',
    role: 'Alinhamento Estratégico com Negócios e Stakeholders',
    domains: ['EDM (Avaliar/Dirigir)', 'APO (Alinhar/Organizar)', 'BAI (Construir/Adquirir)', 'DSS (Entregar/Suportar)', 'MEA (Monitorar)'],
    mappingHub: 'Correlação com processos de SGSI',
  },
  {
    id: 'lgpd',
    name: 'LGPD & Privacidade',
    version: 'Lei 13.709/18',
    badge: 'LEGAL & REGULATÓRIO',
    color: 'border-rose-500 text-rose-400 bg-rose-500/10',
    controlsCount: 23,
    description: 'Lei Geral de Proteção de Dados Pessoais — obrigações, bases legais, direitos do titular, RoPA, DPO/Encarregado e incidentes.',
    role: 'Conformidade Regulatória e Proteção de Titulares',
    domains: ['Inventário RoPA', 'Bases Legais (Art. 7/11)', 'Prazos ANPD (3 dias úteis)', 'Prazos Titular (15 dias)'],
    mappingHub: 'Vínculo obrigatório com Ativos Primários',
  },
  {
    id: 'iso42001',
    name: 'ISO/IEC 42001',
    version: '2023',
    badge: 'GOVERNANÇA DE IA',
    color: 'border-purple-500 text-purple-400 bg-purple-500/10',
    controlsCount: 38,
    description: 'Sistema de Gestão de Inteligência Artificial — padrão internacional para governança e segurança de IA responsável.',
    role: 'Conformidade e Transparência Algorítmica',
    domains: ['Avaliação de Impacto de IA', 'Ciclo de Vida de Modelos', 'Qualidade de Dados', 'Explicabilidade & Ética'],
    mappingHub: 'Integrado à matriz de riscos do SGSI',
  },
];

export const GRAPH_STEPS_DATA: GraphNodeStep[] = [
  {
    step: 1,
    title: 'Contexto do SGSI',
    normReference: 'ISO/IEC 27001 Cl. 4.1 · 4.2 · 6.2',
    description: 'A base do sistema de gestão: partes interessadas (internas e externas) e objetivos de segurança mensuráveis com metas e prazos.',
    input: 'Nada — é o ponto de partida. Você declara o cenário real da organização.',
    output: 'Objetivo vira risco em um clique. Expectativa de parte interessada vira risco. Os objetivos alimentam as metas do painel.',
    commonMarketMistake: 'Objetivo que não vira risco, meta ou ação é mero enfeite. A Cláusula 6.2 exige que ele seja monitorado com evidência de eficácia.',
    iconName: 'Compass',
  },
  {
    step: 2,
    title: 'Ativos de Informação',
    normReference: 'ISO/IEC 27001 A.5.9 · ISO 27005',
    description: 'O Traçado separa ativo PRIMÁRIO (processo, serviço, informação que gera valor de negócio) de ativo de SUPORTE (nuvem, banco, pessoas, instalações).',
    input: 'O contexto: as partes interessadas que exigem cada ativo.',
    output: 'Riscos sobre o ativo. Atividades de tratamento de dados pessoais (RoPA). Cenários de continuidade com RTO e RPO. Índice de saúde do ativo.',
    commonMarketMistake: 'Inventariar apenas ativos de TI (servidores e laptops). Um SGSI que não enxerga processos e informações como ativos primários é reprovado na ISO 27001.',
    iconName: 'Server',
  },
  {
    step: 3,
    title: 'Análise de Riscos',
    normReference: 'ISO/IEC 27001 Cl. 6.1.2 · 6.1.3 · ISO 27005',
    description: 'A ameaça ou oportunidade sobre o ativo, mensurada antes (Inerente) e depois (Residual) dos controles compensatórios aplicados.',
    input: 'O ativo, o objetivo de SI ou a parte interessada de onde o risco nasceu.',
    output: 'Controle do Anexo A associado. Plano de ação quando o residual excede o apetite. Não conformidade quando o risco já se materializou.',
    commonMarketMistake: 'Aceitar risco sem nomear quem aprovou e quando. A Cláusula 6.1.3(f) exige aprovação explícita do dono do risco. O sistema recusa aceitação sem isso.',
    iconName: 'ShieldAlert',
  },
  {
    step: 4,
    title: 'Declaração de Aplicabilidade (SOA)',
    normReference: 'ISO/IEC 27001 Cl. 6.1.3(d) · Anexo A',
    description: 'A lista dos 93 controles com a decisão formal da organização sobre cada um: aplicável ou não, estágio de implementação e o que comprova.',
    input: 'Os riscos identificados que justificam por que um controle é necessário.',
    output: 'A fila de GAP priorizada. O Índice de Segurança Aplicada. O roteiro da auditoria interna gerado a partir do que foi declarado.',
    commonMarketMistake: 'Excluir controle sem justificativa documentada. A 6.1.3(d) exige justificativa técnica formal. O Traçado bloqueia exclusão em branco.',
    iconName: 'FileCheck',
  },
  {
    step: 5,
    title: 'Políticas & Evidências Operacionais',
    normReference: 'ISO/IEC 27001 Cl. 7.5 · A.5.1 · A.5.37',
    description: 'Política é o que a organização DIZ que faz; evidência é o que PROVA que faz. O Traçado trata de forma distinta e correlaciona automaticamente.',
    input: 'Arquivos de políticas e coletas de evidências com periodicidade.',
    output: 'Cobertura documental e operacional do SOA. Herança para os outros frameworks: a mesma evidência conta em ISO, CIS, NIST e LGPD.',
    commonMarketMistake: 'Confundir política com implementação. Documento assinado não é controle rodando. Evidência vencida deixa de contar como cobertura.',
    iconName: 'FileSearch',
  },
  {
    step: 6,
    title: 'Eventos, Incidentes & Não Conformidades',
    normReference: 'ISO/IEC 27001 A.5.24-27 · Cl. 10.1 · LGPD Art. 48',
    description: 'Uma entrada única para o que acontece: evento -> incidente -> não conformidade. Ao registrar, o motor sugere o risco e ativos relacionados.',
    input: 'O risco relacionado sugerido pelo sistema. O ativo afetado.',
    output: 'Se envolve dado pessoal, dispara prazos legais (3 dias úteis ANPD / 15 dias titular). Vira NC com histórico de reincidência.',
    commonMarketMistake: 'Tratar evento e incidente como a mesma coisa sem triagem. A ISO 27035 pede histórico detalhado de escalonamento.',
    iconName: 'AlertTriangle',
  },
  {
    step: 7,
    title: 'Causa Raiz & Planos de Ação',
    normReference: 'ISO/IEC 27001 Cl. 10.1 · 10.2',
    description: 'A Não Conformidade exige Correção Imediata (apagar o fogo) e Ação Corretiva (evitar que volte via 5 Porquês ou Ishikawa estruturado).',
    input: 'A não conformidade com seu ativo, risco e cláusula vinculada.',
    output: 'Plano de ação com responsável e prazo. Verificação formal de EFICÁCIA: o problema realmente deixou de existir?',
    commonMarketMistake: 'Encerrar NC sem verificar eficácia após 30/60/90 dias. É o achado mais comum em auditorias de recertificação.',
    iconName: 'ListTodo',
  },
  {
    step: 8,
    title: 'Auditoria Interna',
    normReference: 'ISO/IEC 27001 Cl. 9.2',
    description: 'A organização audita a si mesma antes que o auditor externo chegue. O roteiro é gerado do que ela declarou no SOA.',
    input: 'O SOA, as políticas e o repositório de evidências vigentes.',
    output: 'Achados que viram Não Conformidades com a referência da auditoria preservada. Alimenta a análise crítica.',
    commonMarketMistake: 'Deixar alguém auditar o próprio trabalho. A Cláusula 9.2.2(c) exige imparcialidade. O sistema sinaliza conflito de interesse.',
    iconName: 'ClipboardCheck',
  },
  {
    step: 9,
    title: 'Análise Crítica pela Direção',
    normReference: 'ISO/IEC 27001 Cl. 9.3',
    description: 'A alta liderança analisa o SGSI inteiro em intervalos planejados. O sistema congela um retrato dos indicadores no momento exato da ata.',
    input: 'Tudo: NCs, auditorias, riscos, objetivos, indicadores e entradas obrigatórias da 9.3.2.',
    output: 'Decisões de melhoria e mudanças no SGSI que viram planos de ação para o próximo ciclo.',
    commonMarketMistake: 'Reunir a diretoria sem cobrir as 9 entradas mínimas exigidas pela norma. O sistema confere a ata e aponta o que falta.',
    iconName: 'LineChart',
  },
];

export const DEPENDENCY_LINKS: DependencyLink[] = [
  {
    from: 'Objetivo de SI',
    to: 'Risco',
    payload: 'Descrição do objetivo e o vínculo, para o risco saber o que ameaça',
    businessReason: 'Garante que nenhum objetivo fique sem tratamento de ameaça correspondente.',
  },
  {
    from: 'Parte Interessada',
    to: 'Risco',
    payload: 'A expectativa declarada no texto do risco',
    businessReason: 'Demonstra ao auditor a origem exata da exigência (regulador, cliente, conselho).',
  },
  {
    from: 'Ativo Primário',
    to: 'RoPA (LGPD)',
    payload: 'Vínculo obrigatório — não existe tratamento de dados sem ativo',
    businessReason: 'Elimina inventários de dados pessoais desconectados da infraestrutura real.',
  },
  {
    from: 'Cenário de Continuidade',
    to: 'Risco',
    payload: 'O pior impacto do cenário vira probabilidade e impacto na matriz',
    businessReason: 'Unifica BIA (Business Impact Analysis) com a Gestão de Riscos do SGSI.',
  },
  {
    from: 'Incidente c/ Dado Pessoal',
    to: 'Prazos Legais',
    payload: 'Dispara cronômetro: 3 dias úteis (ANPD) e 15 dias (Titular)',
    businessReason: 'Evita multas regulatórias e descumprimento de SLAs de resposta a incidentes.',
  },
  {
    from: 'Evidência no Anexo A',
    to: 'CIS & NIST & COBIT',
    payload: 'A mesma evidência conta nos controles equivalentes dos outros frameworks',
    businessReason: 'Suba o artefato uma única vez e comprove conformidade em 5 normas simultâneas.',
  },
  {
    from: 'Causa Raiz',
    to: 'Reincidência',
    payload: 'Compara com NCs anteriores e avisa se a causa raiz já falhou antes',
    businessReason: 'Impede planos de ação cosméticos que não tratam a raiz do problema.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'comunidade',
    name: 'Comunidade',
    tagline: 'REGISTRE o SGSI. Gratuita, sem prazo e sem teto de usuários — o time inteiro opera.',
    price: 'R$ 0',
    period: 'para sempre, sem renovação',
    frameworkScope: ['ISO/IEC 27001', 'LGPD'],
    features: [
      'Registro completo e estruturado do SGSI',
      'Usuários ilimitados — o time inteiro opera',
      'SSO corporativo via SAML ou OIDC (Keycloak embarcado)',
      'Matriz de Ativos Primários e de Suporte',
      'Declaração de Aplicabilidade (SOA)',
      'Relatório de Auditoria ISO 27001 na tela',
      'Sem limite de tempo ou bloqueio por expiração',
    ],
    limitations: [
      'Um único administrador (demais perfis sem restrição)',
      'Sem o motor semântico e sem o Analista IA local',
      'Sem leitura automática de evidências (OCR) nem correlação',
      'Sem análise de GAP consolidada',
      'Consulta aos logs de auditoria requer licença (a gravação nunca para)',
      'Sem exportação em CSV',
      'Escopo normativo: ISO 27001 e LGPD',
    ],
    ctaLabel: 'Começar Grátis Agora',
    ctaAction: 'community',
  },
  {
    id: 'essencial',
    name: 'Essencial',
    tagline: 'ANALISE o SGSI. O motor semântico e o Analista IA local leem a evidência e dizem o que fazer primeiro.',
    price: 'Consulte Condições',
    period: 'licença por versão — v2.x',
    isPopular: true,
    highlightBadge: 'MAIS ESCOLHIDO',
    frameworkScope: ['ISO/IEC 27001', 'CIS Controls v8', 'LGPD'],
    features: [
      'Tudo do plano Comunidade',
      'Múltiplos administradores e perfis com RBAC',
      'Motor semântico e Analista IA local (zero vazamento de dados)',
      'Leitura automática de evidências (OCR) e correlação com controles',
      'Consulta e exportação da trilha de auditoria (A.8.15)',
      'Análise de GAP consolidada e priorizada',
      'Módulo de Causa Raiz (5 Porquês / Ishikawa)',
      'Todos os 6 relatórios executivos e auditoria liberados',
      'Exportação irrestrita em CSV e PDF para auditoria externa',
      'Suporte técnico prioritário',
    ],
    ctaLabel: 'Solicitar Proposta Essencial',
    ctaAction: 'essential',
  },
  {
    id: 'avancado',
    name: 'Avançado',
    tagline: 'CORRELACIONE normas. Uma evidência cobre ISO, NIST, CIS e COBIT de uma vez, pelo grafo de herança.',
    price: 'Consulte Condições',
    period: 'licença por versão — v2.x',
    frameworkScope: ['ISO 27001', 'CIS v8', 'NIST CSF 2.0', 'COBIT 2019', 'ISO 42001 (IA)', 'LGPD'],
    features: [
      'Tudo do plano Essencial',
      'Todos os 6 frameworks normativos ativados',
      'Motor de Mapeamento Multi-Framework em Grafo',
      'Herança cruzada de evidências operacionais',
      'Módulo de Governança de Inteligência Artificial (ISO 42001)',

      'API de integração com ferramentas ITSM / SIEM / Jira',
    ],
    ctaLabel: 'Solicitar Demonstração Avançada',
    ctaAction: 'advanced',
  },
  {
    id: 'enterprise_mentoria',
    name: 'Enterprise + Mentoria de Auditores',
    tagline: 'A ferramenta Traçado + Acompanhamento por Auditores Líderes ISO 27001 Certificados.',
    price: 'Solução Sob Medida',
    period: 'licença inclusa nos 3 anos de mentoria',
    highlightBadge: 'SUITE + CONSULTORIA',
    frameworkScope: ['ISO 27001', 'CIS v8', 'NIST CSF 2.0', 'COBIT 2019', 'ISO 42001 (IA)', 'LGPD'],
    features: [
      'Licença do produto inclusa durante todo o ciclo de mentoria (3 anos)',
      'Ao fim do ciclo, migra para Essencial ou Avançado licenciado por versão',
      'Instância dedicada On-Premise / Appliance virtual na sua rede',
      'Acompanhamento direto por Auditores Líderes ISO 27001 / CISA / CRISC',
      'Condução de auditorias internas formais pré-certificação',
      'Elaboração e validação de Políticas e Normativos de Segurança',
      'Facilitação de Análise Crítica pela Direção (Cláusula 9.3)',
      'Simulação rigorosa de auditoria externa de certificação',
      'Suporte especializado conduzido pelos próprios auditores certificados',
    ],
    ctaLabel: 'Falar com Auditor Especialista',
    ctaAction: 'enterprise',
  },
];

export const DEMO_EVIDENCE_ITEMS: EvidenceDemoItem[] = [
  {
    id: 'ev-01',
    filename: 'Politica_Gestao_Acessos_ERP_v2.pdf',
    fileType: 'pdf',
    sourceAsset: 'ERP corporativo',
    detectedText: 'Seção 4.3: Todas as solicitações de criação e alteração de privilégios no ERP devem ser solicitadas via chamado ITSM formal com aprovação do gestor de centro de custos. Revisão trimestral de acessos críticos.',
    aiSuggestedControls: {
      iso27001: 'A.5.15 Controle de acesso & A.5.18 Direitos de acesso',
      cis: 'Controle 5.1 / 6.1 (Gestão de Contas e Acesso Privilegiado)',
      nist: 'PR.AC-1 / PR.AC-4 (Gerenciamento de Identidades)',
      lgpd: 'Art. 46 (Medidas de segurança técnica e administrativa)',
      confidence: 96,
      justification: 'O documento formaliza o fluxo de concessão por privilégio mínimo, revisão periódica e segregação de funções no ERP corporativo.',
    },
    humanStatus: 'approved',
  },
  {
    id: 'ev-02',
    filename: 'Relatorio_Backup_Diario_Out2026.pdf',
    fileType: 'pdf',
    sourceAsset: 'Banco de dados relacional — Produção',
    detectedText: 'Log de Execução: Backup Full executado com sucesso às 02:00:14. Criptografia AES-256 ativa. Cópia externa replicada para data center secundário (RPO alcançado: 15 minutos). Teste de restauração trimestral validado.',
    aiSuggestedControls: {
      iso27001: 'A.8.13 Cópia de segurança das informações',
      cis: 'Controle 11.1 / 11.2 (Recuperação de Dados e Backups)',
      nist: 'PR.IP-4 / RC.RP-1 (Processos de Backup e Recuperação)',
      confidence: 99,
      justification: 'Comprova retenção, criptografia e testes de integridade para atendimento direto ao RPO e RTO cadastrados na matriz de continuidade.',
    },
    humanStatus: 'approved',
  },
  {
    id: 'ev-03',
    filename: 'Config_Hardening_Firewall_Perimetro.docx',
    fileType: 'docx',
    sourceAsset: 'Infraestrutura de Rede e Perímetro',
    detectedText: 'Regra 14-DMZ: Bloqueio de protocolos inseguros (Telnet, HTTP puro). Ativação de IPS e inspeção profunda SSL com quarentena automática de IPs maliciosos.',
    aiSuggestedControls: {
      iso27001: 'A.8.20 Segurança de redes & A.8.23 Filtragem Web',
      cis: 'Controle 4.4 / 9.2 (Configuração Segura de Rede)',
      nist: 'PR.AC-5 / PR.PT-4 (Proteção de Perímetro)',
      confidence: 94,
      justification: 'Evidência operacional de segmentação de rede e proteção contra tráfego hostil.',
    },
    humanStatus: 'pending',
  },
];

/* =============================================================================
 * ATENÇÃO — CONTEÚDO FICTÍCIO, NÃO PUBLICADO.
 *
 * As três entradas abaixo são MODELOS DE REDAÇÃO. As pessoas, os cargos e as
 * empresas NÃO EXISTEM: foram inventados para desenhar o layout do bloco de
 * depoimentos. Nenhum cliente disse nada disso.
 *
 * Por isso a <TestimonialsSection /> está comentada em src/App.tsx e NADA daqui
 * aparece no site. Publicar depoimento inventado numa página de venda é endosso
 * fabricado — vedado pelo CDC, art. 37, §1º (publicidade enganosa) e pelo
 * Código do CONAR. Numa empresa que vende conformidade, seria também o pior
 * cartão de visitas possível.
 *
 * PARA ATIVAR: substituir por depoimentos reais, com autorização de uso por
 * escrito de cada pessoa e de cada empresa citada, e só então descomentar a
 * seção no App.tsx. Enquanto isso não acontecer, este bloco fica onde está,
 * servindo apenas de gabarito de tamanho e tom.
 * ========================================================================== */
export const TESTIMONIALS_DATA = [
  {
    author: 'Renato F. Albuquerque',
    role: 'CISO & DPO',
    company: 'Fintech de Meios de Pagamento (B3 / BACEN)',
    text: 'O Traçado resolveu a maior mentira do mercado de GRC: a planilha de 80 abas onde a equipe copia e cola a mesma evidência para ISO 27001, CIS e LGPD. Com o motor em grafo, preenchemos uma vez e temos auditoria contínua.',
    highlight: 'Auditoria de certificação ISO 27001 sem nenhuma Não Conformidade Maior.',
    score: '100% On-Premise',
  },
  {
    author: 'Dra. Mariana Vasconcellos',
    role: 'Diretora de Riscos e Compliance',
    company: 'Operadora de Saúde e Telemedicina',
    text: 'A IA local fez toda a diferença para o nosso comitê executivo e departamento jurídico. Nenhum prontuário ou política confidencial sai dos nossos servidores, mas recebemos o diagnóstico de lacunas em minutos.',
    highlight: 'Adequação cruzada ISO 27001 + LGPD em tempo recorde.',
    score: 'Zero Vazamento de Dados',
  },
  {
    author: 'Carlos Eduardo Silveira',
    role: 'Lead Auditor ISO/IEC 27001 & Consultor Master',
    company: 'Auditoria e Consultoria Especializada',
    text: 'Acompanhar clientes usando o Traçado é outro nível de produtividade. Quando pergunto "de onde veio esse controle?", a cadeia de causa e efeito me mostra instantaneamente a parte interessada, o ativo e o risco aprovado pela diretoria.',
    highlight: 'Rastreabilidade perfeita de ponta a ponta da norma.',
    score: 'Cadeia de Causa e Efeito',
  },
];

export const FAQ_DATA = [
  {
    question: 'Por que o Traçado afirma que o SGSI deve ser um Grafo e não um conjunto de telas ou planilhas?',
    answer: 'Na norma ISO 27001 e nos principais frameworks de segurança, nada existe de forma isolada. Uma exigência de cliente ou regulador gera um objetivo de negócio; esse objetivo depende de um ativo primário; esse ativo possui riscos; os riscos exigem controles; os controles exigem políticas e evidências; falhas geram incidentes que viram não conformidades com causa raiz e planos de ação. O Traçado estrutura tudo isso como um grafo vivo para que você nunca digite a mesma informação duas vezes e tenha rastreabilidade total perante qualquer auditor.',
  },
  {
    question: 'Como funciona a Inteligência Artificial local? Meus dados confidenciais saem da rede da empresa?',
    answer: 'NÃO. A inteligência artificial do Traçado roda como um motor embarcado diretamente no servidor da sua organização (on-premise ou appliance virtual). Nenhum documento, evidência ou registro de risco sai da sua infraestrutura. Além disso, a IA é determinística e baseada no princípio "A IA sugere, o especialista humano confirma" — sem alucinações e com auditoria completa de cada recomendação.',
  },
  {
    question: 'Como funciona a herança de evidências entre diferentes frameworks (ISO 27001, CIS, NIST, COBIT, LGPD)?',
    answer: 'A ISO 27001 (com sua Declaração de Aplicabilidade SOA) atua como o hub central. Ao cadastrar uma política ou evidência operacional para um controle da ISO (como Controle de Acesso A.5.15), o motor de correlação do Traçado mapeia e pontua automaticamente os controles correspondentes no CIS Controls v8, NIST CSF 2.0, COBIT 2019 e LGPD. Você comprova conformidade em múltiplos frameworks sem retrabalho.',
  },
  {
    question: 'O licenciamento é por assinatura mensal?',
    answer: 'Não. A licença é por VERSÃO do produto, não por tempo. Ao licenciar a v2, você recebe todas as correções e melhorias da linha — 2.1, 2.2 e seguintes — sem pagar de novo e sem prazo para usar. O conteúdo normativo fica congelado naquela versão: a v2 traz a ISO/IEC 27001:2022. Quando uma norma é revisada ou lançamos uma linha nova, ela vem como v3, com novo licenciamento. Você decide quando atualizar; nada deixa de funcionar enquanto isso.',
  },
  {
    question: 'O que acontece se a minha licença deixar de valer?',
    answer: 'Seus dados são seus. A instância entra em modo somente leitura e a exportação em CSV permanece liberada — vencimento nunca vira sequestro de dado. O banco roda no seu servidor e o backup é seu. Na Edição Comunidade, a plataforma é gratuita e perpétua, e nela a exportação em CSV faz parte do plano Essencial.',
  },
  {
    question: 'Como funciona o serviço de Acompanhamento por Auditores Certificados?',
    answer: 'Além da plataforma tecnológica, oferecemos o plano Enterprise com mentoria consultiva contínua realizada por Auditores Líderes ISO/IEC 27001, CISA e DPOs experientes. Eles realizam diagnósticos periódicos, conduzem suas auditorias internas obrigatórias (Cláusula 9.2), treinam sua equipe e garantem que sua organização chegue preparada e segura para a certificação oficial com órgãos certificadores (como BSI, Bureau Veritas, DNV, TÜV, etc.).',
  },
  {
    question: 'Quais são os requisitos de instalação para rodar o Traçado?',
    answer: 'O Traçado pode ser executado em qualquer servidor Linux (Ubuntu/Debian/RHEL), Docker, Kubernetes ou como máquina virtual pré-configurada (OVA). Possui suporte a autenticação corporativa Single Sign-On (Keycloak, Azure AD / Entra ID, Okta via SAML/OIDC) e banco de dados isolado.',
  },
];
