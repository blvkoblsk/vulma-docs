export default {
  basic: 'Básico',
  browser_language: 'Idioma do navegador',
  bulma_color: 'Uma das cores do Bulma.',
  bulma_size: '"small", "medium" ou "large"',
  colors: 'Cores',
  components: 'Componentes',
  containers: 'Containers',
  data: 'Dados',
  default_value: 'Valor Padrão',
  description: 'Descrição',
  events: 'Eventos',
  example: 'Exemplo',
  field_label: 'Label do campo.',
  forms: 'Formulários',
  group_property: 'Propriedade usada para agrupar os registros. Ex: "perfil.marca".',
  href: 'Url usada para redirecionar.',
  icon_class: 'Classe do ícone (se estiver usando font-awesome, a classe "fa" não é necessária, use apenas "fa-github").',
  layout: 'Layout',
  methods: 'Métodos',
  name: 'Nome',
  open_new_tab: 'Abre a rota especificada numa aba nova.',
  parameters: 'Parâmetros',
  placeholder: 'Placeholder.',
  properties: 'Propriedades',
  read_only: 'Determina se o usuário pode editar o valor.',
  return_description: 'Descrição do Retorno',
  return_type: 'Tipo de Retorno',
  route: 'Rota usada no vue-router.',
  setup: 'Configuração',
  source_array: 'Vetor fonte: Ex: [{ chave: 1, perfil: { nome: "Hulk" } }, { chave: 2, perfil: { nome: "Thor" } }].',
  start: 'Início',
  tags: 'Tags',
  text_property: 'Propriedade texto. Ex: "perfil.nome". Se não especificado usará a propriedade valor.',
  title: 'Título',
  today: 'Hoje',
  trigger: 'Gatilho',
  type: 'Tipo',
  value_property: 'Propriedade valor. Ex: "chave". Se não especificado retornará o objeto inteiro.',
  view_demo_in_new_tab: 'Ver a demo em nova aba',
  docs: {
    button: {
      events: {
        'click': {
          trigger: 'O botão foi clicado'
        }
      }
    },
    datepicker: {
      props: {
        'locale': 'Códigos da localização (ISO 639-1) e região (ISO 3166-1). Ex: en, pt, en-US, pt-BR.',
        'first-day-of-week': 'Dia da semana para mostrar na primeira coluna do calendário (0 é Domingo).',
        'highlight-weekend': 'Os dias de fim de semana devem ser destacados?',
        'min': {
          default: 'Hoje - 50 anos',
          description: 'Primeira data selecionável.'
        },
        'max': {
          default: 'Hoje + 50 anos',
          description: 'Última data selecionável.'
        },
        'auto-select-today': 'A data de hoje deve ser selecionada quando clicar em "@:today"? Quando false irá posicionar o calendário no mês atual.',
        'show-close-button': 'Mostrar o botão de fechar? Quando false irá obrigar o usuário a selecionar uma data.',
        'i18n': 'Ex: { today: "@:today" }.'
      }
    },
    drawer: {
      'vulma-drawer': {
        methods: {
          'open': 'Abre o Drawer',
          'close': 'Fecha o Drawer',
          'toggle': 'Alerna o Drawer'
        }
      },
      'vulma-drawerheader': {
        props: {
          'simple': 'Deve mostrar um cabeçalho simples?',
          'title': 'Título (disponível para cabeçalho simples).',
          'avatar': 'Url do avatar.',
          'name': 'Nome do perfil.',
          'email': 'E-mail do perfil.',
          'color': 'Cor de fundo do cabeçalho. @:bulma_color'
        }
      }
    },
    input: {
      props: {
        'type': 'Um dos tipos de input do html.',
        'icon-left': 'Ícone da esquerda. @:icon_class',
        'icon-right': 'Ícone da direita. @:icon_class'
      },
      events: {
        'focus': {
          trigger: 'O input recebeu foco'
        }
      }
    },
    navbar: {
      'example': {
        sidebar_example: 'Para um exemplo do menu lateral veja a ',
        drawer_link: 'documentação do Drawer'
      },
      'vulma-navbar': {
        props: {
          'show-menu-button': 'Mostrar o botão de menu?',
          'brand-name': 'Marca.',
          'brand-logo': 'Url do logotipo.',
          'show-shadow': 'Mostrar sombra do navbar?',
          'fixed': 'A navbar deve ficar fixa no topo?'
        },
        events: {
          'menu-clicked': {
            trigger: 'O botão de menu foi clicado'
          }
        }
      },
      'vulma-navitem': {
        props: {
          'is-tab': 'É uma aba?'
        }
      }
    },
    select: {
      props: {
        'max-selected': '1 para seleção simples, 0 pra seleção infinita, >1 para um número limitado de seleções.',
        'max-text-items': 'O texto dos itens selecionados serão mostrados na caixa de entrada até que o número de seleções seja menor ou igual a esse valor, caso contrário será usado o texto especificado em selected-text.',
        'selected-text': 'Texto usado quando mais que max-text-items forem selecionados.',
        'enable-search': 'Deve permitir pesquisa no texto dos registros?'
      }
    },
    tabs: {
      'vulma-tabs': {
        props: {
          'hide-one-tab': 'Oculta abas quando existir apenas uma aba.'
        },
        methods: {
          'selectTab': {
            description: 'Seleciona uma aba específica.',
            parameters: 'index: Number (índice da aba base-zero)'
          }
        },
        events: {
          'tab-selected': {
            trigger: 'Uma das abas foi selecionada',
            return_description: 'Índice da aba (base zero)'
          }
        }
      }
    }
  }
}
