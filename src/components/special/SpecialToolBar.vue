<template>
    <component :is="componentName"></component>
</template>

<script>
import SpecialPageTool from './SpecialPageTool'
import SpecialTextTool from './SpeciaTextTool'
import {mapState} from 'vuex'
export default {
    data(){
        return{

        }
    },
    components:{
        SpecialPageTool,
        SpecialTextTool
    },
    computed:{
        ...mapState(['toolCom']),
        componentName(){
            let mi = this.toolCom || 'Page';
            return `Special${mi}Tool`;
        }
    }
}
</script>

<style scoped>

</style>