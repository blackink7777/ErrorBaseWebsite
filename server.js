const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Redirect '/index.html' to '/'
app.use((req, res, next) => {
  if (req.path === '/index.html') {
    return res.redirect(301, '/');
  }
  next();
});

// Automatically remove .html extension
app.use((req, res, next) => {
  if (req.path.endsWith('.html')) {
    const newPath = req.path.slice(0, -5);
    return res.redirect(301, newPath);
  }
  next();
});

// Serve .html files when no extension is provided
app.use((req, res, next) => {
  if (!req.path.includes('.')) {
    const htmlFilePath = `${__dirname}/public${req.path}.html`;
    res.sendFile(htmlFilePath, err => {
      if (err) next();
    });
  } else {
    next();
  }
});

// Custom 404 page handler
app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
