<template>
  <div class="special-image">
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      ref="upload"
      :limit="Number(1)"
      :on-change="handlePic"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
            <i class="el-icon-download"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false
    };
  },
  methods: {
    async handleRemove(file) {
      console.log(this.$refs);
      console.log(file);
      //因为不是在后台读取数据，因此捕获返回错误
      try {
        var flag = await this.$confirm(`确定移除已上传图片${file.name}？`);
      } catch{
          flag = false
      }
      //判断是否删除图片
      if(flag){
        this.$refs.upload.clearFiles(); //清除已选图片
        this.$store.commit("changePic", file.url); //将改变的状态推到vuex
      }
      
    },
    
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handlePic(file) {
      console.log(file.url);
      this.$store.commit("changePic", file.url);
    }
  }
};
</script>

<style scoped>
.special-image {
  margin-top: 20px;
}

</style>