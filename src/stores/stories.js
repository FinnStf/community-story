import { defineStore } from 'pinia'

export const useStoryStore = defineStore('stories', {
  state: () => ({
    data: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchData() {
      this.loading = true
      try {
        const response = await fetch('https://community-story-backend.onrender.com/story-collection')
        this.data = await response.json()
        this.error = null
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },

  getters: {
    getData() {
      return this.data
    },
    getLoadingState() {
      return this.loading
    },
    getErrorState() {
      return this.error
    },
  },
})
