#!/usr/bin/env node
/* eslint-disable no-undef */

const fs = require('fs');
const { version, homepage } = require('../package.json');
const https = require('https');

fs.writeFileSync('./build/buildTime.txt', new Date().toString());
fs.writeFileSync('./build/version.txt', process.env.REACT_APP_RESUME_VERSION || version);

const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${homepage}`;
console.log(`Fetching QR Code: ${qrCodeUrl}`);
https.get(qrCodeUrl, response => response.pipe(fs.createWriteStream('./build/qrcode.png')));
