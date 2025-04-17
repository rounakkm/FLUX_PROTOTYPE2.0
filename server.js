const express = require('express');
const fs = require('fs');
const OpenAI = require('openai');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


const openai = new OpenAI({
    apiKey: 'Api-Key',
});

app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/index', (req, res) => {
    res.render('homepage');
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/flux', (req, res) => {
    res.render('flux');
});

app.get('/analytics', (req, res) => {
    res.render('analytics');
});

app.get('/insights', (req, res) => {
    res.render('insights');
});

app.get('/landing', (req, res) => {
    res.render('landing');
});

app.get('/logout', (req, res) => {
    res.render('logout');
});

app.post('/calculate-carbon', async (req, res) => {
    try {
        const base64Image = req.body.image;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{
                role: 'system',
                content: [{
                    type: 'text',
                    text: `You are a helpful assistant that can help users calculate their carbon footprint based on their daily activities and lifestyle choices. You will provide personalized insights on how they can reduce their carbon emissions.
                    NO EXTRA TEXT, JUST THE INSIGHT
                    NO unnessasary symbols backticks or quotes or any markdown symbols`,
                }],
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: '274 Units consumed in the last month calculate the carbon footprint i live in India i us coal as my energy source and give 2 insights on how to reduce my carbon footprint',
                    },
                    {
                        type: 'image_url',
                        image_url: {
                            url: `data:image/jpeg;base64,${base64Image}`,
                        },
                    },
                ],
            }],
            temperature: 0.3,
            max_tokens: 200,
        });

        const response = completion.choices[0].message.content;
        res.json({ result: response });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});