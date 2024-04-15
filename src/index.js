import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();

// Parse JSON request bodies using body-parser
app.use(bodyParser.json());

// Define a route to handle incoming messages
app.post('/send-to-discord', async (req, res) => {
    const { name, message } = req.body;

    // Define webhook URL
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1216756708638986310/z8GTaqvuquhcULOL8A0dpYmGMxV9_AJ6st1cyoaurGiqEdABVHV0ZRrSB3AL86dzN3fH';

    // Create a JSON payload to send to Discord webhook
    const payload = {
        content: `Nueva sugerencia de ${name}.\n\nInformación: "${message}"`,
    };

    try {
        // Send the message to Discord
        const response = await fetch(discordWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            // If the response from Discord is successful, respond with a success status
            res.status(200).json({ success: true });
        } else {
            // If there's an issue with the Discord webhook, respond with an error status
            res.status(500).json({ success: false, error: 'Failed to send message to Discord' });
        }
    } catch (error) {
        // If an error occurs during the fetch operation, respond with an error status
        res.status(500).json({ success: false, error: 'An error occurred while sending the message.' });
        console.error(error);
    }
});

app.post('/keep-alive', async (req, res) => {
    /* const { name, message } = req.body;

    // Define webhook URL
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1197662737384345650/LlWrNEdW02wh7vGNcyYqKp0fl6qKw5ZlIMWK04kqm8vgoegilQK8SYOC7JCHIpRnzPL0';

    // Create a JSON payload to send to Discord webhook
    const payload = {
        content: `New submission from ${name}.\n\nInformation: "${message}"`,
    };

    try {
        // Send the message to Discord
        const response = await fetch(discordWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            // If the response from Discord is successful, respond with a success status
            res.status(200).json({ success: true });
        } else {
            // If there's an issue with the Discord webhook, respond with an error status
            res.status(500).json({ success: false, error: 'Failed to send message to Discord' });
        }
    } catch (error) {
        // If an error occurs during the fetch operation, respond with an error status
        res.status(500).json({ success: false, error: 'An error occurred while sending the message.' });
        console.error(error);
    } */
    res.send({ data: 'alive' })
});

    try {
        // Send the message to Discord
        const response = await fetch(discordWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            // If the response from Discord is successful, respond with a success status
            res.status(200).json({ success: true });
        } else {
            // If there's an issue with the Discord webhook, respond with an error status
            res.status(500).json({ success: false, error: 'Failed to send message to Discord' });
        }
    } catch (error) {
        // If an error occurs during the fetch operation, respond with an error status
        res.status(500).json({ success: false, error: 'An error occurred while sending the message.' });
        console.error(error);
    }
});

// Start the server on a specific port
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
