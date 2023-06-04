<template>
  <div>
    <div> <!--标题-->
      <h1 class="h-title">CAP的日用品</h1>
    </div>
    <!-- 搜索 -->
    <div class="searchbar-container">
      <Searchbar @search="startSearch"></Searchbar>
    </div>
    <div> <!--详情-->
      <!-- 卡片外围 -->
      <Card ref="card"></Card>
      <!-- 卡片外围结束 -->
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import Card from '@/components/Card.vue';
  import Searchbar from '@/components/Searchbar.vue'
  
  const card = ref<any>()
  //开始搜索
  const startSearch = (search:string) =>{
    console.log(search)
    card.value.showFilter(search)
  }

</script>
<style>
  @font-face {
    font-family: custom;
    src: 
         url(@/assets/OPPOSans3.0cn-Regular.ttf) format('truetype');
  }
  body{
    background-image: url(../assets/cap-bg.jpg);
    font-family: 'custom';
  }
  
  .h-title{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .searchbar-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
