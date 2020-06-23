<template>
      <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="输入你需要搜索的名字" v-model="searchName"/>
        <button @click="search">Search</button>
      </div>
    </section>
</template> 
<script>
export default {
  data () {
    return {
      searchName: ''
    }
  },

  methods: {
    search () {
      const searchName = this.searchName.trim()
      if(searchName) {
        PubSub.publish('search',searchName)
      }
    }
    

  }
}
</script>
<style>

</style>
