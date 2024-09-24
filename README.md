# Currency Exchange Project

## Description

This project is a Currency Exchange application built using **React.js**, **Vite**, and **Bootstrap**. The application allows users to convert currency values from one currency to another using data from the [CurrencyFreaks](https://billing.currencyfreaks.com/) API. It uses **USD** as the base currency and displays exchange rates for the following currencies:

- **CAD** (Canadian Dollar)
- **IDR** (Indonesian Rupiah)
- **JPY** (Japanese Yen)
- **CHF** (Swiss Franc)
- **EUR** (Euro)
- **GBP** (British Pound)

## Program Information

This is **Assignment 4** for the **Digitalent FGA Hactive 8 Web Development** program.

## Key Features

- **Responsive User Interface**: Designed with Bootstrap for a great user experience across different devices.
- **API Integration**: Fetches real-time exchange rate data from the CurrencyFreaks API.
- **Currency Conversion**: Users can select a source currency and a target currency, and enter an amount to convert.
- **Automatic Calculation**: Conversion results are displayed automatically as the user inputs values.

## Technologies Used

- **React.js**: For building dynamic user interfaces.
- **Vite**: As a build tool for faster and more efficient development.
- **Bootstrap**: For styling and responsive design.
- **CurrencyFreaks API**: To retrieve currency exchange rate data.

## How to Get an API Key

To use the CurrencyFreaks API, you need to sign up first to obtain an API key. Visit [CurrencyFreaks Sign Up](https://billing.currencyfreaks.com/) to create an account and get your API key.

## How to Run the Project

1. **Clone this repository:**

   To clone the repository to your local machine, use the following commands:
   
   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name
   
2. **Install Dependencies:**
   
   Once you have cloned the repository, navigate into the project directory and run the following command to install the necessary dependencies:
   
   ```bash
   npm install
   
3. **Install Bootstrap:**
   
   To add Bootstrap for styling, run the following command:
   
   ```bash
   npm install bootstrap

4. **Set Up the .env File:**
   
   To manage sensitive information such as your API key, you need to set up a `.env` file in the root directory of your project. Follow these steps:
   
   - Create a file named `.env`.
   - Add the following line to the `.env` file:
     ```plaintext
     REACT_APP_API_KEY=your_api_key_here
     ```
   - Replace `your_api_key_here` with the actual API key you obtained from CurrencyFreaks after signing up.

5. **Run the Application:**
   
   To start the application, run the following command:
   
   ```bash
   npm run dev

## Contribution

Contributions are always welcome! If you have suggestions or improvements, please open an issue or submit a pull request.
