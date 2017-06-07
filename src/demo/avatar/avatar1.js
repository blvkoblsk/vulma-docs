export default {
  name: 'demo-avatar1',
  data() {
    return {
      size: {
        value: 48,
        options: [16, 24, 32, 48, 64, 96, 128]
      },
      format: {
        value: 'circle',
        options: ['circle', 'rounded', 'square']
      },
      animate: true
    }
  }
}
