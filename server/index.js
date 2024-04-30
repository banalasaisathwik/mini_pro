const express = require('express');
const { User } = require("./db");

const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter");
const providerRouter = require("./routes/providerRouter");
var bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    const user = await User.findOne({ username });
    if (user) {
        res.status(403).json({ message: 'User already exists' });
    } else {
        const newUser = new User({ username, password });
        await newUser.save();
        const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'User created successfully', token });
    }
});
app.get("/", (req, res) => res.json({ msg: "in servere" }));


const mongoURI = 'mongodb+srv://banalasaisathwik:nQVGIJEuxcqOMKns@cluster0.zj1edzl.mongodb.net/mp?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.listen(3000, () => console.log('Server running on port 3000'));