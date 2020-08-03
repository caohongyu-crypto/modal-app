<template>
  <div class="special-text">
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="样式">
        <span class="title">文本内容</span>
        <SpecialQuillEditor></SpecialQuillEditor>
        <span class="title">调整边距</span>
      </el-tab-pane>
      <el-tab-pane label="事件">
        <el-row>
          <el-col :span="6">
            <span class="event">点击事件</span>
          </el-col>
          <el-col :span="17">
            <el-select size="small" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <div class="link" v-if="value != '无' || ''">
            <el-row>
                <el-col :span="6">
                    <span class="event">{{value}}</span>
                </el-col>
                <el-col :span="17">
                    <el-input v-model="input" size="small" :placeholder="'请输入' + value"></el-input>
                </el-col>
            </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SpecialQuillEditor from "../common/SpecialQuillEditor";
export default {
  data() {
    return {
      options: [
        {
          value: "无",
          label: "无"
        },
        {
          value: "跳转连接",
          label: "跳转连接"
        },
        {
          value: "导流",
          label: "导流"
        },
      ],
      value: "",
      input:''
    };
  },
  components: {
    SpecialQuillEditor
  }
};
</script>

<style scoped>
.title {
  margin-top: 10px;
  font-size: 15px;
  color: grey;
}
.event {
  line-height: 30px;
  font-size: 15px;
}
.link{
    margin-top: 15px;
}
</style>