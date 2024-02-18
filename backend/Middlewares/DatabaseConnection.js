import {Sequelize} from 'sequelize'

// const sqlz = new Sequelize()
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // or any other dialect like 'postgres', 'sqlite', 'mssql'
  });

  sequelize.authenticate().then(()=>{console.log('database connected')}).catch((err)=>{console.log('error databse',err)})
  

  export default sequelize;