<template>
  <div id="app">
    <div class="herder">
      <input class="inp" type="text" v-model="vule" placeholder="请输入内容" @change="aas(vule)">

    </div>
  <div class="main">

       <router-view/>
  </div>

    <div id="nav">
      <router-link to="/home">首页</router-link> 
      <router-link to="/my">我的</router-link>
       <router-link to="/find">发现</router-link>
    </div>
 
  </div>
</template>
  

<script>
export default {
  data(){
    return {
      vule:""
    }
  },
  methods: {
    aas(vule){
      this.$store.commit("seta",vule)
    }
  },
}
</script>

<style lang="scss">

  *{
    padding: 0%;
    margin: 0%;
    text-decoration: none
  }
  html,body, #root,#app{
    width: 100%;
    height: 100%;
  }
 #app{
   display: flex;
    flex-direction: column;
 }
.herder{
  width: 100%;
  height: 7%;
  border-bottom: solid 1px #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center
}
.main{
  flex: 1;
  padding: 15px;
  box-sizing: border-box
}
#nav{
  width: 100%;
  height: 7%;
  border-top: solid 1px #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center
}
.inp{
  border: solid 1px #c7c5c5;
  width: 80%;
  height: 80%;
  border-radius: 15px;
}
</style>
