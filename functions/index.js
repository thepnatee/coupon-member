/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const flex = require('./flex');
const line = require('./line.util');
const {
    setGlobalOptions
} = require("firebase-functions/v2");

setGlobalOptions({
    region: "asia-northeast1",
    memory: "1GB",
    concurrency: 40,
})

const {
    onRequest
} = require("firebase-functions/v2/https");

exports.webhook = onRequest(async (request, response) => {

    if (request.method !== "POST") {
        return response.send(request.method);
    }

    const events = request.body.events

    for (const event of events) {

        if (event.type === "follow") {

            const profile = await line.getProfile(event.source.userId)

            if (event.follow.isUnblocked) {
                await line.reply(event.replyToken, [flex.newWelcomeBackMemberMessage(profile.data.displayName)])
            } else {
                await line.reply(event.replyToken, [flex.newWelcomeMemberMessage(profile.data.displayName), flex.newWelcomeMemberFlex(profile.data.displayName)])
            }
            return response.end()

        }
    }


    return response.end();

});