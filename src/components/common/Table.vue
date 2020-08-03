<template>
  <div class="header">
    <el-table
      v-if="empty"
      :data="flag ? typeArr : currentData"
      stripe
      style="width: 100%"
      :header-cell-style="{background:'rgb(241, 248, 255)'}"
    >
      <el-table-column
        v-for="(item, index) in titleData"
        :key="index"
        :prop="item.prop"
        :label="item.name"
       
      ></el-table-column>
    </el-table>
    <div v-else class="div-empty">暂无数据</div>
    <!-- 警告框 -->
    <el-alert
      v-if="waring"
      title="温馨提示"
      type="error"
      description="请输入查询条件再查询哦~"
      @close="change"
      show-icon
    ></el-alert>
  </div>
</template>

<script>
export default {
  props: ["typeArr", "currentData", "tableData", "titleData"],
  data() {
    return {
      flag: false,
      waring: false,
      empty: false,
    };
  },
  mounted() {
    if (this.tableData.length != 0) {
      this.empty = true;
    } else {
      this.empty = false;
    }
  },
  watch: {
    currentData() {
      this.empty = true;
    },
    typeArr(){
      if(this.typeArr.length === 0){
        this.flag = false;
        this.waring = true;
      }else{
        this.flag = true;
      }
    }
  },
  methods: {
    change() {
      this.waring = false;
    },
    
  }
};
</script>

<style scoped>
.block {
  float: right;
}
.el-alert {
  position: absolute;
  top: 5px;
  width: 800px;
  left: 50%;
  margin-left: -400px;
}

.div-empty {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: grey;
  border: 1px solid #ddd;
  margin-top: 10px;
}

.header {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  min-width: 1200px;
}


.block{
    float: right;
}
</style>