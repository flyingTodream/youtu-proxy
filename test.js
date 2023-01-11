const { getPlayUrl } = require('./getUrl')
const fs = require('fs')
const request = require('request')
let u = "https://rr4---sn-a5msenek.googlevideo.com/videoplayback?expire=1673427898&ei=WSe-Y-XHMofekgbnuoKIDQ&ip=107.152.47.42&id=o-AESi4aTvuzTqQMvwbv4TS8peuU6GMoOxRULJwYz6N_8R&itag=251&source=youtube&requiressl=yes&mh=JG&mm=31%2C29&mn=sn-a5msenek%2Csn-a5mekndl&ms=au%2Crdu&mv=m&mvi=4&pl=26&initcwndbps=2408750&vprv=1&mime=audio%2Fwebm&ns=hgcS3JaYjNmuNi72hQihBCkK&gir=yes&clen=4398250&dur=269.801&lmt=1616990878332343&mt=1673406050&fvip=4&keepalive=yes&fexp=24007246&c=WEB&txp=5431432&n=PpvJhxvRQCnK5cij&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhANV5mazjFJdbqAW07SWRn5YO73R1rx7vrCbd1IPQbqS6AiBlelN7hPkprxNhD_fYsCcwgdRHZssyqGwDVTdi3h5NDw%3D%3D&sig=AOq0QJ8wRAIgDltempzQXy-9OaKU_F2fv__oYifcAYRsmWKMEDZSXYwCIFCCE037Vj2NsvG-nTho1eOnXNulQb65C1bylpKOREDF"

async function exe() {
    // console.log(mp3ToAac)
    const d = await getPlayUrl('晴天', '周杰伦')
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
exe()