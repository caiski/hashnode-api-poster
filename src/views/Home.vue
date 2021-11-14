<template>
  <v-container>
    <v-row>
      <v-col>
        <story-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StoryForm from '@/components/StoryForm'

export default {
  components: {
    StoryForm,
  },
}
</script>