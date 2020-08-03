<template>
    <draggable 
    class="drag-to"
    :group="{name:'special'}"
    :list="dataList"
    :style="{backgroundImage: 'url(' + newSrc + ')', backgroundSize:'cover',backgroundColor:newColor}"
    >
    <div class="element" v-for="(item , index) in dataList"
    :key="index"
    @click="handleIndex(index ,item.item, $event)"
    >
    <component :is="item.name" :text="item.text"></component>
    <!-- {{item.name}} -->

    </div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import SpecialBasic from './SpecialBasic'
import {mapState} from 'vuex'
export default {
    components:{
        draggable,
        SpecialBasic
    },
    data(){
        return {
        }
    },
    computed:{
        ...mapState({
            newSrc:state => state.imgSrc,
            newColor:state => state.color,
            newContent:state => state.textContent,
        }),
        ...mapState(['data']),
        dataList:{
            get(){
                return this.data;
            },
            set(val){
                this.$store.commit('changeData', val);
            }
        }

        
    },
    watch:{
        dataList(){
            console.log(this.dataList);
        }
    },
    methods:{
        handleIndex(index ,item, event){//修改每个组件对应的功能栏
            this.$store.commit('changeTool', item);
            var value = event.target.innerHTML;
            console.log(event.toElement.innerHTML);
            var obj = {};
            var len = event.toElement.style.length;
            for(var i = 0; i < len; i++){
                var key = event.toElement.style[i];
                var newValue = event.toElement.style[key];
                obj[key] = newValue;
            }
            this.$store.commit('changeStyle', obj);
            this.$store.commit('changeDrag', value);
            this.$store.commit('changeIndex', index);
        },
        
    },
    
}
</script>

<style scoped>
.drag-to{
    padding: 5px;
    width: 320px;
    height: 540px;
    text-align: center;
    position: absolute;
    left: -400px;
    top: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5) !important;
}

.element{
    width: 100%;
    margin: 5px auto;
    cursor: pointer;
}
</style>