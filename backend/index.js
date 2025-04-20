const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

//test route
app.get('/', request, response => {
    response.send("Hello from the backend!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});