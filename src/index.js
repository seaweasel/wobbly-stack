const app = require('./app');

app.listen(process.env.PORT, ()=>{
   console.log(`Away We Go on ${process.env.PORT}`);
   console.log(process.env.PORT);
});