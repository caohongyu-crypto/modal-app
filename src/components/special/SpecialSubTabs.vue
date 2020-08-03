<template>
  <el-row class="special-sub-tab">
    <el-col
      v-for="(item, index) in tabList"
      :key="index"
      :span="24/tabList.length"
      :class="{'active':active==index}"
      @click.native="() => handleClick(item, index)"
    >{{ item.label }}</el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    tabList: [Array],
    active: [String, Number]
  },
  data() {
    return {
      specialSubTabActive: null
    };
  },
  methods: {
    handleClick(item, index) {
      this.specialSubTabActive = "" + index;
      this.$emit("handleClick", item, index);
    }
  },
  mounted(){
      console.log(this.active);
  }
};
</script>

<style scoped>
.special-sub-tab {
  text-align: center;
  background-color: #f5f7fa;
}

.special-sub-tab .el-col {
  cursor: pointer;
  line-height: 39px;
  border-bottom: 1px solid #e4e7ed;
}

.active {
  border-bottom: 1px solid transparent !important;
  background-color: #ffffff !important;
}
</style>