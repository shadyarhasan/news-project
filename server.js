import express from "express";
import cors from "cors";
import Parser from "rss-parser";

const app = express();
app.use(cors());
const parser = new Parser();

// Channels
const channels = {
  rudaw: "https://www.rudaw.net/rss",
  nrt: "http://www.nrttv.com/feed/",
  gk: "http://www.gksat.tv/feed/",
  kurdistan24: "https://www.kurdistan24.net/en/rss",
  basnews: "https://www.basnews.com/rss",
  xendan: "https://xendan.org/rss",
  waar: "https://www.waar-tv.com/feed",
  peyam: "https://peyam.tv/feed",
  knn: "https://knnc.net/rss"
};

// Dynamic API
for (let key in channels) {
  app.get(`/api/${key}`, async (req, res) => {
    try {
      const feed = await parser.parseURL(channels[key]);
      const news = feed.items.map(item => ({
        title: item.title,
        link: item.link,
        description: item.contentSnippet,
        image: item.enclosure?.url || null,
        date: item.isoDate
      }));
      res.json(news);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}

// Start server
app.listen(3000, () => console.log("API running on http://localhost:3000"));