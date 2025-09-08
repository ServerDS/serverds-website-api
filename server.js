const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

const apiToken = '7b18cebd6amsh182380e572b9869p19046ejsn752502899000';
const serverId = '1712628';
const FMCSToken = "SCOPED eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJGcmVlTWNTZXJ2ZXIubmV0Iiwic2NvcGUiOiJVU0VSIiwic2NvcGVSZXN0cmljdGlvbiI6bnVsbCwidXNlcl9pZCI6OTg1ODM4LCJiYXNlX2tleSI6IjhkZTJlZGY3YzYyZTUzZjY1NGNmOGExOGE0ZDAwNjNjIiwiaXNzdWVkX2F0IjoiMjAyNC0xMS0yMyAxNToxOTowMCIsImlzc3VlZF90byI6IjE4LjE4NC4yMTQuMzMifQ.PX43VY5hxVLSzDGH4PiRhgqwFXFERPCIEwZ9vjXp-Jw";

app.use(cors());

app.get('/api/server/', async (req, res) => {
    try {
        const response = await axios.get(`https://freemcserver.p.rapidapi.com/v4/server/${serverId}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': 'freemcserver.p.rapidapi.com',
                'x-rapidapi-key': apiToken,
                'X-FMCS-Token': FMCSToken,
                "User-Agent": "FMCS-USER-985838"
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
