const fs = require('fs');
let c = fs.readFileSync('app/AboutUs.tsx', 'utf8');
c = c.replace(/"We essentially want to build the ultimate open-source engineering toolkit."/g, '&quot;We essentially want to build the ultimate open-source engineering toolkit.&quot;');
fs.writeFileSync('app/AboutUs.tsx', c);
