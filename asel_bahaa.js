const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    // דף הבית
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Book Component By Function</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                  margin: 0;
                  background-color: #e6f7ff;
              }
              .container {
                  text-align: center;
              }
              .book {
                  width: 250px;
                  height: 350px;
                  border: 1px solid #ccc;
                  background: linear-gradient(to bottom, white 55%, #ffdf3c 55%);
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                  position: relative;
                  margin: 20px auto;
              }
              .book::before {
                  content: 'O\'REILLY';
                  position: absolute;
                  top: 10px;
                  left: 10px;
                  font-size: 10px;
                  color: #444;
                  font-weight: bold;
              }
              .book-title {
                  margin-top: 130px;
                  font-size: 20px;
                  font-weight: bold;
              }
              .book-subtitle {
                  font-size: 12px;
                  margin-top: 5px;
              }
              .js-logo {
                  font-size: 130px;
                  font-weight: bold;
                  color: black;
                  margin-top: 50px;
              }
              .author {
                  margin-top: 20px;
                  font-size: 16px;
                  font-weight: bold;
                  color: #0066cc;
              }
              .description {
                  margin-top: 10px;
                  font-size: 12px;
                  color: #555;
              }
              .footer {
                  margin-top: 20px;
                  font-size: 10px;
                  color: #777;
              }
              h2 {
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 10px;
              }
              nav {
                  margin-bottom: 20px;
              }
              nav a {
                  text-decoration: none;
                  color: #0066cc;
                  margin: 0 10px;
                  font-weight: bold;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <nav>
                  <a href="/">Home</a> | 
                  <a href="/about">About</a> | 
                  <a href="/contact">Contact</a>
              </nav>
              <h2>Book Component By Function</h2>
              <div class="book">
                  <div class="book-title">SCOPE & CLOSURES</div>
                  <div class="book-subtitle">BY KYLE SIMPSON</div>
                  <div class="js-logo">JS</div>
              </div>
              <div class="author">By Kyle Simpson</div>
              <div class="description">Parts of the language that many JavaScript programmers simply avoid.</div>
              <div class="footer">&copy; 2021 Tania</div>
          </div>
      </body>
      </html>
    `);
  } else if (req.url === "/about") {
    // דף "אודות"
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>About</title>
      </head>
      <body style="text-align:center; font-family: Arial, sans-serif;">
          <h1>About Us</h1>
          <nav>
              <a href="/">Home</a> | 
              <a href="/about">About</a> | 
              <a href="/contact">Contact</a>
          </nav>
          <p>היי זה העבודה על שרתים.</p>
      </body>
      </html>
    `);
  } else if (req.url === "/contact") {
    // דף "צור קשר"
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact</title>
      </head>
      <body style="text-align:center; font-family: Arial, sans-serif;">
          <h1>Contact Us</h1>
          <nav>
              <a href="/">Home</a> | 
              <a href="/about">About</a> | 
              <a href="/contact">Contact</a>
          </nav>
          <p>Email: asel-bahaa@gmail.com</p>
          <p>Phone: 0512345678</p>
      </body>
      </html>
    `);
  } else {
    // דף שגיאה
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>404</title>
      </head>
      <body style="text-align:center; font-family: Arial, sans-serif;">
          <h1>404 - Page Not Found</h1>
          <nav>
              <a href="/">Home</a> | 
              <a href="/about">About</a> | 
              <a href="/contact">Contact</a>
          </nav>
          <p>Sorry, the page you are looking for does not exist.</p>
      </body>
      </html>
    `);
  }
  res.end();
});

server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
