import Mock from 'mockjs'
Mock.mock('api/user/login',{
    "status":0,
    "data":{
        "id":12,
        "username":"admin",
        "email":"315@qq.com",
        "phone":1507346,
        "createTime":111111,
        "updatetime":222222
    }
});