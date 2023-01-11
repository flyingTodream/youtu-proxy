const Koa = require('koa');
const app = new Koa();
const { getPlayUrl } = require('./getUrl')

var exec = require('child-process-promise').exec;

// const { getPlayUrl } = require('./getUrl')
async function execu(exe) {
    await exec(exe)
        .then(function (result) {
            var stdout = result.stdout;
            console.log(stdout);
            // var stderr = result.stderr;
            // console.log('stdout: ', stdout);
            // console.log('stderr: ', stderr);
        })
        .catch(function (err) {
            console.error('ERROR: ', err);
        });
}

app.use(async ctx => {
    const exeStr = `chmod 777 ./youtube-dl`
    await execu(exeStr)
    const d = await getPlayUrl()
    // await exec("ls ./file")
    //     .then(function (result) {
    //         var stdout = result.stdout;
    //         ctx.body = stdout;
    //     })
    ctx.body = d

});



app.listen(3008, () => {
    console.log('3008项目启动')
});
