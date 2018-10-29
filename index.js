require('dotenv').config();
var mongoose = require('mongoose');
var data = require('./data');
var ModelA = require('./models').ModelA;
var ModelB = require('./models').ModelB;
var ModelC = require('./models').ModelC;

mongoose.connect(process.env.COSMOS_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true, 
}).then(() => {
    console.log('Connection to CosmosDB successful')

    let modelA1 = new ModelA(data.testData1);
    let modelA2 = new ModelA(data.testData2);
    let modelA3 = new ModelA(data.testData3);

    let modelB1 = new ModelB(data.testData1);
    let modelB2 = new ModelB(data.testData2);
    let modelB3 = new ModelB(data.testData3);

    let modelC1 = new ModelC(data.testData1);
    let modelC2 = new ModelC(data.testData2);
    let modelC3 = new ModelC(data.testData3);
    
    ModelA.on('index', function() {
        ModelA.create(modelA1, modelA2, modelA3).then(() => {
            console.log("Model A saved succesfully");
        }) 
        .catch((err) => {
            console.log("Model A failed to save");
            console.log(err);
        })
    });

    ModelB.on('index', function() {
        ModelB.create(modelB1, modelB2, modelB3).then(() => {
            console.log("Model B saved succesfully");
        }) 
        .catch((err) => {
            console.log("Model B failed to save");
            console.log(err);
        })
    });

    ModelC.on('index', function() {
        ModelC.create(modelC1, modelC2, modelC3).then(() => {
            console.log("Model C saved succesfully");
        }) 
        .catch((err) => {
            console.log("Model C failed to save");
            console.log(err);
        })
    });
  })
  .catch((err) => console.error(err));
