// Mengimpor library dan modul yang dibutuhkan
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Konstanta untuk mata uang dasar dan daftar mata uang lainnya
const BASE_CURRENCY = "USD";
const CURRENCIES = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

// Komponen utama CurrencyExchangeTable
const CurrencyExchangeTable = () => {
  // State untuk menyimpan nilai tukar mata uang
  const [rates, setRates] = useState({});

  // Menggunakan useEffect untuk mengambil data nilai tukar ketika komponen pertama kali dirender
  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Mengambil data nilai tukar dari API CurrencyFreaks
        const response = await fetch(
          `https://api.currencyfreaks.com/latest?apikey=${
            import.meta.env.VITE_CURRENCYFREAKS_API_KEY
          }&symbols=${CURRENCIES.join(",")}`
        );
        // Mengubah response menjadi format JSON
        const data = await response.json();
        // Menyimpan nilai tukar yang diterima ke dalam state 'rates'
        setRates(data.rates);
      } catch (error) {
        // Menangani kesalahan jika terjadi masalah saat mengambil data
        console.error("Error fetching rates:", error);
      }
    };

    // Memanggil fungsi fetchRates
    fetchRates();
  }, []);

  // Fungsi untuk menghitung nilai tukar beli dan jual berdasarkan nilai yang diambil
  const calculateRate = (rate, type) => {
    const baseRate = parseFloat(rate);
    if (type === "buy") {
      // Menambahkan markup 5% untuk nilai tukar beli
      return (baseRate * 1.05).toFixed(4);
    } else if (type === "sell") {
      // Mengurangi markup 5% untuk nilai tukar jual
      return (baseRate * 0.95).toFixed(4);
    }
    // Mengembalikan nilai tukar asli jika tidak ada operasi
    return baseRate.toFixed(4);
  };

  // Mengembalikan tampilan tabel yang menampilkan nilai tukar mata uang
  return (
    <div class="container my-5 p-4 bg-light rounded shadow">
      <h1 class="mb-4 text-center fw-bolder">Currency Exchange Rates</h1>

      {/* Tabel untuk menampilkan data mata uang, nilai tukar beli, tukar, dan jual */}
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
          {/* Looping melalui daftar mata uang untuk menampilkan baris data */}
          {CURRENCIES.map((currency) => (
            <tr key={currency}>
              {/* Menampilkan kode mata uang */}
              <td>{currency}</td>
              {/* Menampilkan nilai tukar beli atau loading jika data belum tersedia */}
              <td>
                {rates[currency]
                  ? calculateRate(rates[currency], "buy")
                  : "Loading..."}
              </td>
              {/* Menampilkan nilai tukar atau loading */}
              <td>{rates[currency] ? rates[currency] : "Loading..."}</td>
              {/* Menampilkan nilai tukar jual atau loading */}
              <td>
                {rates[currency]
                  ? calculateRate(rates[currency], "sell")
                  : "Loading..."}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pesan informasi tambahan di bawah tabel */}
      <div className="alert alert-info mt-4" role="alert">
        <strong>* Base currency is USD</strong>
        <br />
        ** Disclaimer: This is for informational purposes only.
      </div>
    </div>
  );
};

// Mengekspor komponen CurrencyExchangeTable agar bisa digunakan di bagian lain aplikasi
export default CurrencyExchangeTable;
