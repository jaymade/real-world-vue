<template>
  <div class="event-list">
    <h1>Events List</h1>
    <EventCard />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard
  }
}
</script>