// ADICIONE ISSO NO TOPO DO SEU index.js
const express = require('express');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const cors = require('cors');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');

// Usar plugin stealth
puppeteer.use(StealthPlugin());

const app = express();
app.use(cors({
  origin: '*', // Mude para seu domínio Firebase depois
  credentials: true
}));
app.use(bodyParser.json());

// CONFIGURAÇÃO PARA CLOUD
const getBrowser = async () => {
  return await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--single-process',
      '--no-zygote'
    ],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath()
  });
};

// ... (COLE TODO O RESTO DO SEU CÓDIGO index.js AQUI) ...
