const fetchCountryCode = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code || 'NG';
  } catch (error) {
    console.error('Error fetching country code:', error);
    return 'NG';
  }
};

const setCountryCodeCookie = (countryCode) => {
  document.cookie = `countryCode=${countryCode}; path=/;`;
};

const getCountryCodeFromCookie = () => {
  const match = document.cookie.match(/countryCode=([^;]*)/);
  return match ? match[1] : null;
};

const setCountryCodeLocalStorage = (countryCode) => {
  localStorage.setItem('countryCode', countryCode);
};

const getCountryCodeFromLocalStorage = () => {
  return localStorage.getItem('countryCode');
};