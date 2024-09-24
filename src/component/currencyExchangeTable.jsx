import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_CURRENCY = "USD";
const CURRENCIES = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

const CurrencyExchangeTable = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://api.currencyfreaks.com/latest?apikey=${
            import.meta.env.VITE_CURRENCYFREAKS_API_KEY
          }&symbols=${CURRENCIES.join(",")}`
        );
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };

    fetchRates();
  }, []);

  const calculateRate = (rate, type) => {
    const baseRate = parseFloat(rate);
    if (type === "buy") {
      return (baseRate * 1.05).toFixed(4);
    } else if (type === "sell") {
      return (baseRate * 0.95).toFixed(4);
    }
    return baseRate.toFixed(4);
  };

  return (
    <div class="container my-5 p-4 bg-light rounded shadow">
      <h1 class="mb-4 text-center fw-bolder">Currency Exchange Rates</h1>

      <table class="text-center table table-hover table-responsive table-borderless">
        <thead class="border-bottom">
          <tr class="table-striped">
            <th class="bg-primary-subtle" scope="col">
              Currency
            </th>
            <th class="bg-primary-subtle" scope="col">
              We Buy
            </th>
            <th class="bg-primary-subtle" scope="col">
              Exchange Rate
            </th>
            <th class="bg-primary-subtle" scope="col">
              We Sell
            </th>
          </tr>
        </thead>
        <tbody>
          {CURRENCIES.map((currency) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>
                {rates[currency]
                  ? calculateRate(rates[currency], "buy")
                  : "Loading..."}
              </td>
              <td>{rates[currency] ? rates[currency] : "Loading..."}</td>
              <td>
                {rates[currency]
                  ? calculateRate(rates[currency], "sell")
                  : "Loading..."}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="alert alert-info mt-4" role="alert">
        <strong>* Base currency is USD</strong>
        <br />
        ** Disclaimer: This is for informational purposes only.
      </div>
    </div>
  );
};

export default CurrencyExchangeTable;
