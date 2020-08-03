<template>
  <div class="special-sider-menu">
    <ul class="menu">
      <li
        v-for="(item, index) in menuList"
        :key="index"
        class="menu-item"
        :class="{'active':active == index}"
        @click="() => handleClick(item, index)"
      >
        <i :class="item.icon"></i>
        <span>{{item.label}}</span>
        <em></em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuList: [Array],
    active: [String, Number]
  },
  data() {
    return {
      specialSideMenuActive: null
    };
  },
  methods: {
    handleClick(item, index) {
      //保证得到的是一个字符串数字
      this.specialSideMenuActive = "" + item.value;
      this.$emit("handleClick", item, index);
    }
  }
};
</script>

<style scoped>
.special-sider-menu {
  border-right: 1px solid #d8d8d8;
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  width: 69px;
}
li {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  color: #000;
  position: relative;
}
i {
  display: block;
  margin-bottom: 7px;
  font-size: 20px;
}
em {
  display: none;
  position: absolute;
  right: -1px;
  top: 30px;
  border-right: 6px solid #fff;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  width: 0;
  height: 0;
}
.active {
  background-color: #549fff;
  color: #fff;
}
.active em {
  display: block;
}
</style>