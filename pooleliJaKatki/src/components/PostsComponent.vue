<template>
    <div v-for="post in this.allPosts" :key="post.id">
      <!-- Render your post here -->
      <h3>{{ post.author }}</h3>
      <p>{{ post.a }}</p>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'PostsComponent',
    computed: {
    ...mapGetters(['allPosts'])
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }

}


  
</script>



<style scoped>
  
</style>
  