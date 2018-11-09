// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const collectionObj=db.collection('records')


// 云函数入口函数
exports.main = async (event, context) => {
    let {userInfo,data}=event
    let id=data.id
    return collectionObj.doc(id).update({
        data:{
            isUsed:0
        }
    }).then(res=>{
        return res
    })
}