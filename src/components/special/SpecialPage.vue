<template>
  <div class="header">
    <!-- 面包屑导航 -->
    <el-row class="title">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">营销活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动页面制作</el-breadcrumb-item>
        </el-breadcrumb>

        <div>
          <el-button type="primary">+ 大屏活动页面制作</el-button>
          <el-button type="primary" @click="createSmall">+ 小屏活动页面制作</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- 搜索框模块 -->
    <div class="content">
      <el-row :gutter="20" class="input-header">
        <el-col :span="6">
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="-"
              start-placeholder="创建开始时间"
              end-placeholder="创建结束时间"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="4">
          <el-input v-model="input" placeholder="活动页面编码/名称"></el-input>
        </el-col>

        <el-col :span="4">
          <el-input v-model="input" placeholder="创建人"></el-input>
        </el-col>

        <el-col :span="2">
          <el-button type="primary" @click="checkMessage">查询</el-button>
          <el-button @click="resetClick">重置</el-button>
          <el-button>查看导出任务</el-button>
        </el-col>
      </el-row>

      <!-- 表格内容 -->
      <Table
        :typeArr="typeArr"
        :tableData="tableData"
        :currentData="currentData"
        :titleData="titleData"
      ></Table>
      <!-- 翻页插件 -->
      <div class="block">
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
import api from "@/api";
import Table from "../common/Table";
export default {
  data() {
    return {
      value: "",
      input: "",
      value1: "",
      typeArr: [],
      currentPage4: 1,
      tableData: [],
      pageSize: 15,
      currentData: [],
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
  mounted() {
    api.getMessge().then(data => {
      console.log(data.data.rows);
      this.tableData = data.data.rows;
      this.currentData = this.tableData.slice(0, this.pageSize);
    });
  },
  methods: {
    checkMessage() {
      //根绝条件查询表格信息
      this.typeArr = this.tableData.filter(item => {
        if (item.date.includes(this.input)) {
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
      this.flag = false;
    },
    //编程式路由跳转
    createResource() {
      this.$router.push("/home/create");
    },
    // 当前页面
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      var limit = this.pageSize;
      this.currentData = this.tableData.slice(
        (val - 1) * limit,
        (val - 1) * limit + limit
      );
      console.log(this.currentData);
    },
    // 页面条数改变
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      var limit = this.pageSize;
      this.currentData = this.tableData.slice(
        (this.currentPage4 - 1) * limit,
        (this.currentPage4 - 1) * limit + limit
      );
    },
    //跳转到小屏制作页面
    createSmall() {
      // this.$router.push({
      //   name:'small-screen'
      // });

      //编程式路由跳转在新窗口打开
      let routeData = this.$router.resolve({
        name: "small-screen",
      });
      window.open(routeData.href, "_blank");
    }
  }
};
</script>

<style scoped>
/* 面包屑导航区域样式 */
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
/* 主题区域样式 */
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
  margin-bottom: 10px;
}

.block {
  float: right;
}

/* 时间输入框大小 */
.el-date-editor--daterange {
  width: 400px;
}
</style>