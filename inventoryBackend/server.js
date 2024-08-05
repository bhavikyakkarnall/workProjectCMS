import express, { json } from 'express';
import cors from 'cors';
import itemsRoute from './routes/itemRoute.js'
// import swaggerUi from 'swagger-ui-express';
// import swaggerDoc from './swaggerGameStore.json' assert {type: 'json'};

const app = express();
app.use(cors());

app.use('/items', itemsRoute)

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(express.static("public"));

app.listen(3000, function() {console.log("Im actively listening at PORT:3000...");})