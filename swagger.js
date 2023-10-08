const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'recipies Api',
        description: 'recipies Api'
    },
    host: 'localHost:3000',
    schemes:['http','https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);

//"host": "domesticatedproductoriginsrecipies.onrender.com",
//"schemes": ["https"],