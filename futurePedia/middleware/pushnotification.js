const FCM = require('fcm-node');

//pushnotification  api
const pushnotification = async (fcmToken, title, body) => {
   
    try {
    var serverKey = process.env.FIREBASEKEY;
    var fcm = new FCM(serverKey);
    var token = fcmToken;

    var message = {
        to: token,
        collapse_key: 'xxxxxxxxxxxxxx',
        notification: { title: title, body:body  },
        data: { my_key: 'my value', contents: "abcv/",sound:'default' }
    };
    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!",err)
        } else {
            console.log("Successfully sent with response: ", response)
        }
    })

    }
    catch (error) {
        console.log('error in login api', error.message)
    }
}

module.exports = {pushnotification}