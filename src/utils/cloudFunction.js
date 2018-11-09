module.exports = {
    cloudFunction(name, data) {
        return wx.cloud.callFunction({ name, data })
    },
}