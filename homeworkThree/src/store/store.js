import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    posts: []
  },
  getters: {
    allPosts: (state) => state.posts
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get('/things.json');
        commit('setPosts', response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts)
  }
});