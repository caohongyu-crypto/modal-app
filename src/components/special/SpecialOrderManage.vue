<template>
  <div class="header">
    <el-row class="title">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">营销资源管理</el-breadcrumb-item>
          <el-breadcrumb-item>营销批量补发</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" @click="display = true">+ 批量补发</el-button>
      </el-col>
    </el-row>

    <div class="content">
      <el-row :gutter="15" class="input-header">
        <el-col :span="3">
          <el-input v-model="input" size="small" placeholder="批充文件名称" @input="resetData"></el-input>
        </el-col>

        <el-col :span="3">
          <el-input v-model="input1" size="small" placeholder="批充资源编码名称" @input="resetData"></el-input>
        </el-col>

        <el-col :span="2">
          <el-button type="primary" @click="checkMessage">查询</el-button>
        </el-col>
      </el-row>

      <Table
        :typeArr="typeArr"
        :tableData="tableData"
        :currentData="currentData"
        :titleData="titleData"
      ></Table>

      <!-- 翻页插件 -->
      <div v-if="flag" class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[15, 30, 45, 60]"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </div>
    </div>
    <transition name="fade">
    <div class="messageBox" v-if="display">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <h2 class="mes-title">批量补发</h2>
        <el-form-item label="活动名称" prop="name">
          <el-input size="small" v-model="ruleForm.name" placeholder="请填写批充资源编码"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select size="small" v-model="ruleForm.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="批充文件" prop="desc">
          <el-button>点击上传</el-button><span class="load">下载模板</span>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    </transition>

    
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "@/api";
import Table from "../common/Table";
export default {
  data() {
    return {
      input: "",
      input1: "",
      typeArr: [],
      tableData: [],
      currentPage4: 1,
      pageSize: 15,
      temp: false,
      currentData: [],
      empty: false,
      display:false,
      titleData: [
        {
          name: "批充ID",
          prop: "id"
        },
        {
          name: "批充文件",
          prop: "file"
        },
        {
          name: "批充资源编码/名称",
          prop: "name"
        },
        {
          name: "创建人",
          prop: "person"
        },
        {
          name: "文件处理结果",
          prop: "result"
        },
        {
          name: "生成订单总数",
          prop: "sum"
        },
        {
          name: "订单充值结果",
          prop: "order"
        },
        {
          name: "操作",
          prop: "change"
        }
      ],
      ruleForm: {
        name: "",
        region: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入批充文件名称", trigger: "blur" },
          { min: 10, max: 15, message: "长度在 10 到 15 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
    };
  },
  components: {
    Table
  },
  computed: {
    ...mapState(["options"]),
    flag() {
      return !this.empty;
    }
  },
  mounted() {
    api.getOrder().then(data => {
      this.tableData = data.data.row;
      this.currentData = this.tableData.slice(0, this.pageSize);
    });

    if (this.tableData.length != 0) {
      this.empty = true;
    } else {
      this.empty = false;
    }
  },
  methods: {
    checkMessage() {
      //根绝条件查询表格信息
      this.typeArr = this.tableData.filter(item => {
        if (item.name === this.input) {
          return item;
        } else if (item.date === this.input1) {
          return item;
        }
      });
      this.temp = true;
    },
    // 当前页面
    handleCurrentChange(val) {
      var limit = this.pageSize;
      this.currentData = this.tableData.slice(
        (val - 1) * limit,
        (val - 1) * limit + limit
      );
    },
    // 页面条数改变
    handleSizeChange(val) {
      this.pageSize = val;
      var limit = this.pageSize;
      this.currentData = this.tableData.slice(
        (this.currentPage4 - 1) * limit,
        (this.currentPage4 - 1) * limit + limit
      );
    },
    resetData() {
      //锁为true并且查询条件框都为空的时候再发起请求
      if (this.temp && this.input === "" && this.input1 === "") {
        api.getOrder().then(data => {
          this.temp = false; //请求过后将锁关闭
          this.tableData = data.data.row;
          this.currentData = this.tableData.slice(0, this.pageSize);
        });
      }
    },
    submitForm(formName) {
      this.display = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.display = false;
    },
  }
};
</script>

<style scoped>
.header {
  position: relative;
}
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
  padding: 10px;
  min-width: 1200px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
}
.input-header {
  min-width: 1400px;
  line-height: 40px;
}

.messageBox {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 111;
  top: 0;
  left: 0;
}

.el-form {
  position: absolute;
  left: 0;
  top: -350px;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  width: 500px;
  height: 370px;
  background-color: #fff;
  text-align: left;
  border-radius: 5px;
}

.mes-title {
  margin-bottom: 20px;
}

.load{
    font-size: 13px;
    color: #549FFF;
    margin-left: 3px;
}

.btns{
    text-align: right;
    margin-top: 90px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>