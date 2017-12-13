<template lang="pug">
  #app
    h1 {{msg}}
    p {{1+1}}
    p {{'hola' + ' Mundillo'}}
    p {{person.name}}
    p {{person.name.toUpperCase()}}
    p {{JSON.stringify(person)}}

</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Hola vue!',
        person: {
          name: 'brayan'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/main";
</style>
