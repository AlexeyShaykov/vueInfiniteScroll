<template>
  <div class="card-container">
    <div class="card-container__header">
      My infinite users list
    </div>
    <div 
      ref="srolledList" 
      class="srolled-list"
      @scroll="handleDebouncedScroll"
    >
      <ul v-if="users.length">
        <Card 
          v-for="(user, index) in users"
          :key="index" 
          :user="user"
        />
      </ul>
      <Loader v-if="loading" />
    </div>
  </div>
</template>

<script>
/**
   * @displayName App
*/
import getUsers from './service';
import Card  from './components/Card';
import Loader  from './components/Loader';

export default {
  components: {
    Card,
    Loader
  },
  data() {
    return {
      users: [],
      loading: true,
    }
  },
  created () {
    const debounce = (a,b=250,c)=>(...d)=>clearTimeout(c,c=setTimeout(a,b,...d))
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
  },
  mounted () {
    this.loadUsers();
  },
  methods: {
	/**
       * Handle on scroll event if sroll on list bottom - get new data
    */
    handleScroll() {
       if (this.$refs.srolledList.scrollTop + this.$refs.srolledList.clientHeight >= this.$refs.srolledList.scrollHeight) {
        this.loadUsers();
      }
	},
	/**
       * Load new users 
    */
    async loadUsers() {
      this.loading = true;
      const { results = [] } = await getUsers();
      this.loading = false;
      this.users = [...this.users, ...results];
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #f1f9f9;
  & .card-container {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;

    &__header {
        margin: 20px 0;
        font-size: 22px;
        color: #333;
    }

    & .srolled-list {  
      margin: 0 auto;
      padding: 10px 80px;
      background-color: #fff;
      max-height: 543px;
      overflow-y: scroll;
      border-radius: 8px;
      text-align: left;

        & ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
    }
  }
}

@media (max-width: 500px) {
    body {
      & .card-container {
        max-width: none;
        margin: 0;
        width: 100%;

        & .srolled-list {
          padding: 10px 16px;
          max-height: 100vh;
        }
      }
    } 
}

 
</style>