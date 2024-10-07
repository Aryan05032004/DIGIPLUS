
SIM Card Management System
This project is a SIM card management system built with a Vite frontend and a Node.js backend. The system allows users to activate, deactivate, and get details of SIM cards.

Table of Contents
Prerequisites
Backend Setup
Frontend Setup
Usage
API Endpoints
Activate SIM Card
Deactivate SIM Card
Get SIM Details
Prerequisites
Before you begin, ensure you have the following installed:

Node.js
MongoDB
Backend Setup
Navigate to the Backend directory:

bash
Copy code
cd Backend
Install the dependencies:

bash
Copy code
npm install
Start the MongoDB server:

bash
Copy code
npm start
Frontend Setup
Navigate to the Frontend directory:

bash
Copy code
cd Frontend
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:5173. Use the interface to activate, deactivate, and get details of SIM cards.

Usage
After setting up both the backend and frontend, you can interact with the system through the provided user interface. You can perform the following actions:

Activate a SIM Card
Deactivate a SIM Card
Get Details of a SIM Card
API Endpoints
Activate SIM Card
URL: /api/activate
Method: POST
Request Body:
json
Copy code
{
  "simNumber": "1234567890",
  "phoneNumber": "9876543210"
}
Deactivate SIM Card
URL: /api/deactivate
Method: POST
Request Body:
json
Copy code
{
  "simNumber": "1234567890"
}
Get SIM Details
URL: /api/sim-details/:simNumber
Method: GET