<template>
  <div id="wangeditor">
      <div id="toobar">

      </div>
    <div ref="editorElem" class="content">
        {{content}}
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
import { mapState } from "vuex";
export default {
  name: "Editor",
  data() {
    return {
      editor: null,
    };
  },
  methods: {
    catchData(value) {
      console.log(value);
      var obj = {};
      obj["name"] = "SpecialBasic";
      obj["item"] = "Text";
      obj["text"] = value;
      this.$store.commit("changeData", obj);
    }
  },
  // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
  mounted() {
    this.editor = new E('#toobar', this.$refs.editorElem);
    // // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.content = html;
      this.catchData(this.content);
    };
    this.editor.customConfig.menus = [
      // 菜单配置
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "justify", // 对齐方式
      "link" // 插入链接
    ];
    this.editor.create(); // 创建富文本实例
  },
  computed: {
    ...mapState(["dragTo", "styleArr"]),
    content: {
      get() {
        return this.dragTo;
      },
      set(val) {
        this.$store.commit("changeDrag", val);
        console.log(val);
      }
    }
  }
};
</script>

<style scoped>
.content{
    height: 240px;
}
</style>