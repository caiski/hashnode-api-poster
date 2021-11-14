<template>
  <validation-observer v-slot="{ invalid }">
    <v-form @submit.prevent="submit">
      <v-card>
        <v-card-text>
          <validation-provider v-slot="{ errors }" name="API Key" rules="required">
            <v-text-field v-model="apiKey" label="API Key" :error-messages="errors" required />
          </validation-provider>

          <validation-provider v-slot="{ errors }" name="Publication ID" rules="required">
            <v-text-field v-model="publicationId" label="Publication ID" :error-messages="errors" required />
          </validation-provider>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" block :disabled="invalid" outlined color="blue accent-4">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </validation-observer>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

extend('required', { ...required })

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      apiKey: '',
      publicationId: '',
    }
  },
  methods: {
    submit() {
      let loginRequest = { apiKey: this.apiKey, publicationId: this.publicationId }
      this.$store.dispatch('login', loginRequest)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script> 