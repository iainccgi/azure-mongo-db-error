var testData1 = {
    conversationID: "442fd8f9-f5b9-44a4-8a41-c091b4049d1e",
    client: {
        caseID: "FS-101"
    },
    business: {},
    discourse: [{
        correlationID: "2b265eef-d3d0-4c5b-85aa-cbaae41f7e8c",
        messages: [{
            messageID: "810931dd-83f7-4292-83db-897396ea5772",
            timestamp: {
                created: new Date('October 24, 2018 10:30:00')
            }
        }]
    }]
}

var testData2 = {
    conversationID: "24746192-ad3a-4976-afc7-5ceb15c6cf10",
    client: {
        caseID: "FS-122"
    },
    business: {},
    discourse: [{
        correlationID: "1106d0a7-c043-451e-9d85-1a3c0c3a22b1",
        messages: [{
            messageID: "24a3ce75-8d66-44f4-b74c-737f0b34b54e",
            timestamp: {
                created: new Date('October 25, 2018 14:40:00')
            }
        }]
    }]
}

var testData3 = {
    conversationID: "aee4d90f-ffbd-4755-bb86-a07e7c7253a1",
    client: {
        caseID: "FS-153"
    },
    business: {},
    discourse: [{
        correlationID: "f236e4e7-4bee-4ffc-8b13-02a047f09d20",
        messages: [{
            messageID: "522691a7-88f8-48c2-9ae6-12f6f980b657",
            timestamp: {
                created: new Date('October 26, 2018 19:24:00')
            }
        }]
    }]
}

module.exports = {
    testData1,
    testData2,
    testData3
}
