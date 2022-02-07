const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db');
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
    // Importing routes
const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// Defining routes
app.use("/posts", postRoutes)
app.use("/user", userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));