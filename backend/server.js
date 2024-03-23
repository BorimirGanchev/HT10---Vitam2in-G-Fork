import express from 'express';
import cors from 'cors';
import findPath from './Pathfinder.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    var result = findPath(69, 160, 59, -144);
    res.json({ steps: result.steps });
    console.log(result.steps);
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});