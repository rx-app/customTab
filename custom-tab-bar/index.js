// components/custom-tab-bar/index.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    "list": [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "home-o",
      "selectedIconPath": "home"
    }, {
      "pagePath": "/pages/logs/logs",
      "text": "日志",
      "iconPath": "setting-o",
      "selectedIconPath": "setting"
    }]
  },
  methods:{
    onChange(event){
      this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  },
  
})