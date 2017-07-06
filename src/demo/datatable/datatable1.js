export default {
  name: 'demo-datatable1',
  data() {
    return {
      columns: [
        { prop: 'id', fixedLeft: true, type: Number },
        { prop: 'profile.image', label: '', sort: false, filter: false, fixedLeft: true },
        { prop: 'profile.name', label: 'Name', defaultSort: true },
        { prop: 'profile.realName', label: 'Real Name' },
        { prop: 'brand', label: 'Brand', group: 1, textAlign: 'center' },
        { prop: 'mask', label: 'Wear a mask', type: Boolean },
        { prop: 'profile.weight', label: 'Weight (kg)', type: Number, decimals: 2, wrapper: val => val * 0.453592 },
        { prop: 'firstAppearance', label: 'First Appearance', type: Date },
        { prop: 'site', label: '', sort: false, filter: false, fixedRight: true },
        { prop: 'id', label: '', sort: false, filter: false, fixedRight: true, slot: 'buttons' }
      ],
      pagination: {
        enabled: true,
        pageSize: 2,
        pageSizes: [2, 4, 6, 8, 10]
      },
      i18n: {
        noData: 'Please, provide some data!',
        noResults: 'No data were found with current filters.',
        filters: {
          add: 'Add Filter',
          currentFilters: 'Filtros Atuais',
          conditions: {
            all: 'AND',
            any: 'OR'
          },
          boolean: {
            true: 'Yes',
            false: 'No'
          }
        },
        pagination: {
          showAll: 'All'
        }
      },
      heroes: [
        {
          id: 1,
          profile: { name: 'Hulk', realName: 'Robert Bruce Banner', image: '/static/profile/hulk.jpg', weight: 1150 },
          brand: 'Marvel',
          mask: false,
          firstAppearance: new Date(1962, 0, 1),
          site: 'http://marvel.com/characters/25/hulk'
        },
        {
          id: 2,
          profile: { name: 'Batman', realName: 'Bruce Wayne', image: '/static/profile/batman.jpg', weight: 210 },
          brand: 'DC Comics',
          mask: true,
          firstAppearance: new Date(1939, 0, 1),
          site: 'http://www.dccomics.com/characters/batman'
        },
        {
          id: 3,
          profile: { name: 'Thor', realName: 'Thor Odinson', image: '/static/profile/thor.jpg', weight: 640 },
          brand: 'Marvel',
          mask: false,
          firstAppearance: new Date(1951, 0, 1),
          site: 'http://marvel.com/characters/60/thor'
        },
        {
          id: 4,
          profile: { name: 'Wonder Woman', realName: 'Diana', image: '/static/profile/wonder_woman.png', weight: 130 },
          brand: 'DC Comics',
          mask: false,
          firstAppearance: new Date(1941, 0, 1),
          site: 'http://www.dccomics.com/characters/wonder-woman'
        },
        {
          id: 5,
          profile: { name: 'Spider-man', realName: 'Peter Benjamin Parker', image: '/static/profile/spiderman.jpg', weight: 167 },
          brand: 'Marvel',
          mask: true,
          firstAppearance: new Date(1962, 0, 1),
          site: 'http://marvel.com/characters/54/spider-man'
        },
        {
          id: 6,
          profile: { name: 'Flash', realName: 'Barry Allen', image: '/static/profile/flash.jpg', weight: 179 },
          brand: 'DC Comics',
          mask: true,
          firstAppearance: new Date(1940, 0, 1),
          site: 'http://www.dccomics.com/characters/the-flash'
        },
        {
          id: 7,
          profile: { name: 'Captain America', realName: 'Steven "Steve" Rogers', image: '/static/profile/captain_america.jpeg', weight: 220 },
          brand: 'Marvel',
          mask: true,
          firstAppearance: new Date(1941, 0, 1),
          site: 'http://marvel.com/characters/8/captain_america'
        },
        {
          id: 8,
          profile: { name: 'Aquaman', realName: 'Arthur Curry', image: '/static/profile/aquaman.jpg', weight: 325 },
          brand: 'DC Comics',
          mask: false,
          firstAppearance: new Date(1941, 0, 1),
          site: 'http://www.dccomics.com/characters/aquaman'
        },
        {
          id: 9,
          profile: { name: 'Iron Man', realName: 'Anthony Edward "Tony" Stark', image: '/static/profile/iron_man.jpg', weight: 425 },
          brand: 'Marvel',
          mask: true,
          firstAppearance: new Date(1963, 0, 1),
          site: 'http://marvel.com/characters/29/iron_man'
        },
        {
          id: 10,
          profile: { name: 'Cyborg', realName: 'Victor "Vic" Stone', image: '/static/profile/cyborg.jpg', weight: 385 },
          brand: 'DC Comics',
          mask: true,
          firstAppearance: new Date(1980, 0, 1),
          site: 'http://www.dccomics.com/characters/cyborg'
        }
      ]
    }
  },
  methods: {
    doSomething(id) {
      alert('Doing something with id ' + id)
    }
  }
}
