const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>پەرەی من</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f0f8ff; }
          h1 { color: #3333cc; }
          p { font-size: 18px; color: #555; }
          button { padding: 10px 20px; font-size: 16px; background-color: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 5px;}
          button:hover { background-color: #45a049; }
        </style>
      </head>
      <body>
        <h1>سڵاو، بەخێربێیت بۆ پەرەی من!</h1>
        <p>ئەمە یەک پەرەی سادەی Node.js و Express.jsە</p>
        <button onclick="alert('سوپاس بۆ دەرچوونت!')">کلیک بکە</button>
      </body>
    </html>
  `);
});

app.get('/api/message', (req, res) => {
  res.json({ message: "ئەمە پەیامێکی APIیەکی سادەی Node.jsە!" });
});

app.listen(port, () => {
  console.log(`پەرەکە لە https://news-project-steel.vercel.app/app.js:${port} ڕاکێشراوە`);
});
