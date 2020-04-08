<template>
  <v-col cols="6">
    <v-card class="pa-2" outlined tile>
      {{track.artist_name}} - {{track.track_name}}
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    track: Object
  }
}
</script>