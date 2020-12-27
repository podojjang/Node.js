const { sequelize } = require('./models'); 
// models/index.js를 가리킨다
sequelize.sync({ force: false })
.then(() => {
  console.log('데이터베이스 연결 성공');
})
.catch((err) => {
  console.error(err);
});
