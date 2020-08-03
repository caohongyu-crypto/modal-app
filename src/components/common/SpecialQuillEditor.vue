<template>
  <div class="edit_container">
    <quill-editor
      style="height:180px;"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { mapState } from "vuex";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {
        placeholder: "insert here",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线

            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ direction: "rtl" }], // 文本方向

            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题

            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            [{ align: [] }], //对齐方式
          ]
        },
        theme: "snow"
      }
    };
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
      console.log(editor);
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange(editor) {
      console.log(editor);
      console.log(this.$refs);
      var obj = {};
      obj["name"] = "SpecialBasic";
      obj["item"] = "Text";
      obj["text"] = editor.html;
      this.$store.commit("changeData", obj);
    } // 内容改变事件
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
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
.edit_container {
  margin: 15px 0;
}
.edit_container {
  height: 310px;
}
</style>