<template>
  <draggable
    class="drag-from"
    :list="textList"
    :group="{name: 'special', pull: 'clone', put: false}"
  >
    <div class="element" v-for="(element, index) in textList" :key="index + 1">
        <component :is="element.name"
        :text="element.text"
        >
        </component>
    </div>
  </draggable>
</template>

<script>
// import SpecialDragFrom from "../common/SpecialDragFrom";
import draggable from "vuedraggable";
import SpecialBasic from './SpecialBasic'
import {mapState} from 'vuex'
export default {
  components: {
    draggable,
    SpecialBasic
  },
  data() {
    return {
      myArray: [
        {
          name: "SpecialTextBasic",
          type: "text",
          option: {
            style: {
              paddingTop: "0",
              paddingBottom: "0",
              paddingLeft: "20px",
              paddingRight: "20px"
            },
            text: `<p style="text-align: center;"><span style="font-size: 36px;color: #000000;font-weight: bolder">大标题</span></p>`,
            events: {
              click: {}
            }
          }
        },
        {
          name: "SpecialTextBasic",
          type: "text",
          option: {
            style: {
              paddingTop: "0",
              paddingBottom: "0",
              paddingLeft: "20px",
              paddingRight: "20px"
            },
            text: `<p style="text-align: center;"><span style="font-size: 34px;color: #000000;font-weight: bolder">标题</span></p>`,
            events: {
              click: {}
            }
          }
        },
        {
          name: "SpecialTextBasic",
          type: "text",
          option: {
            style: {
              paddingTop: "0",
              paddingBottom: "0",
              paddingLeft: "20px",
              paddingRight: "20px"
            },
            text: `<p style="text-align: center;"><span style="font-size: 32px;color: #000000;font-weight: bolder">副标题</span></p>`,
            events: {
              click: {}
            }
          }
        },
        {
          name: "SpecialTextBasic",
          type: "text",
          option: {
            style: {
              paddingTop: "0",
              paddingBottom: "0",
              paddingLeft: "20px",
              paddingRight: "20px"
            },
            text: `<p style="text-align: center;"><span style="font-size: 28px;color: #000000;">小标题</span></p>`,
            events: {
              click: {}
            }
          }
        },
        {
          name: "SpecialTextBasic",
          type: "text",
          option: {
            style: {
              paddingTop: "0",
              paddingBottom: "0",
              paddingLeft: "20px",
              paddingRight: "20px"
            },
            text: `<p style="text-align: center;"><span style="font-size: 24px;color: #000000;">正文内容</span></p>`,
            events: {
              click: {}
            }
          }
        },
        {
          name: "SpecialTextOne",
          type: "text",
          option: {
            style: {
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "15px",
              paddingRight: "15px"
            },
            text: `<p>这是文本信息这是文本信息这是本信息这是文本信息这是文本信这是文本信息这是文本信息这是</p>`,
            events: {
              click: {}
            }
          }
        },
        {
          name: "SpecialTextTwo",
          type: "text",
          option: {
            style: {
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "15px",
              paddingRight: "15px"
            },
            text: `<p style="text-align: center;">这是文本信息</p>`,
            events: {
              click: {}
            }
          }
        }
      ],
      // textList: [
      //   {
      //     name: "SpecialBasic",
      //     item:'Text',
      //     text: `<p style="text-align: center;"><span style="font-size: 36px;color: #000000;font-weight: bolder">大标题</span></p>`,
      //   },
      //   {
      //     name: "SpecialBasic",
      //     item:'Text',
      //     text: `<p style="text-align: center;"><span style="font-size: 34px;color: #000000;font-weight: bolder">标题</span></p>`
      //   },
      //   {
      //     name: "SpecialBasic",
      //     item:'Text',
      //     text:`<p style="text-align: center;"><span style="font-size: 32px;color: #000000;font-weight: bolder">副标题</span></p>`
      //   },
      //   {
      //     name: "SpecialBasic",
      //     item:'Text',
      //     text:`<p style="text-align: center;"><span style="font-size: 15px;color: #000000;font-weight: 400">这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</span></p>`
      //   }
      // ],
    };
  },
  computed:{
    ...mapState(['textList'])
  }
};
</script>

<style scoped>
.element{
    width: 100%;
    margin: 10px auto;
    cursor: pointer;
    padding: 5px;
}

.element:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
}
</style>