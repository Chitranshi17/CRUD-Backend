const mongoose = require('mongoose');

const connectDB = async() => {
 try{
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(conn)
  console.log("DB Connection Success :".red , conn.connection.host);
 }catch(error){
  console.log("Error In DB Connection");
 }
}

module.exports = {connectDB}
