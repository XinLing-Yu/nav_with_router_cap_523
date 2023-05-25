<template>
    <div class="grid-container">
        <!-- 卡片内容开始 宫格样式 -->
        <!-- 523:改用新选项卡打开网页 -->
        <div class="card" @click="OpenLink('https://www.xiaomi.cn/')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/OIP-C.jpg" alt="小米社区"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>小米社区</h2>
            </div>
            <div class="content">
            前往小米社区
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card" @click="OpenLink('https://svpn.tjnu.edu.cn/')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/logo.png" alt="师大svpn"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>天津师范大学SVPN</h2>
            </div>
            <div class="content">
            可直接登录或下载客服端
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card" @click="OpenLink('https://mail.tjnu.edu.cn/coremail/')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/tnu_mail.png" alt="师大mail"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>天津师范邮箱系统</h2>
            </div>
            <div class="content">
            顾名思义，去查邮件的
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card" @click="OpenLink('https://jwxt.tjnu.edu.cn/tjsfjw/cas/login.action')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/logo.png" alt="师大教务"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>天津师范大学教务系统</h2>
            </div>
            <div class="content">
            卡死了。。垃圾系统
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <!-- 523:改用新选项卡打开网页 -->
        <div class="card" @click="OpenLink('https://roms.miuier.com/zh-cn/')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/miuidl_favicon.png" alt="小米miui下载 "/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>小米MIUI下载</h2>
            </div>
            <div class="content">
            miui全机型下载
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card" @click="OpenLink('https://oneplus.com')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/oneplus.jpg" alt="一加"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>一加官网</h2>
            </div>
            <div class="content">
            下载ROM
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card" @click="OpenLink('https://jwxt.tjnu.edu.cn/tjsfjw/cas/login.action')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/cgpt_favicon.png" alt="chatgpt"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>ChatGPT</h2>
            </div>
            <div class="content">
            8说了，yyds
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card" @click="OpenLink('https://chatbot.theb.ai/')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/baichat_favicon.png" alt="baichat"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>BAIChat</h2>
            </div>
            <div class="content">
            备用，也很8错
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card" @click="OpenLink('https://worldvectorlogo.com/')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/getlogo_favicon.png" alt="获取logo"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>WORLDVECTORLOGO</h2>
            </div>
            <div class="content">
            获取logo的，也很好用
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        <!-- 卡片内容开始 宫格样式 -->
        <div class="card" @click="OpenLink('https://worldvectorlogo.com/')">
          <!-- 左头像 -->
          <div class="card-header">
            <!-- 图片 -->
            <img class="avatar" src="../assets/getlogo_favicon.png" alt="获取logo"/>
          </div>
          <!-- 右边内容 -->
          <div class="card-content">
            <!-- 内容 -->
            <!-- 右边标题 -->
            <div class="title">
              <h2>01234567890</h2>
            </div>
            <div class="content">
            测试字体ABCDEJRQWERTYUIOPASDFGHJKLZXCVBNM
            </div>
          </div>
        </div>
        <!-- 卡片结束/外围 -->
        
      </div>
</template>
<script setup lang="ts">
    
    const OpenLink=(link:string)=>{
    window.open(link,"_blank")
  }

</script>
<style>
/* @font-face {
    font-family: custom;
    src:
        url(@/assets/OPPOSans3.0cn-Regular.ttf) format('truetype');
} */


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
    padding: 120px;

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
}</style>