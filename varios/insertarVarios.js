var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ADSI2364482",
    "documents": [
        {
        
            "id":225,
            "title":"Gorra",
            "price":22.5,
            "description":"gorra azul"
        },
        {
            "id":226,
            "title":"Bufanda",
            "price":35.5,
            "description":"Bufanda tejida"
        },
        {
            "id":227,
            "title":"tapabocas",
            "price":10.5,
            "description":"tapabocas blancos"
        }
    ]
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-pfnpp/endpoint/data/v1/action/insertMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'LzNyAh9PS3ATY13qhV5Os0GDj3mOqdxapiqOV139VUODdmtpVtBZo2gzWyAZa2Ik',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
