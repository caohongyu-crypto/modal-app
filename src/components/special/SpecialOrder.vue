<template>
  <div class="header">
    <el-row class="title">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">营销资源管理</el-breadcrumb-item>
          <el-breadcrumb-item>资源订单管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <div class="content">
      <el-row :gutter="20" class="input-header">
        
        <el-col :span="4">
          <el-input v-model="input" placeholder="资源编码"></el-input>
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
          <el-input v-model="input" placeholder="用户标识"></el-input>
        </el-col>

        <el-col :span="2">
          <el-input v-model="input" placeholder="订单号"></el-input>
        </el-col>

        <el-col :span="4">
          <el-select v-model="value" placeholder="下发状态">
            <el-option
              v-for="item in status"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="3">
          <el-button type="primary" @click="checkMessage">查询</el-button>
          <el-button @click="resetClick">重置</el-button>
        </el-col>
      </el-row>

      <el-row>
          <el-col :span="4">
            <el-button type="info" :disabled="isDisabled" style="width:143px;height:36px; font-size:15px;line-height:10px">({{currentData.length}})信息按钮</el-button>
          </el-col>
      </el-row>

      <Table :typeArr="typeArr" :tableData="tableData" :currentData="currentData" :titleData='titleData'></Table>

      <div v-if="empty" class="block">
        <el-pagination
          :current-page="currentPage4"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          :page-sizes="[15, 30, 45, 60]"
          :page-size="15"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from '@/api';
import Table from '../common/Table'
export default {
  data() {
    return {
      value: "",
      input: "",
      value1: "",
      typeArr: [],
      currentPage4:1,
      empty:false,
      isDisabled:true,
      tableData:[],
      pageSize:15,
      currentData:[],
      titleData:[
        {
          name:'资源编码/名称',
          prop:'date'
        },
        {
          name:'资源类别',
          prop:'name'
        },
        {
          name:'生失效时间',
          prop:'address'
        },
        {
          name:'资源分配量',
          prop:'manage'
        },
        {
          name:'资源剩余量',
          prop:'number'
        },
        {
          name:'资源状态',
          prop:'status'
        },
        {
          name:'操作',
          prop:'change'
        }
      ]
    };
  },
  components:{
    Table,
  },
  computed: {
    ...mapState(["status"])
  },
  mounted(){
      if(this.status.length != 0){
          this.empty = true;
          this.isDisabled = false;
      }else{
          this.empty = false;
          this.isDisabled = true;
      }

      api.getMessge().then(data => {
      console.log(data.data.rows);
      this.tableData = data.data.rows;
      this.currentData = this.tableData.slice(0, this.pageSize);
    })
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
    // 当前页面
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      var limit = this.pageSize;
      this.currentData = this.tableData.slice((val - 1) * limit, (val - 1) * limit + limit );
      console.log(this.currentData);
    },
    // 页面条数改变
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      var limit = this.pageSize;
      this.currentData = this.tableData.slice((this.currentPage4 - 1) * limit, (this.currentPage4 - 1) * limit + limit)
    },
  }
};
</script>

<style scoped>
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
  margin-bottom: 10px;
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

.div-empty{
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: grey;
    border: 1px solid #ddd;
    margin-top: 10px;
}
</style>