// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  toIndex(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  onShow(){
    this.getTabBar().setData({
      active:1
    })
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
