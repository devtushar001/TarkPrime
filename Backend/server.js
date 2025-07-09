import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: `Server running on 5000 port.`
    })
})

app.listen(`5000`, () => {
   console.log(`Server running on ${5000}`)
})