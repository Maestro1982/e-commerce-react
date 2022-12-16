const { default: mongoose } = require('mongoose');

const dbConnect = async () => {
  const url = process.env.MONGODB_URL;
  try {
    mongoose.set('strictQuery', true);
    const conn = mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connection established');
  } catch (error) {
    console.log('Database error:', error.message);
  }
};
module.exports = dbConnect;
