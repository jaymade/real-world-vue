<template>
  <div class="event-list">
    <h1>Events List</h1>
    <router-link :to="{ name: 'event-show', params: { id: '1'} }">Event #1</router-link>
  </div>
</template>