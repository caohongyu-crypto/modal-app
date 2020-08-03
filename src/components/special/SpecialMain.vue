<template>
    <div class="special-drag-to">
        <el-input v-model="input" placeholder="未命名标题"></el-input>
        <SpecialDragTo></SpecialDragTo>
    </div>
</template>

<script>
import SpecialDragTo from '../common/SpecialDragTo'
import {mapState} from 'vuex'
export default {
    components:{
        SpecialDragTo
    },
    data(){
        return {
        }
    },
    computed:{
        ...mapState(['title']),
        input:{
            get(){
                return this.title
            }
        }
    }
}
</script>

<style scoped>
.special-drag-to{
    position: relative;
}

.el-input{
    position: absolute;
    left: -450px;
    top: 5px;
}
</style>