// 显示繁忙提示
const showBusy = (text, duration) => wx.showToast({
  title: text,
  icon: 'loading',
  duration: duration
})

// 显示提示
const showTip = text => wx.showToast({
  title: text,
  icon: 'none'
})

// 显示成功提示
const showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})

// 显示失败提示
const showModel = (title, content, cb, showCancel=false) => {
  if (!content) content = ''
  content = typeof content === 'string' ? content : JSON.stringify(content)
  wx.hideToast()
  let modalOp = {
    title,
    content: content,
    showCancel: false,
    success: function(res) {
      if (res.confirm) {
        cb && cb(true)
      } else {
        cb && cb(false)
      }
    }
  }
  if (showCancel) {
    modalOp.showCancel=true
  }
  wx.showModal(modalOp)
}

/**
 * 弹出加载提示
 */
const loading = (title = '加载中') => {
  wx.showLoading({
    title: title,
    mask: true
  })
}

/**
 * 加载完毕
 */
const loaded = () => {
  wx.hideLoading()
}

module.exports = {
  showBusy,
  showSuccess,
  showModel,
  loading,
  loaded,
  showTip
}
