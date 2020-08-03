<template>
    <ul class="special-sub-menu">
        <li v-for="(item, index) in tabMenu" :key="index" :class="{'active':active==index}" @click="() => handleClick(item, index)">
            {{ item.label }}
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        tabMenu:[Array],
        active:[String, Number]
    },
    data(){
        return {
            specialSubMenuActive: null
        }
    },
    methods:{
        handleClick(item, index){
            this.specialSubMenuActive = '' + index;
            this.$emit('handleClick', item, index);
        }
    }
}
</script>

<style scoped>
.special-sub-menu{
    overflow: hidden;
    margin: 5px 0;
}
.special-sub-menu li{
    float: left;
    font-size: 12px;
    padding: 15px 0 5px 0;
    margin: 0 15px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
}
.active{
    color: #1593ff;
    border-bottom: 1px solid #1593ff !important;
}
</style>