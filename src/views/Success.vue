<template>
  <v-container fluid class="fill-height blue accent-4">
    <v-row align="center">
      <v-col sm="6" offset-sm="3" md="4" offset-md="4">
        <v-card>
          <v-card-title>Story successfully created</v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn outlined color="blue accent-4" @click="goHome">
              Write another story
            </v-btn>
            <v-btn color="blue accent-4" class="white--text" @click="logout">
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' })
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>