<template>
  <div class="special-tool">
    <h5>页面设置</h5>
    <div class="content">
      <span class="title">页面标题</span>
      <el-input
        type="text"
        placeholder="请输入内容"
        size="small"
        v-model="text"
        maxlength="20"
        show-word-limit
      ></el-input>
      <div class="pic-main">
        <SpecialImage></SpecialImage>
        <div class="btns">
          <el-button size="small">
            <i class="el-icon-picture-outline"></i> 更换图片
          </el-button>
          <el-button size="small" disabled>
            <i class="el-icon-delete"></i> 删除图片
          </el-button>
          <el-button size="small" disabled>
            <i class="el-icon-scissors"></i> 裁剪图片
          </el-button>
        </div>
      </div>
      <span class="title">纯色背景</span>
      <el-row>
        <el-col :span="4">
          <div class="block">
            <el-color-picker v-model="newColor"></el-color-picker>
          </div>
        </el-col>
        <el-col :span="18">
          <el-input placeholder="请输入内容" v-model="input" size="small" :disabled="true"></el-input>
        </el-col>
      </el-row>
      <span class="title">背景音乐</span>
      <el-button class="music" size="small">+添加音乐</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import SpecialImage from "../common/SpecialImage";
export default {
  data() {
    return {
      
    };
  },
  components: {
    SpecialImage
  },
  computed: {
    ...mapState(["title", 'color', 'input']),
    newColor:{
      get(){
        return this.color;
      },
      set(val){
        this.$store.commit('changeColor', val);
      }
    },
    text: {
      get() {
        return this.title;
      },
      set(val) {
        this.$store.commit("changeTitle", val);
      }
    }
  },
  methods: {
    ...mapMutations(["changeTitle"])
  }
};
</script>

<style scoped>
.content {
  padding: 0 20px;
  box-sizing: border-box;
}

.el-input {
  margin-top: 15px !important;
}

.title {
  font-size: 13px;
}

.special-tool {
  min-width: 319px;
}

h5 {
  background-color: #f9f9f9;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.pic-main {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btns .el-button {
  margin: 5px;
}

.block {
  margin-top: 10px;
}

.el-col {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.music{
  display: block;
  width: 200px;
  margin-top: 15px;
}
</style>