<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 📻 platzi music
          .nav-right.nav-menu
            div
              a.nav.item(@click="selectLang('en')") 🇺🇸 &nbsp;
              a.nav.item(@click="selectLang('es')") 🇪🇸
            router-link.nav-item(to="search") {{ $t('search') }}
            router-link.nav-item(to="about") {{ $t('about') }}

    .hero-body
      .container.has-text-centered
        h1.title platzi music
        h2.subtitle canciones que estan buenas
        pm-player

</template>

<script>
  import PmPlayer from '@/components/Player.vue'
  export default {
    components: { PmPlayer },

    methods: {
      selectLang (lang) {
        this.$i18n.locale = lang
      }
    }
  }
</script>
