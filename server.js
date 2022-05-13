const express = require("express");
const payload = require("payload");

require("dotenv").config();
const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: "mongodb+srv://venkatesh:Venky1234@cluster0.9mako.mongodb.net/test",

  // Only needed to deploy publicly. Get free Personal license at https://payloadcms.com.
  // license: process.env.PAYLOAD_LICENSE_KEY,

  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(3000);
