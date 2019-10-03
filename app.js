const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//use the app and get pathname from build folder
app.use(express.static(path.join(__dirname, './build')));

//a fallback in case the path is unknown. Goes to de the build.
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './build') + '/index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
