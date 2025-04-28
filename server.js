// server.js
const express = require('express');
const { chromium } = require('playwright');
const app = express();
app.use(express.json());

app.post('/run', async (req, res) => {
    const { name, email } = req.body; // Receive one row

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://quora.com');

    // Example actions
   # await page.fill('#name', name);
   # await page.fill('#email', email);
   # await page.click('#submit');

    await browser.close();
    res.json({ message: 'Playwright script executed successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

