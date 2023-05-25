<template>
  <!-- 动态渲染 -->
  <div class="grid-container" v-for="item in list">
    <!-- 分类 -->
    <div class="category">
      {{ item.category }}
    </div>
    <div class="clearfix"></div>
    <!-- 分类对应卡片内容开始 宫格样式 -->
    <div v-for="urls in item.sites" class="card" @click="OpenLink(urls.url)">
      <!-- 左头像 -->
      <div class="card-header">
        <!-- 图片 -->
        <img class="avatar" :src="'http://www.google.com/s2/favicons?sz=64&domain='+urls.url" alt="获取logo" />
      </div>
      <!-- 右边内容 -->
      <div class="card-content">
        <!-- 内容 -->
        <!-- 右边标题 -->
        <div class="title">
          <h2>{{ urls.name }}</h2>
        </div>
        <div class="content">
          {{ urls.detail }}
        </div>
      </div>
    </div>
    <!-- 卡片结束/外围 -->
  </div>
</template>
<script setup lang="ts">
import data from '@/assets/list_item.json'

const OpenLink = (link: string) => {
  window.open(link, "_blank")
}
const list = data

</script>
<style>
.catagory {
  display: flex;
  align-items: center;
}
.clearfix{
  clear: both;
}
a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px;
  margin: 5px 150px;

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
  margin-top: 20px;
  margin-left: 9px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  font-size: 20px;
  margin: 0;
  font-size: 18px;

}

.title {
  font-size: 14px;
  margin: 0;
}

.card-content {
  flex: 1;
  padding: 10px;
}
</style>