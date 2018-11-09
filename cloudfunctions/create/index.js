// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const collectionObj=db.collection('records')

const getRandom=function(min,max){
    return Math.floor(Math.random() * (max - min)) + min
}

// 云函数入口函数
exports.main = async (event, context) => {
    let {userInfo,data}=event
    let {openId,appId}=userInfo
    if(!data.name){
        return null
    }
    data.img_url=getRandom(1,32)+'.png'
    // 删除为假删除,isUsed=0为删除
    data.isUsed=1
    console.log('>>>>>>>>>>',data.topping)
    // 表示是修改已有的
    if(data._id){
        return collectionObj.doc(data._id).update({
            data:{
                date:data.date,
                remarks:data.remarks,
                topping:data.topping,
                utime:db.serverDate()
            }
        }).then(res=>{
            return res
        }).catch(console.error)
    }
    return collectionObj.add({
        data:{...data,openId,appId,ctime: db.serverDate(),utime:db.serverDate()}
    }).then(res=>{
        return res
    }).catch(console.error)
}