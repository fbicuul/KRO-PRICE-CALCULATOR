// config.example.js - COPY THIS FILE TO config.js AND ADD YOUR REAL KEYS
// This is just a template - safe to commit to GitHub

const KRO_CONFIG = {
    // Google Apps Script URL - Get this from your deployed script
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec',
    
    // Secret token for API authentication - Generate a random string
    API_SECRET_TOKEN: 'your-super-secret-token-here-change-this',
    
    // Your business details
    COMPANY_NAME: 'K.R.O Cleaning Service',
    COMPANY_PHONE: '+234 XXX XXX XXXX',
    COMPANY_EMAIL: 'info@krocleaning.com',
    
    // Currency settings
    CURRENCY: '₦',
    CURRENCY_CODE: 'NGN',
    
    // Feature flags
    ENABLE_GOOGLE_SHEETS: true,
    
    // Version
    VERSION: '1.0.0'
};

// Make it available globally
window.KRO_CONFIG = KRO_CONFIG;