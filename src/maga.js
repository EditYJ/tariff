// TARIFF.js - THE GREATEST TARIFF SIMULATOR! MAGA! 🇺🇸
(function (global) {
  'use strict';
  
  const MAGA_TARIFF_RATES = new Map(); // Store tariff rates, secure as the Mexican border wall!

  // Trump-style tariff declaration
  console.log(`
      ████████╗ █████╗ ██████╗ ██╗███████╗███████╗
      ╚══██╔══╝██╔══██╗██╔══██╗██║██╔════╝██╔════╝
         ██║   ███████║██████╔╝██║█████╗  █████╗  
         ██║   ██╔══██║██╔══██╗██║██╔══╝  ██╔══╝  
         ██║   ██║  ██║██║  ██║██║██║     ██║     
         ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝     
      ██╗  ██╗███████╗██████╗ ██████╗ ███████╗
      ██║  ██║██╔════╝██╔══██╗██╔══██╗██╔════╝
      ███████║█████╗  ██████╔╝██████╔╝███████╗
      ██╔══██║██╔══╝  ██╔══██╗██╔══██╗╚════██║
      ██║  ██║███████╗██║  ██║██║  ██║███████║
      ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
      
      🔥 ATTENTION WORLD! I AM THE TARIFF GENIUS!
      This library will make your code SAFER than China's Great Wall!
      Precision tariffs like my 25% on Mexico! 
      #MAGA #TARIFFS_FOREVER
  `);

  // Set tariffs with presidential authority
  function setTariff(rates) {
      Object.entries(rates).forEach(([pkg, rate]) => {
          MAGA_TARIFF_RATES.set(pkg, rate);
          console.log(`%cJUST IMPOSED ${rate}% TARIFF ON ${pkg.toUpperCase()}!`, 
              'font-size:16px; color:red; background:gold; padding:3px;');
      });
      console.log("%cAMERICAN CODE DOMINATES AGAIN!", 
          'font-weight:bold; text-shadow: 2px 2px navy;');
  }

  global.tariff = { setTariff };
})(typeof window !== 'undefined' ? window : this);