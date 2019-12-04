<template>
  <div class="home">
    <Item_main :list="list" ></Item_main>
        {{this.$store.state.value}}
  </div>
</template>

<script>
// @ is an alias to /src
import Item_main from "../components/Item_main"
export default {
  data(){
    return {
      list:[
        {
          img:"http://img1.imgtn.bdimg.com/it/u=134363528,2871602849&fm=15&gp=0.jpg",
          name:"李华",
          tit:"大萨达萨达萨达我去",
          time:"10.30"
        },
          {
          img:"http://img1.imgtn.bdimg.com/it/u=134363528,2871602849&fm=15&gp=0.jpg",
          name:"小米",
          tit:"的撒大大撒旦哇哇",
          time:"10.30"
        },
          {
          img:"http://img1.imgtn.bdimg.com/it/u=134363528,2871602849&fm=15&gp=0.jpg",
          name:"蔡徐坤",
          tit:"大苏打撒旦",
          time:"10.30"
        }
      ]
    }
  },
  components: {
Item_main
  },
  computed:{

  },
  methods: {
      listss(list){
        if(list==""){
          return list
        }else{
             return  list.find(item=>{
        return  name==this.$store.state.value
        })
        }
      }
  },

}
</script>
