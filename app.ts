import * as Koa from 'koa';
import * as IP from 'ip'
import axios from 'axios'


// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

const app = new Koa();

app.use(async ctx => {
    let a = await axios.get('https://ip.qust.me/ip')
    console.log(a)
    ctx.body = a.data
})

app.listen(3000, () => {
    console.log('app is running at port 3000')
})