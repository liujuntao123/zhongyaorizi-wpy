const fixSingleNumber=number=>number<=9?'0'+number:number
module.exports = {
    formatDate: function (date) {
        if (!date) {
            return ''
        }
        let d=date
        return d.getFullYear() + '-' + fixSingleNumber(d.getMonth() + 1) + '-' + fixSingleNumber(d.getDate())
    },
    fixSingleNumber,
}