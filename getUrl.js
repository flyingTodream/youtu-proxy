const UNM = require("@unblockneteasemusic/rust-napi");
const executor = new UNM.Executor();

const ctx = {
    enableFlac: null,
    proxyUri: null,
    searchMode: 1,
    config: {
        'joox:cookie': null,
        'qq:cookie': null,
        'ytdl:exe': "./youtube-dl",
    },
}
async function getPlayUrl(songName, artistsName, id) {
    try {


        const searchResult = await executor.search(
            ['ytdl'],
            {
                id: String(id),
                name: songName,
                artists: [
                    {
                        id: "",
                        name: artistsName,
                    },
                ],
            },
            ctx
        );
        return searchResult
    } catch (error) {
        return error
    }
}


module.exports = {
    getPlayUrl
}
