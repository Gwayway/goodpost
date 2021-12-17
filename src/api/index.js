import requests from './request';
const comfirRequest = id => {
    requests({
        url: "/callbackByHap",
        method: "POST",
        data: {
            "docHeaderId": id,
            "extHeaderId": id,
            "flowStatus": "success",
            "processDate": "",
            "processMessage": "",
            "nodeName": "",
            "operator": "",
            "operatorCode": "",
            "actionDate": ""
        }
    });
}
export default comfirRequest;