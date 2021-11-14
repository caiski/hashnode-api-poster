<template>
  <v-container fluid class="fill-height blue accent-4">
    <v-row align="center">
      <v-col sm="6" offset-sm="3" md="4" offset-md="4">
        <login-form />    
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: {
    LoginForm,
  },
}
</script>