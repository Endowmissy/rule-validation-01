const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const routes = require("./routes/routes")

// load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})