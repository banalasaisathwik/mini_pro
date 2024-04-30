const express = require('express');
const { authenticateJwt, SECRET } = require("../middleware/auth");
const { Booking } = require("../db");
const router = express.Router();

router.get('/:fieldValue', async (req, res) => {
    const { fieldValue } = req.params;
    try {
        const providers = await Provider.find({ serviceName: fieldValue });
        if (providers.length > 0) {
            const providerNames = providers.map(provider => provider.name);
            res.json({ message: 'Providers found', providers: providerNames });
        } else {
            res.status(404).json({ message: 'No providers found for the specified field value' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching providers', error: error.message });
    }
});

module.exports = router;
