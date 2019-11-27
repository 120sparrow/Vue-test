<template>
  <div id="app">
    <post-form></post-form>
    <h1>{{ postCount }}</h1>
    <input type="number" @input="addPost" v-model="count">
   <div class="posts" v-for="post in validPost" :key="post.id">
     <h2>{{ post.title }}</h2>
     <span>{{ post.id }}</span>
     <p>{{ post.body }}</p>
   </div>
    <div>
      <b-button variant="primary">Primary</b-button>
      <b-button variant="secondary">Secondary</b-button>
      <b-button variant="success">Success</b-button>
      <b-button variant="danger">Danger</b-button>
      <b-button variant="warning">Warning</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="light">Light</b-button>
      <b-button variant="dark">Dark</b-button>
    </div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from './components/PostForm'

export default {
  name: 'app',
  data () {
    return {
      count: ''
    }
  },
  computed: mapGetters(['validPost', 'postCount']),
  methods: {
    ...mapActions(['fetchPsots']),
    addPost () {
      this.fetchPsots(this.count)
    }
  },
  components: {
    PostForm
  },
  async mounted () {
    this.fetchPsots(this.count)
  }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 600px;
  display: flex;
  flex-direction: column;
}
.posts {
  border: 1px solid blue;
  padding: 20px;
  margin: 60px auto;
}
</style>
