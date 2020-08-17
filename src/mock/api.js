import Mock from 'mockjs'
Mock.mock('/api/user/login',{
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

Mock.mock('/api/products/10012',{
    "status":0,
    "data":[
        {   
            "id": 100121,
            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90",
            "name": "小米10至尊纪念版",
            "product":"5299元起"
        },
        {   
            "id": 100122,
            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90",
            "name": "小米10 Pro",
            "product":"4999元起"
        },
        {   
            "id": 100123,
            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=160&h=110&f=webp&q=90",
            "name": "小米10",
            "product":"3699元起"
        },
        {   
            "id": 100124,
            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90",
            "name": "小米10 青春版 5G",
            "product":"1899元起"
        },
        {   
            "id": 100125,
            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=160&h=110&f=webp&q=90",
            "name": "小米MIX Alpha",
            "product":"19999"
        }
    ]
})