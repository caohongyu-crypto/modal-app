<template>
    <draggable
    class="drag-from"
    :list="dataList"
    :group="{name: 'special', pull: 'clone', put: false}"
    >
    <div
    v-for="(element, index) in dataList"
    :key="index + 1"
    v-html="element.text"
    >
    </div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    props:{
        dataList:[Array]
    },
    components:{
        draggable
    }
}
</script>