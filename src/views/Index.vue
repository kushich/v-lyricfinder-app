<template>
  <v-container>
    <Search />
    <TrackList />
  </v-container>
</template>

<script>
import Search from '@/components/Search.vue'
import TrackList from '@/components/TrackList.vue'
export default {
  components: {
    Search,
    TrackList,
  },
}
</script>
