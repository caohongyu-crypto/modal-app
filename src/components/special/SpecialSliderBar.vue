<template>
  <div class="header">
    <SpecialSliderMenu
      :menuList="dataList"
      :active="specialSideMenuActive"
      @handleClick="sideMenuClick"
    ></SpecialSliderMenu>
    <div class="special-slider-content">
      <SpecialSubTabs
        v-if="specialSubTabList"
        :tabList="specialSubTabList || []"
        :active="specialSubTabActive"
        @handleClick="subTabClick"
      ></SpecialSubTabs>
      <SpecialSubMenu
        v-if="specialSubMenuShow"
        :tabMenu="specialSubMenuList"
        :active="specialSubMenuActive"
        @handleClick="subMenuClick"
      ></SpecialSubMenu>
      <div style="margin: 20px;">
        <SpecialTextGroup></SpecialTextGroup>
      </div>
    </div>
  </div>
</template>

<script>
import SpecialSliderMenu from "./SpecialSilderMenu";
import SpecialSubTabs from "./SpecialSubTabs";
import SpecialSubMenu from "./SpecialSubMenu";
import SpecialTextGroup from '../common/SpecialTextGroup'
export default {
  props: ["dataList"],
  data() {
    return {
      specialSideMenuActive: "0",
      specialSubTabActive: "0",
      specialSubMenuActive: "0",
      componentName: "SpecialTextGroup"
    };
  },
  components: {
    SpecialSliderMenu,
    SpecialSubTabs,
    SpecialSubMenu,
    SpecialTextGroup
  },
  methods: {
    sideMenuClick(item, index) {
      this.specialSideMenuActive = index;
      this.specialSubTabActive = "0";
      this.specialSubMenuActive = "0";
      // this.componentName = this.specialSubMenuList[0].value;
    },
    subTabClick(item, index) {
      this.specialSubTabActive = index;
      this.specialSubMenuActive = "0";
    },
    subMenuClick(item, index) {
      this.specialSubMenuActive = index;
    }
  },
  computed: {
    specialSubTabList() {
      return this.dataList[this.specialSideMenuActive].tabList;
    },
    specialSubMenuList() {
      var s1 = this.dataList[this.specialSideMenuActive].subMenuList;
      return s1 || this.specialSubTabList[this.specialSubTabActive].subMenuList;
    },
    specialSubMenuShow() {
      return this.specialSubTabList
        ? this.specialSubTabList[this.specialSubTabActive].subMenuShow !== false
        : true;
    }
  }
};
</script>

<style scoped>
.header {
  height: calc(100% - 60px) !important;
}

.special-slider-content {
  position: absolute;
  top: 60px;
  left: 70px;
  width: 279px;
  bottom: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
  border-right: 1px solid #d8d8d8;
}
</style>