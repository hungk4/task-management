const mongoose = require('mongoose');

module.exports.connect =  async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Kết nối database thành công!");
  } catch(e){
    console.log(e);
    console.log("Kết nối database thất bại!");
  }
}