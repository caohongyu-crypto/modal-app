import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'',
    imgSrc:'',
    color:'#fff',
    input:'#fff',
    toolCom:'',
    textContent:[],
    dragTo:'',
    styleArr:{},
    index:'',
    textList:[
      {
        name: "SpecialBasic",
        item:'Text',
        text: `<p style="text-align: center;"><span style="font-size: 36px;color: #000000;font-weight: bolder">大标题</span></p>`,
      },
      {
        name: "SpecialBasic",
        item:'Text',
        text: `<p style="text-align: center;"><span style="font-size: 34px;color: #000000;font-weight: bolder">标题</span></p>`
      },
      {
        name: "SpecialBasic",
        item:'Text',
        text:`<p style="text-align: center;"><span style="font-size: 32px;color: #000000;font-weight: bolder">副标题</span></p>`
      },
      {
        name: "SpecialBasic",
        item:'Text',
        text:`<p style="text-align: center;"><span style="font-size: 15px;color: #000000;font-weight: 400">这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</span></p>`
      }
    ],
    data:[],
    options: [{
        value: "流量",
        label: "流量"
      },
      {
        value: "直充权益",
        label: "直充权益"
      },
      {
        value: "短信兑换码",
        label: "短信兑换码"
      },
      {
        value: "牧羊犬资源",
        label: "牧羊犬资源"
      }
    ],
    active: [{
      value: "IMC_0000EUMZ/【test】活动报备0701",
      label: "IMC_0000EUMZ/【test】活动报备0701"
    },
    {
      value: "IMC_0000EUET/答题联调专用活动",
      label: "IMC_0000EUET/答题联调专用活动"
    },
    {
      value: "IMC_0000EUBX/【test】【大屏】活动报备0622",
      label: "IMC_0000EUBX/【test】【大屏】活动报备0622"
    },
    {
      value: "IMC_0000EUBW/【test】【小屏】活动报备0622",
      label: "IMC_0000EUBW/【test】【小屏】活动报备0622"
    }
  ],
    status: [{
        value: "未处理",
        label: "未处理"
      },
      {
        value: "处理中",
        label: "处理中"
      },
      {
        value: "订单成功",
        label: "订单成功"
      },
      {
        value: "订单失败",
        label: "订单失败"
      }
    ],
    value: [],
    option: [{
      value: 'zhinan',
      label: '指南',
      children: [{
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'jiaohu',
        label: '组件交互文档'
      }]
    }, {
      value: 'zujian',
      label: '组件',
      children: [{
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'jiaohu',
        label: '组件交互文档'
      }]
    }, {
      value: 'ziyuan',
      label: '资源',
      children: [{
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'jiaohu',
        label: '组件交互文档'
      }]
    }]
  },
  mutations: {
    changeTitle(state, payload){
      state.title = payload;
    },
    changePic(state, payload){
      state.imgSrc = payload;
    },
    changeColor(state, payload){
      state.color = payload;
      state.input = payload;
    },
    changeTool(state, payload){
      state.toolCom = payload;
    },
    changeContent(state, payload){
      state.textContent.push(payload);
    },
    changeDrag(state, payload){
      state.dragTo = payload;
    },
    changeStyle(state, payload){
      state.styleArr = payload;
    },
    changeList(state, payload){
      state.textList.push(payload);
    },
    changeData(state, payload){
      var start = state.index;
      state.data.splice(start, 1, payload);
    },
    changeIndex(state, payload){
      state.index = payload;
    }
  },
  actions: {},
  modules: {}
})