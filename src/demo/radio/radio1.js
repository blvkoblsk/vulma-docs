export default {
  name: 'demo-radio1',
  data() {
    return {
      selected1: 3,
      selected2: 'Captain America',
      radioSource1: [
        { hero: { name: 'Hulk' }, details: { hanking: 1 } },
        { hero: { name: 'Spider-man' }, details: { hanking: 2 } },
        { hero: { name: 'Iron-man' }, details: { hanking: 3 } },
        { hero: { name: 'Captain America' }, details: { hanking: 4 } },
        { hero: { name: 'Thor' }, details: { hanking: 5 } }
      ],
      radioSource2: [
        'Hulk',
        'Spider-man',
        'Iron-man',
        'Captain America',
        'Thor'
      ]
    }
  }
}
