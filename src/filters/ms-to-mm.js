const msTomm = {}

function convertMstoMm (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000 / 1000).toFixed(0))
  return `${min}:${(sec < 10) ? '0' + sec : sec}`
}

msTomm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return convertMstoMm(val)
  })
}

export default msTomm
