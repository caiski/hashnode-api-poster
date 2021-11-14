<template>
  <v-app>
    <v-app-bar app flat color="blue accent-4" v-if="isLoggedIn">
      <v-spacer />
      <v-btn outlined color="white" @click="logout">
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
