<template>
  <div class="edit_container">
    <mavon-editor  @change="updateDoc" ref="editor" v-model="content"></mavon-editor>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { mapState } from "vuex";
export default {
  components: {
    mavonEditor
  },
  data() {
    return {};
  },
  methods: {
    updateDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("html内容:" + html);
      var obj = {};
      obj["name"] = "SpecialBasic";
      obj["item"] = "Text";
      obj["text"] = html;
      this.$store.commit("changeData", obj);
      console.log(this.$refs.editor)
    },
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
.edit_container {
  margin: 15px 0;
}
.edit_container {
  height: 310px;
}
</style>