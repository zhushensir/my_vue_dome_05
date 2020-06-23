<template>
  <div class="row">
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">loading</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    
      <div class="card" v-for="(user,index) in users" :key="index">
        <a href="user.url" target="_blank">
          <img :src="user.avarar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>

    </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
export default {
  // 定义四个状态
  data () {
    return {
      firstView: true,
      loading: false,
      users: null,  //[{url: '',name:'',avatar_url:''}]
      errorMsg: ''
    }
  },
  
  mounted () {
    //订阅搜索的消息
      PubSub.subscribe('search',(msg,searchName) => {
        //需要进行通信
        const url = `https://api.github.com/search/users?q=${searchName}`
        //更新状态（请求中）
        this.firstView = false
        this.loading = true
        //发ajax请求
        axios.get(url).then(response =>{
          const result = response.data
          const users = result.items.map(item => ({
            url: item.html_url,
            avarar_url: item.avatar_url,
            name: item.login
          }))
          this.loading = false
          this.users = users
        }).catch(error =>{
          this.loading = false
          this.errorMsg='请求失败'
        }) 
      })

  }
}
</script>
<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>