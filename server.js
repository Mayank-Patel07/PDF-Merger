console.log("hello world")

const express = require('express')
const path = require('path')
const multer = require('multer')
const { merger_pdf } = require('./test_pdfs')
const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000

app.use('/static', express.static('public'))


app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  // req.files is array of `photos` files
  // console.log(req.files)
  let d = await merger_pdf(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
  res.redirect(`http://localhost:3000/static/${d}.pdf`)
})

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})