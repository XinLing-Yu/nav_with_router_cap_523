<template>
  <div>
    <div> <!--标题-->
      <h1 class="h-title">CAP的日用品</h1>
    </div>
    <!-- 搜索（后期功能，占位） -->
    <div class="searchbar-container">
      <input type="text" placeholder="搜索（不可用）" />
    </div>
    <div> <!--详情-->
      <!-- 卡片外围 -->
      <Card></Card>
      <!-- 卡片外围结束 -->
    </div>
  </div>
</template>
<script setup lang="ts">
  import Card from '@/components/Card.vue';
  

</script>
<style>
  @font-face {
    font-family: custom;
    src: 
         url(@/assets/OPPOSans3.0cn-Regular.ttf) format('truetype');
  }
  body{
    background: url(@/assets/cap_bg.svg) center center/cover no-repeat;
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
