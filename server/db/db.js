const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URL || 'mongodb://localhost:27017/testNames', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Successfully connected to the MONGODB');
  })
  .catch(err => {
    console.log('Could not connect to the MONGODB. Exiting now...', err);
    process.exit();
  });
