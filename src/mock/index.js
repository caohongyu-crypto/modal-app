import Mock from 'mockjs'

let demoList = {
      'rows|300': [{
        'date|1':['兑换资源20200701', '[test]兑换码资源0701', '答题流量', '[test]会员资源0622'],
        'address': '@datetime',
        'manage|0-1000': 23,
        'number|0-1000': 1,
        'name|1': ['流量', '直充权益', '短信兑换码', '牧羊犬资源'],
        'status|1':['上架', '下架', '待审核'],
        'change':'详情 下架'
      }]
  };

  Mock.mock(RegExp('/api/meituan/city/' + '.*'), 'get', demoList);


let list = {
  'row|300':[{
    'date|1':['兑换资源20200701', '[test]兑换码资源0701', '答题流量', '[test]会员资源0622'],
    'actice|1':['流量赠送', '充值活动', '流量兑换', '获奖'],
    'type|1': ['流量', '直充权益', '短信兑换码', '牧羊犬资源'],
    'time':'@datetime',
    'ascription|1':['china', '中国移动', '咪咕视频', '咪咕阅读', '咪咕音乐'],
    'person': '@name',
    'change':'详情 下架'
  }]
}

Mock.mock(RegExp('/api/meituan/list/' + '.*'), 'get', list);

let orderList = {
  'row|300':[{
    'id|200000-210000':210000,
    'file':'templateBatchRecharge.xlsx',
    'name|1': ['答题流量', '专用资源', '兑换测试资源', '兑换码测试'],
    'result|1':['处理成功', '处理失败'],
    'sum|0-10':1,
    'person': '@cname',
    'order|1':['充值成功', '充值失败'],
    'change':'详情 下架'
  }]
}

Mock.mock(RegExp('/api/meituan/header/' + '.*'), 'get', orderList);