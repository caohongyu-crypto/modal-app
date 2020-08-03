export const specialSideMenuList = [{
    label: '基础元素',
    icon: 'el-icon-menu',
    value: '0',
    subMenuList: [{
      label: '文本',
      value: 'SpecialTextGroup'
    }, {
      label: '图片',
      value: 'SpecialImageGroup'
    }, {
      label: '按钮',
      value: 'SpecialButtonGroup'
    }, {
      label: '布局',
      value: 'SpecialLayoutGroup'
    },
    {
      label: '其他',
      value: 'SpecialOtherGroup'
    },
    ]
  }, {
    label: '组件模板',
    icon: 'el-icon-brush',
    value: '1',
    tabList: [{
      label: '内容类',
      value: '0',
      subMenuList: [{
        label: '轮播图',
        value: 'SpecialSwiperGroup'
      }, {
        label: '图文类',
        value: 'SpecialGraphicGroup'
      }, {
        label: '视频类',
        value: 'SpecialVideoGroup'
      }, {
        label: '版权声明',
        value: 'SpecialCopyrightGroup'
      }, {
        label: '内容推荐',
        value: 'SpecialRecommendTemplate'
      }, {
        label: '活动推荐触点',
        value: 'SpecialActivityRecommendGroup'
      }]
    }, {
      label: '营销类',
      value: '1',
      subMenuList: [{
        label: '抽奖',
        value: 'SpecialLotteryGroup'
      },
      {
        label: '领取按钮',
        value: 'SpecialRecieveGroup',
      },
      {
        label: '投票',
        value: 'SpecialVoteGroup',
      },
      {
        label: '商品优惠',
        value: 'SpecialProductDiscountGroup',
      },
      {
        label: '任务',
        value: 'SpecialTaskGroup',
      },
      {
        label: '答题',
        value: 'SpecialQa'
      }
      ]
    }, {
      label: '通用类',
      value: '2',
      subMenuList: [{
        label: '浮层',
        value: 'SpecialDiversionGroup'
      }, {
        label: '登录',
        value: 'SpecialLoginGroup'
      }]
    }]
  },
  {
    label: '表单',
    icon: 'el-icon-document',
    value: '0',
    subMenuList: [{
      label: '输入表单',
      value: 'SpecialFormGroup'
    },
    {
      label: '其他',
      value: 'SpecialSubmitGroup'
    },
    ]
  },
  {
    label: '单页模板',
    icon: 'el-icon-brush',
    value: '2',
    tabList: [{
      label: '模板中心',
      value: '0',
      subMenuShow: false,
      subMenuList: [{
        label: '模板中心',
        value: 'SpecialTemplateGroup'
      }]
    }, {
      label: '我的模板',
      value: '1',
      subMenuShow: false,
      subMenuList: [{
        label: '我的模板',
        value: 'SpecialMyTemplateGroup'
      }]
    }]
  }
  ]