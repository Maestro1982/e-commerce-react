const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const authRouter = require('./routes/authRoute.js');
const productRouter = require('./routes/productRoute.js');
const blogRouter = require('./routes/blogRoute.js');
const categoryRouter = require('./routes/productCategoryRoute.js');
const blogCategoryRouter = require('./routes/blogCategoryRoute.js');
const brandRouter = require('./routes/brandRoute.js');
const couponRouter = require('./routes/couponRoute.js');
const { notFound, errorHandler } = require('./middlewares/errorHandler.js');

dbConnect();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogCategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
