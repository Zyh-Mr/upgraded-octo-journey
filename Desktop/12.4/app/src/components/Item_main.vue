<template>
    <div class="shan">
        <div class="item" v-for="(item,index) in list" :key="index">
            <img :src="item.img" alt=""> 
            <div class="item_senter">
                <h3>{{item.name}}</h3>
                <p>{{item.tit}}</p>
            </div>
            <div class="item_left">
                {{item.time}}
            </div>
        </div>

    </div>


</template>

<script>
export default {
    props:["list"]
}
</script>

<style>
        .shan{
            width: 100%;
        }
        .item{
            width: 100%;
            height: 100px;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .item>img{
            width: 100px;
            height: 100px;
            border: solid 1px #ccc;
            border-radius: 10%;
        }
        .item_senter{
            flex: 1;
            padding: 10px;
            box-sizing: border-box
        }
        .item_left{
              width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center
        }
</style>