# Proverbs API
## Description
This project is a RESTful API that stores and manages proverbs in Dari, Pashto, and their English translations. It allows users to retrieve, add, edit, and delete proverbs.
The Proverbs API is live and can be accessed on here: 
🔗 https://proverbs-api-4ukw.onrender.com/proverbs

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
   ```bash
   npm install

3. Run the API:
   ```bash
   node index.js

By default, the API runs on http://localhost:3000 .

## Example Requests & Responses
### Retrieve all proverbs
**Request:**
```bash
GET /proverbs
```

**Response:**
```bash
[
    {
        "id": 1,
        "textDari": "مثال",
        "textPashto": "مثال",
        "translation": "Example",
        "meaning": "Example",
        "category": "Example"
    },
    {
        "id": 2,
        "textDari": "مثال",
        "textPashto": "مثال",
        "translation": "Example",
        "meaning": "Example",
        "category": "Example"
    },
    {
        "id": 3,
        "textDari": "مثال",
        "textPashto": "مثال",
        "translation": "Example3",
        "meaning": "Example",
        "category": "Example"
    }
]
```

### Add a new proverb
**Request**
```bash
POST /proverbs
data-type: json
   {
        "textDari": "4مثال",
        "textPashto": "4مثال",
        "translation": "Example4",
        "meaning": "Example4",
        "category": "Example4"
    }
```

 **Response**
 ```bash
   Proverb added successfully✅
   {
        "textDari": "4مثال",
        "textPashto": "4مثال",
        "translation": "Example4",
        "meaning": "Example4",
        "category": "Example",
        "id": 4
    }
```    



## Future Improvements
- Implement a frontend for better user interaction.
- Add some new features like sharing on social media, 
