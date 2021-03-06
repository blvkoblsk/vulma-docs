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
  guide: 'Guia',
  href: 'Url usada para redirecionar.',
  i18n: 'Mensagens localizadas.',
  icon_class: 'Classe do ícone (se estiver usando font-awesome, a classe "fa" não é necessária, use apenas "fa-github").',
  layout: 'Layout',
  locale: 'Códigos da localização (ISO 639-1) e região (ISO 3166-1). Ex: en, pt, en-US, pt-BR.',
  methods: 'Métodos',
  name: 'Nome',
  open_new_tab: 'Abre a rota especificada numa aba nova.',
  parameters: 'Parâmetros',
  placeholder: 'Placeholder.',
  possible_values: 'Os valores possíveis são:',
  properties: 'Propriedades',
  read_only: 'Determina se o usuário pode editar o valor.',
  return_description: 'Descrição do Retorno',
  return_type: 'Tipo de Retorno',
  route: 'Rota usada no vue-router.',
  setup: 'Configuração',
  source: 'Fonte',
  source_array: 'Vetor fonte: Ex: [{ chave: 1, perfil: { nome: "Hulk" } }, { chave: 2, perfil: { nome: "Thor" } }].',
  tags: 'Tags',
  text_property: 'Propriedade texto. Ex: "perfil.nome". Se não especificado usará a propriedade valor.',
  title: 'Título',
  today: 'Hoje',
  trigger: 'Gatilho',
  type: 'Tipo',
  value_property: 'Propriedade valor. Ex: "chave". Se não especificado retornará o objeto inteiro.',
  view_demo_in_new_tab: 'Ver a demo em nova aba',
  home_page: {
    vue_ui_components: 'Components de UI do Vue baseados no Bulma'
  },
  setup_instructions: {
    prerequisites: 'Pré-requisitos',
    install_vuecli: 'Instale o vue-cli',
    create_project: 'Crie o projeto',
    using_webpack_template: 'Usando o template webpack',
    add_vulma_to_project: 'Inclua Vulma no projeto',
    install: 'Instale',
    change_mainjs: 'Altere src/main.js incluindo essas linhas:',
    temporary_step: '* esse passo é temporário (somente na versão Alpha)',
    include_vulma_babel_loader: 'Inclua a pasta vulma no Babel loader (build/webpack.base.conf.js)',
    test_it: 'Teste...',
    done: 'Pronto!'
  },
  docs: {
    avatar: {
      props: {
        'size-px': 'Tamanho em pixels. @:possible_values 16, 24, 32, 48, 64, 96, 128.',
        'format': 'Formato da borda da imagem. @:possible_values "circle", "rounded", "square".',
        'animate': 'O avatar deve ser animado ao passar o mouse sobre?'
      }
    },
    button: {
      events: {
        'click': {
          trigger: 'O botão foi clicado'
        }
      }
    },
    collapsible: {
      'vulma-collapsible': {
        props: {
          'expandable': 'Vários collapsible-item podem estar abertos ao mesmo tempo?'
        }
      },
      'vulma-collapsible-item': {
        props: {
          'start-opened': 'Esse collapsible-item deve estar aberto por padrão?'
        }
      }
    },
    datatable: {
      props: {
        'columns': 'Vetor de colunas para mostrar.',
        'columns_prop': 'Propriedade da coluna. Ex: "perfil.nome".',
        'columns_type': 'Tipo da coluna. @:possible_values String, Boolean, Number, Date.',
        'columns_decimals': 'Casas decimais da coluna (pode ser usado quando columns.type = Number).',
        'columns_wrapper': 'Função wrapper útil para conversão de unidades. Ex: milhas => milhas * 1.60934 (convertendo para km).',
        'columns_label': 'Label da coluna. Quando não especificada usará o nome da propriedade da coluna.',
        'columns_fixedLeft': 'A coluna deve ser fixada à esquerda?',
        'columns_fixedRight': 'A coluna deve ser fixada à direita?',
        'columns_textAlign': 'O valor padrão depende do tipo da coluna (String: "left", Boolean/Date: "center", Number: "right").',
        'columns_sort': 'A coluna pode ser ordenada?',
        'columns_defaultSort': 'A coluna deve ser ordenada por padrão?',
        'columns_filter': 'A coluna pode ser filtrada?',
        'columns_group': 'Como as linhas podem ser agrupadas por múltiplas colunas, especifique um número (base 1) como ordem do grupo.',
        'columns_slot': 'Nome do slot para usar no template customizado. Quando não especificado, usará o nome da propriedade da coluna. Ex: <template slot="perfil.imagem" scope="prop">{{prop.data}}</template>.',
        'columns-selector': 'Permitir ao usuário selecionar quais colunas estão visíveis?',
        'condensed': 'A tabela deve ser condensada?',
        'groups-expanded': 'Os grupos devem ser expandidos inicialmente?',
        'hide-group-columns': 'As colunas usadas nos grupos devem ser ocultas?',
        'sort': 'Habilitar ordenação por padrão em todas colunas?',
        'search': 'Mostrar caixa de pesquisa?',
        'filter': 'Habilitar filtro por padrão em todas colunas?',
        'pagination': 'Opções de paginação.',
        'pagination_enabled': 'A paginação deve ser habilitada?',
        'pagination_pageSize': 'Tamanho de página inicial.',
        'pagination_pageSizes': 'Opções de tamanho de página disponíveis para o usuário.',
        'pagination_canShowAll': 'As opções de tamanho de página devem tem uma opção "Mostrar Todos"?',
        'excel': 'Permitir ao usuário exportar a tabela para Excel?'
      },
      events: {
        'row-click': {
          trigger: 'Uma linha foi clicada.',
          return_description: 'objeto da linha'
        }
      }
    },
    datepicker: {
      props: {
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
    highlight: {
      props: {
        'text': 'Texto onde o termo será destacado.',
        'term': 'Termo para destacar no texto.',
        'ignore-case': 'Deve ignorar maísculas e minúsculas? Se true, então "A" será igual a "a".',
        'ignore-accents': 'Deve ignorar caracteres especiais? Se true, então "ç" será igual a "c" e "á" será igual a "a".'
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
    modal: {
      props: {
        'is-dialog': 'O modal é um dialog? Isso permite especificar as propriedades icon e title.',
        'close-on-click-outside': 'O modal deve ser fechado ao clicar fora dele?',
        'show-close-button': 'Deve-se mostrar o botão de fechar?'
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
