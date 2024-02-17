const functions = require("firebase-functions");
const axios = require("axios");
const qs = require('qs');



const LINE_MESSAGING_API = process.env.LINE_MESSAGING_API;
const LINE_MESSAGING_OAUTH_ISSUE_TOKENV3 = process.env.LINE_MESSAGING_OAUTH_ISSUE_TOKENV3;

const LINE_CHANNEL_ID = process.env.LINE_CHANNEL_ID;
const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET;

exports.getProfile = async (userId) => {
    const issue_token = await issueTokenV3()
    const access_token = issue_token.access_token

    console.log(access_token);
    console.log(`${LINE_MESSAGING_API}/profile/${userId}`);

    return await axios({
        method: 'get',
        maxBodyLength: Infinity,
        url: `${LINE_MESSAGING_API}/profile/${userId}`,
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        },
    })

};

exports.reply = async (token, payload) => {
    const issue_token = await issueTokenV3()
    const access_token = issue_token.access_token

    return axios({
        method: "post",
        url: `${LINE_MESSAGING_API}/message/reply`,
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            replyToken: token,
            messages: payload
        })
    });
};

/* Stateless Channel Access Token : 15 minute */
async function issueTokenV3() {
    let data = qs.stringify({
        'grant_type': 'client_credentials',
        'client_id': LINE_CHANNEL_ID,
        'client_secret': LINE_CHANNEL_SECRET
    });
    let response = await axios({
        method: 'post',
        maxBodyLength: Infinity,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: LINE_MESSAGING_OAUTH_ISSUE_TOKENV3,
        data: data
    })
    return response.data
}