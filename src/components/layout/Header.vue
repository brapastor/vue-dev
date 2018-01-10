<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 📻 platzi music
          .nav-right.nav-menu
            router-link.nav-item(:to="{name:'search'}") Buscar
            router-link.nav-item(to="about") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title platzi music
        h2.subtitle canciones que estan buenas
        pm-player

</template>

<script>
  import PmPlayer from '@/components/Player.vue'
  export default {
    components: { PmPlayer }
  }
</script>
