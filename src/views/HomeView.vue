<script setup lang="ts">
</script>

<template>
  <div>
    <div> <!--标题-->
      <h1>CAP的日用品</h1>
    </div>
    <!-- 搜索（后期功能，占位） -->
    <div></div>
    <div> <!--详情-->
      <!-- 卡片外围 -->
      <div class="grid-container">
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/OIP-C.jpg" alt="小米网"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>小米网</h2>
            </div>
            <div class="content">
            Hello，我是小米网
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/OIP-C.jpg" alt="小米网"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>小米网</h2>
            </div>
            <div class="content">
            Hello，我是小米网
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        
      </div>
      
    </div>
  </div>
</template>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 10px;

  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    border-radius: 8px;
    background-color: azure;
  }
  .card-header {
    padding: 10px;
    align-items: center;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name{
    font-size: 20px;
    margin: 0;
    font-size: 18px;
    
  }
  .title{
    font-size: 14px;
    margin: 0;
  }
  .card-content {
    flex: 1;
    padding: 10px;
  }
</style>
