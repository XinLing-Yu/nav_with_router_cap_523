<template>
  <!-- 动态渲染 -->
  <div class=" px-10 py-4 grid grid-cols-2 gap-4" v-for="item in list">
    <!-- 分类 -->
    <div class="category">
      {{ item.category }}
    </div>
    <div class="clearfix"></div>

    <!-- 分类对应卡片内容开始 宫格样式 -->
    <div v-for="urls in item.sites "
      class=" bg-opacity-70 backdrop-filter backdrop-blur flex rounded-lg shadow-2xl bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 hover:bg-white-700 duration-300"
      @click="OpenLinkPop(urls.url, urls.encrypted)">
      <!-- 左头像 -->
      <div class="card-header">
        <!-- 图片 -->
        <img class="h-18 w-18 rounded-full" style="justify-content: center ;align-items: center;"
          :src="'http://www.google.com/s2/favicons?sz=64&domain=' + urls.url" alt="获取logo" />
      </div>
      <!-- 右边内容 -->
      <div class="card-content">
        <!-- 内容 -->
        <!-- 右边标题 -->
        <div class="title">
          <h2 class="font-semibold">{{ urls.name }}</h2>
        </div>
        <div class="content">
          {{ urls.detail }}
        </div>
      </div>
    </div>
    <!-- 卡片结束/外围 -->
    <!-- 密码弹窗 -->

  </div>
  <van-dialog :show="show" @cancel="PopCancel" @confirm="PopConfirm" title="密码" show-cancel-button>
    <van-field v-model="password" type="password" placeholder="请输入密码" />
  </van-dialog>
</template>
<script setup lang="ts">
import data from '@/assets/list_item.json'
import type { ListToShow, Sites } from '@/types/types';
import { ref } from 'vue';
const show = ref(false)
const password = ref('')
let url: any = ""

//0609更新 增加加密功能，点击卡片弹窗输入密码，密码正确才可打开
const OpenLink = () => {
  window.open(url, "_blank")
}
const OpenLinkPop = (link: string, isEncrypt: boolean) => {
  if (isEncrypt) {
    show.value = true
    console.log(show.value)
    url = link
    console.log(password.value)
    if (password.value === '123456') {
      // window.open(url, "_blank")
      console.log(url)
    }
  }else{
    window.open(link, "_blank")
  }

}
const PopConfirm = () => {
  if (password.value === '123456') {
    show.value = false
    window.open(url, "_blank")
    password.value = ''
  }
}
const PopCancel = () => {
  show.value = false
}
//从json读取网站详情并存入数组
const list = ref<ListToShow[]>()
list.value = JSON.parse(JSON.stringify(data as ListToShow[]))


const showFilter = (search: string) => {
  if (search === "" || search === undefined) {
    list.value = JSON.parse(JSON.stringify(data as ListToShow[]))
    return
  } else {
    list.value = searchToArray(data as ListToShow[], search)

  }
}



function searchToArray(data: ListToShow[], word: string) {
  const result: ListToShow[] = []
  word = word.toLowerCase()
  //如果我搜的是网站描述或者名称，则先把网站相关的结果放到网站集合中
  data.forEach((category) => {
    const websites: Sites[] = []
    category.sites.forEach((site) => {
      if (site.name.toLowerCase().includes(word)) {
        websites.push(site)
      } else if (site.detail.toLowerCase().includes(word)) {
        websites.push(site)
      }
    })
    //如果我搜的是类别，则根据类别匹配，或者没搜的话，直接把上面的数组存入结果
    if (category.category.toLowerCase().includes(word) || websites.length > 0) {
      result.push({
        category: category.category,
        sites: websites
      })
    }

  })

  console.log(result)
  if (result.length === 0) {
    result.push({
      category: "哦豁，没有找到（x）",
      sites: []
    })
  }
  return result

}

defineExpose({
  showFilter
})
</script>
<style>
.catagory {
  display: flex;
  align-items: center;
}

.clearfix {
  clear: both;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}



.card-header {
  padding: 10px;
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