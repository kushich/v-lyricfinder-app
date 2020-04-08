<template>
  <v-row>
    <p v-if="!topTracks">Loading</p>
    <Track
      v-else
      v-for="track in topTracks"
      :key="track.track_id"
      :track="track.track"
    />
  </v-row>
</template>

<script>
import Track from '@/components/Track.vue'
export default {
  components: {
    Track,
  },
  computed: {
    topTracks() {
      console.log(this.$store.getters.topTracks)

      return this.$store.getters.topTracks
    },
  },
  mounted() {
    this.$store.dispatch('fetchTopTracks')
  },
}
</script>
