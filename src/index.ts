import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/inventory-routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router); // Use the router for your routes

app.listen(PORT, () => {
    console.log(`Server is running on r http://localhost:${PORT}`);
});