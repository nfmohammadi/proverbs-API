# Proverbs API
## Description
This project is a RESTful API that stores and manages proverbs in Dari, Pashto, and their English translations. It allows users to retrieve, add, edit, and delete proverbs.
The Proverbs API is live and can be accessed on here: 
🔗 https://proverbs-api-4ukw.onrender.com

## Features & Endpoints
You can interact with the API by sending requests to the following endpoints:

- Retrieve all proverbs: 'GET /proverbs'
- Retrieve a specific proverb: 'GET /proverbs/:id'
- Add a new proverb: 'POST /proverbs'
- Edit a proverb: 'PUT /proverbs/:id'
- Delete a proverb: 'DELETE /proverbs/:id'
- Get a random proverb: 'GET /proverbs/random'

## Installation & Setup
### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/nfmohammadi/proverbs-API.git
   cd proverbs-API

2. Install dependencies:
   npm install

3. Run the API:
   node index.js

By default, the API runs on http://localhost:3000 .

## Future Improvements
- Implement a frontend for better user interaction.
- Add some new features like sharing on social media, 
