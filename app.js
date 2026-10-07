import express from "express";
import bookRoute from './routes/bookRoute.js';

//create express app
const app = express();

app.use('/book', bookRoute);

try {
    const port = 3000; // Define port variable here for safety
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}
