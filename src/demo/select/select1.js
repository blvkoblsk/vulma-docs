export default {
  name: 'demo-select1',
  data() {
    return {
      value1: 1,
      value2: [5, 6],
      heroes: [
        {
          profile: { name: 'Hulk', id: 1, image: '/static/profile/hulk.jpg' },
          brand: { name: 'Marvel' }
        },
        {
          profile: { name: 'Batman', id: 2, image: '/static/profile/batman.jpg' },
          brand: { name: 'DC Comics' }
        },
        {
          profile: { name: 'Thor', id: 3, image: '/static/profile/thor.jpg' },
          brand: { name: 'Marvel' }
        },
        {
          profile: { name: 'Wonder Woman', id: 4, image: '/static/profile/wonder_woman.png' },
          brand: { name: 'DC Comics' }
        },
        {
          profile: { name: 'Spiderman', id: 5, image: '/static/profile/spiderman.jpg' },
          brand: { name: 'Marvel' }
        },
        {
          profile: { name: 'Flash', id: 6, image: '/static/profile/flash.jpg' },
          brand: { name: 'DC Comics' }
        },
        {
          profile: { name: 'Captain America', id: 7, image: '/static/profile/captain_america.jpeg' },
          brand: { name: 'Marvel' }
        },
        {
          profile: { name: 'Aquaman', id: 8, image: '/static/profile/aquaman.jpg' },
          brand: { name: 'DC Comics' }
        },
        {
          profile: { name: 'Iron Man', id: 9, image: '/static/profile/iron_man.jpg' },
          brand: { name: 'Marvel' }
        },
        {
          profile: { name: 'Cyborg', id: 10, image: '/static/profile/cyborg.jpg' },
          brand: { name: 'DC Comics' }
        }
      ]
    }
  }
}
