<template>
  <!-- <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </div>
  </div> -->

  <div class="container">
    <search/>
    <users-main/>
  </div>
</template>
<script>
import axios from 'axios'
import search from './components/Search'
import Main from './components/Main'

export default {
  components : {
    search,
    usersMain: Main  
  },
 data () {
   return {
     repoUrl: '',
     repoName: ''
   }
 },

  //mounted () {
     // 发ajax 请求获取数据
    // const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    //  this.$http.get(url).then(
    //    response => {
    //      //success rellback
    //      const result =  response.data
    //      //get most stars repo
    //      const mostRepo = result.items[0]
    //      this.repoUrl = mostRepo.html_url
    //      this.repoName = mostRepo.name
    //    },
    //    reponse => {
    //      alert('请求失败')
    //    }
    //  )
    //axios 发送ajax请求
 // axios.get(url).then(
  //    response => {
         //success rellback
 //        const result =  response.data
         //get most stars repo
   //      const mostRepo = result.items[0]
   //      this.repoUrl = mostRepo.html_url
   //      this.repoName = mostRepo.name
  //    }).catch(error => {
//alert('请求失败')
 //     })
  // }
}
  

</script>

<style>

</style>