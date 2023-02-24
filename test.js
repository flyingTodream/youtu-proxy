const { getPlayUrl } = require('./getUrl')
const fs = require('fs')
const request = require('request')
let url = "https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"
const data = {
    "context": {
        "client": {
            "clientName": "WEB",
            "clientVersion": "2.20201021.03.00"
        }
    },
    "query": "晴天 - 周杰伦 official lyric audio music"
}
async function requestData() {
    // console.log(mp3ToAac)
    // const d = await getPlayUrl('晴天', '周杰伦')
    return new Promise((resolve) => {
        request({
            url: url,
            "method": "post",
            body: JSON.stringify(data)
        }, function (error, response) {
            if (response && response.body) {
                const body = JSON.parse(response.body)
                resolve(body)
            }
        });
    })
}

function play() {
    return new Promise((resolve) => {
        let u = "https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"
        let d = {
            "context": {
                "client": {
                    "clientName": "WEB",
                    "clientVersion": "2.20201021.03.00"
                }
            },
            "videoId": "3-DteAHyRnI"
        }
        console.log(u)

        request({
            url: u,
            "method": "post",
            body: JSON.stringify(d)
        }, function (error, response) {
            if (response && response.body) {
                const body = JSON.parse(response.body)
                console.log(body)
                resolve(body)
            }
        });
    })
}

const toBuffer = (url) => {
    let options = {
        url: u,
        "method": "get",
    };
    return new Promise((resolve, reject) => {
        let buffer = Buffer.from('');
        request(options).on('data', async chunk => {
            if (chunk.length) {
                buffer = Buffer.concat([buffer, chunk]);
            }
        }).on('end', () => {
            resolve(buffer)
        })
    })
}
// play()
module.exports = {
    requestData,
    play
}