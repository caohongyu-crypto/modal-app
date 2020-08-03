<template>
  <el-container>
    <!-- 头部内容区域 -->
    <el-header>
      <p class="title"><img src="@/assets/logo1.png" class="logo">湖南卫视视频运营平台</p>
      <p>
        <el-button type="primary">请登录</el-button>
      </p>
    </el-header>
    <!-- 主题内容区 -->
    <el-container class="app-content">
      <!-- 导航栏区域 -->
      <el-aside width="210px" class="app-aside">
        <el-scrollbar style="height:100%;">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                :default-active="$route.name"
                :router="true"
                class="el-menu-vertical-demo"
                background-color="#424E65"
                text-color="#fff"
                active-text-color="rgb(84, 159, 255)"
              >
                <el-submenu index="1">
                  <template slot="title" >
                    <span>营销资源管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="manage"><router-link tag="li" :to="{path:'/home/manage'}">●  营销资源管理</router-link></el-menu-item>
                    <el-menu-item index="order"><router-link tag="li" :to="{name:'order'}">●  资源订单管理</router-link></el-menu-item>
                    <el-menu-item index="order-manage"><router-link :to="{name:'order-manage'}">●  资源批量批发</router-link></el-menu-item>
                    <el-menu-item index="1-4">●  资源上下架审核</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title" >
                    <span>营销活动管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="report"><router-link tag="li" :to="{name:'report'}">●  活动报备管理</router-link></el-menu-item>
                    <el-menu-item index="page"><router-link tag="li" :to="{name:'page'}">●  活动页面制作</router-link></el-menu-item>
                    <el-menu-item index="2-3">●  营销规则配置</el-menu-item>
                    <el-menu-item index="2-4">●  营销规则审核</el-menu-item>
                    <el-menu-item index="2-5">●  自定义资源配置</el-menu-item>
                    <el-menu-item index="2-6">●  活动投放管理</el-menu-item>
                    <el-menu-item index="2-7">●  活动报备审核</el-menu-item>
                    <el-menu-item index="2-8">●  活动页面审核</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title" >
                    <span>营销素材管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">●  热点素材库</el-menu-item>
                    <el-menu-item index="3-2">●  我的素材创建</el-menu-item>
                    <el-menu-item index="3-3">●  我的素材分发</el-menu-item>
                    <el-menu-item index="3-4">●  素材分发执行</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="4">
                  <span slot="title">推荐素材库</span>
                </el-menu-item>
                
                <el-submenu index="5">
                  <template slot="title" >
                    <span>营销运营分析</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="5-1">●  活动数据分析</el-menu-item>
                    <el-menu-item index="5-2">●  内容数据分析</el-menu-item>
                    <el-menu-item index="5-3">●  用户流量分析</el-menu-item>
                    <el-menu-item index="5-4">●  素材使用监控</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="6">
                  <span slot="title">营销运营数据</span>
                </el-menu-item>

                <el-menu-item index="7">
                  <span slot="title">合作商管理</span>
                </el-menu-item>

                <el-submenu index="8">
                  <template slot="title" >
                    <span>权限配置</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="8-1">●  用户权限</el-menu-item>
                    <el-menu-item index="8-2">●  角色管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

              </el-menu>
            </el-col>
          </el-row>
        </el-scrollbar>
        
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.el-container{
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #424E65;
  color: #333;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

a{
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}

.title{
  color: #fff;
}
.el-aside {
  color: #333;
  line-height: 200px;
}

.app-aside{
    background-color: #424E65;
    overflow: auto;
    position: relative;
    top: 0;
    bottom: 0;
}

.app-content {
    height: calc(100% - 60px);
    position: relative;
}



.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.router-link-active{
  color: rgb(84, 159, 255)
}

.logo{
  width: 40px;
  height: 40px;
  margin-right: 5px;
  vertical-align: middle;
}
</style>