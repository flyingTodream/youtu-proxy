const Koa = require('koa');
const app = new Koa();
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
    const exeStr = `touch ${Date.now()}.txt`
    await execu(exeStr)
    await exec("ls")
        .then(function (result) {
            var stdout = result.stdout;
            console.log(stdout);
            ctx.body = stdout;
        })
    // ctx.body = "ok"

});



app.listen(3008, () => {
    console.log('3008项目启动')
});
