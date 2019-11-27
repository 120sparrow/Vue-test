export default {
  state: {
    posts: []
  },
  actions: {
    async fetchPsots (ctx, limit = 3) {
      console.log(limit)
      const posts = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      ).then((res) => res.json())
      ctx.commit('updatePosts', posts)
    }
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts
    },
    cretePost (state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  getters: {
    validPost (state) {
      return state.posts.filter(p => {
        return p.body && p.title
      })
    },
    allPosts (state) {
      return state.posts
    },
    postCount (state, getters) {
      return getters.validPost.length
    }
  }
}
