<template>
  <div class="header">
    <el-row class="title">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">营销资源</el-breadcrumb-item>
          <el-breadcrumb-item>营销资源管理</el-breadcrumb-item>
          <el-breadcrumb-item>新建资源</el-breadcrumb-item>
        </el-breadcrumb>
        <el-page-header @back="resetCreate">
        </el-page-header>
      </el-col>
    </el-row>

    <div class="content">
      <el-row>
        <el-col :span="7">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="资源类别:" prop="region">
              <div class="block">
                <el-cascader v-model="value" :options="option"></el-cascader>
              </div>
            </el-form-item>
            <el-form-item label="资源名称:" prop="name">
              <el-input v-model="ruleForm.name" placeholder="给资源起个高大尚的名字"></el-input>
            </el-form-item>

            <el-form-item label="原商品编码:" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
            </el-form-item>

            <el-form-item label="生效时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <div class="block">
                    <el-date-picker
                      v-model="value"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </div>
                </el-form-item>
              </el-col>
            </el-form-item>

            <el-form-item label="库存分配" prop="name">
              <el-input v-model="ruleForm.name" placeholder="数值" class="number"></el-input>
            </el-form-item>

            <el-form-item label="资源价">
              <el-input v-model="ruleForm.name" class="number"></el-input>
            </el-form-item>
            <el-form-item label="资源活动价" prop="resource">
              <el-input v-model="ruleForm.name" class="number"></el-input>
            </el-form-item>

            <el-form-item label="申请附件" prop="desc">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button>点击上传</el-button>
                <div slot="tip" class="el-upload__tip">附件大小100M以内</div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
              <el-button @click="resetCreate">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        value:[]
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      fileList: []
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    resetCreate() {
      this.$router.push("/home/manage");
    },
  },
  computed: {
    ...mapState(["option", "value"])
  }
};
</script>

<style scoped>
.el-col {
  display: flex;
  justify-content: space-between;
}
.title {
  background-color: rgb(249, 249, 249);
  padding: 10px 20px;
}
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
}

.content {
  width: 100%;
  padding-left: 80px;
  padding-top: 50px;
  padding-bottom: 20px;
  box-sizing: border-box;
  background-color: #fff;
}

.el-form {
  min-width: 600px;
  text-align: left;
}

.el-input {
  width: 350px;
}

.block {
  width: 350px !important;
}

.el-cascader {
  width: 100%;
}

.number {
  width: 150px;
}
.el-page-header{
    line-height: 40px;
    color: #549FFF;
}
</style>