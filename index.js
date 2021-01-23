const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('hello hello')
})

app.listen(port, () => {
  console.log(`The app is running in http://localhost:${port}`)
})
