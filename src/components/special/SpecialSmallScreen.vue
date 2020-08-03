<template>
  <div class="header">
    <el-row class="title">
      <el-col :span="5">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">营销活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动页面制作</el-breadcrumb-item>
          <el-breadcrumb-item>新建活动页面</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="5">
        <p class="name">活动页面名称：</p>
        <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
      </el-col>

      <el-col :span="3" class="active">
        <p>关联活动</p>
        <el-select v-model="value" size="small" placeholder="资源选择">
          <el-option
            v-for="item in active"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="5" class="btns">
        <el-button>存为我的模板</el-button>
        <el-button type="primary">保存并预览</el-button>
        <el-button type="primary">提审发布</el-button>
      </el-col>
    </el-row>

    <div class="content" @click="openFullScreen2">
      <special-slider-bar :dataList="dataList"></special-slider-bar>
      <SpecialMain class="special-main"></SpecialMain>
      <SpecialToolBar class="special-tool"></SpecialToolBar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SpecialSliderBar from "./SpecialSliderBar";
import SpecialToolBar from "./SpecialToolBar";
import SpecialMain from "./SpecialMain";
import { specialSideMenuList } from "@/utils/contant.js";
export default {
  data() {
    return {
      input: "未命名活动",
      value: "",
      dataList: specialSideMenuList,
      fullscreenLoading: false
    };
  },
  computed: {
    ...mapState(["active"])
  },
  components: {
    SpecialSliderBar,
    SpecialToolBar,
    SpecialMain
  },
  methods: {
    openFullScreen2(e) {
      var target = e.target.className;
      try {
        if (target === "header" || target.includes("special-main")) {
        this.$store.commit('changeTool', 'Page');//点击空白区，功能栏切换成初始样式
        const loading = this.$loading({
          lock: true,
          background: "rgba(0, 0, 0, 0.7)"
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
      } catch{
        console.log('not target')
      }
      
    }
  }
};
</script>

<style scoped>
.header {
  min-width: 1200px;
  height: 100vh;
}
.title {
  background-color: rgb(249, 249, 249);
  padding: 10px 20px;
  min-width: 1600px;
  background: #fff !important;
  border-bottom: 1px solid #d8d8d8 !important;
}

.el-breadcrumb {
  height: 40px;
  line-height: 40px;
}

.el-col {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  width: 110px;
  min-width: 110px;
  font-size: 15px;
  line-height: 40px;
}

.active {
  margin-left: 50px;
}

.active > p {
  width: 100px;
  line-height: 40px;
  font-size: 15px;
}

.btns {
  float: right;
}

.content {
  display: flex;
  width: 100%;
  height: calc(100% - 65px);
}

.special-main {
  flex: 1;
}
.special-tool {
  width: 319px;
  border-left: 1px solid #d8d8d8;
}
</style>