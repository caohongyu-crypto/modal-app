<template>
    <div style="word-break: break-all;"
    v-html="text"
    ref="basic"
    >
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props:{
        text:[String]
    },
    data(){
        return {
        }
    },
    methods:{
       
    },
    computed:{
        ...mapState(['textContent'])
    },
    mounted(){
        console.log(this.$refs.basic.textContent);
        var value = this.$refs.basic.textContent;
        if(this.textContent.indexOf(value) === -1){
            this.$store.commit('changeContent', value);
        }
    }
}
</script>