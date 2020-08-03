<template>
  <div class="header">
    <el-row class="title">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">营销资源</el-breadcrumb-item>
          <el-breadcrumb-item>营销资源管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" @click="createResource">+ 新建资源</el-button>
      </el-col>
    </el-row>

    <div class="content">
      <el-row :gutter="20" class="input-header">
        <el-col :span="4">
          <el-select v-model="value" placeholder="资源选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-input v-model="input" placeholder="资源编码/名称"></el-input>
        </el-col>

        <el-col :span="6">
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </el-col>

        <el-col :span="2">
          <el-button type="primary" @click="checkMessage">查询</el-button>
          <el-button @click="resetClick">重置</el-button>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "@/api";
import Table from "../common/Table";
export default {
  data() {
    return {
      value: "",
      input: "",
      value1: "",
      typeArr: [],
      tableData: [],
      currentPage4: 1,
      pageSize: 15,
      currentData: [],
      empty: false,
      titleData: [
        {
          name: "资源编码/名称",
          prop: "date"
        },
        {
          name: "资源类别",
          prop: "name"
        },
        {
          name: "生失效时间",
          prop: "address"
        },
        {
          name: "资源分配量",
          prop: "manage"
        },
        {
          name: "资源剩余量",
          prop: "number"
        },
        {
          name: "资源状态",
          prop: "status"
        },
        {
          name: "操作",
          prop: "change"
        }
      ]
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
    api.getMessge().then(data => {
      this.tableData = data.data.rows;
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
        if (item.name === this.value) {
          return item;
        } else if (item.date === this.input) {
          return item;
        }
      });
      // //判断是否有查询条件
      // if (this.typeArr.length === 0) {
      //   this.flag = false;
      //   this.waring = true;
      // } else {
      //   this.flag = true;
      // }
    },
    // 重置按钮
    resetClick() {
      this.value = "";
      this.input = "";
      this.value1 = "";
    },
    //编程式路由跳转
    createResource() {
      this.$router.push("/home/create");
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
    }
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

.input-header {
  min-width: 1400px;
}
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
</style>