  exports.newWelcomeMemberMessage = (displaynName) => {
      return {
          "type": "flex",
          "altText": "Welcome New Member",
          "contents": {
              "type": "bubble",
              "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [{
                          "type": "text",
                          "text": "New Member",
                          "weight": "bold",
                          "size": "xl"
                      },
                      {
                          "type": "text",
                          "text": `Welcome, ${displaynName}`,
                          "margin": "md",
                          "wrap": true
                      },
                      {
                          "type": "text",
                          "text": "Points: 1 / 10",
                          "margin": "md",
                          "wrap": true
                      }
                  ]
              }
          }
      }
  }
  exports.newWelcomeBackMemberMessage = (displaynName) => {
      return {
          "type": "flex",
          "altText": "Welcome Back Hooley!!",
          "contents": {
              "type": "bubble",
              "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [{
                          "type": "text",
                          "text": "Welcome Back",
                          "weight": "bold",
                          "size": "xl"
                      },
                      {
                          "type": "text",
                          "text": "ยินดีต้อนกลับมาอีกครั้ง",
                          "margin": "md",
                          "wrap": true
                      },
                      {
                          "type": "text",
                          "text": `คุณ ${displaynName}`,
                          "margin": "md",
                          "wrap": true
                      }
                  ]
              }
          }
      }
  }
  exports.newWelcomeMemberFlex = (displaynName) => {
      return {
          "type": "flex",
          "altText": "Welcome New Member",
          "contents": {
              "type": "bubble",
              "size": "giga",
              "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [{
                          "type": "image",
                          "url": "https://bucket.ex10.tech/images/ee748e89-cd7c-11ee-97d4-0242ac12000b/originalContentUrl.png",
                          "aspectRatio": "21:9",
                          "aspectMode": "cover",
                          "size": "full"
                      },
                      {
                          "type": "image",
                          "url": "https://bucket.ex10.tech/images/4907b077-cd7f-11ee-97d4-0242ac12000b/originalContentUrl.jpg",
                          "offsetBottom": "110px",
                          "offsetEnd": "125px",
                          "size": "40px"
                      },
                      {
                          "type": "text",
                          "text": displaynName,
                          "offsetBottom": "195px",
                          "offsetStart": "80px"
                      }
                  ],
                  "height": "200px"
              }
          }
      }
  }