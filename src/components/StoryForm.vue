<template>
  <validation-observer v-slot="{ invalid }">
    <v-form @submit.prevent="submit">
      <validation-provider v-slot="{ errors }" name="Title" rules="required">
        <v-text-field v-model="title" label="Title" :error-messages="errors" required />
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="Content" rules="required">
        <v-textarea v-model="content" label="Content" :error-messages="errors" rows="20" auto-grow required />
      </validation-provider>

      <v-btn type="submit" block outlined color="blue accent-4" :disabled="invalid" :loading="isSubmitting"> 
        Submit
      </v-btn>
      <small class="red--text" v-if="errors">{{ errors }}</small>
    </v-form>
  </validation-observer>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import hashnodeApi from '@/hashnode-api'

extend('required', { ...required })

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      title: '',
      content: '',
      isSubmitting: false,
      errors: '',
    }
  },
  methods: {
    async submit() {
      this.errors = ''
      this.isSubmitting = true

      try {
        await hashnodeApi.createStory(this.title, this.content)
        this.$router.push({ name: 'Success' })
      } catch (err) {
        this.errors = err
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>