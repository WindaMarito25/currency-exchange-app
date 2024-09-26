// Mengimpor library React
import React from "react";

// Mengimpor komponen CurrencyExchangeTable dari folder komponen
import CurrencyExchangeTable from "./component/currencyExchangeTable";

// Mengimpor Bootstrap CSS untuk styling
import "bootstrap/dist/css/bootstrap.min.css";

// Komponen utama App
function App() {
  return (
    // Container untuk aplikasi
    <div className="App">
      {/* Menampilkan komponen CurrencyExchangeTable */}
      <CurrencyExchangeTable />
    </div>
  );
}

// Mengekspor komponen App sebagai default agar bisa digunakan di bagian lain dari aplikasi
export default App;
