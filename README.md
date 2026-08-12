# Inventory-App
app de inventario de una tienda utilizando node, express, postgreSQL y ejs   


Consejo para el futuro: para crear un live server en extres ejecutar ese comando en la consola :

```
npm install --save-dev nodemon browser-sync npm-run-all
```

luego configure de la siguiente manera los scripts de su package.json:

```
"scripts": {
  "start": "node app.js",
  "dev:server": "nodemon -e js,ejs app.js",
  "dev:browser": "browser-sync start --proxy 'localhost:3000' --files 'views/**/*.ejs, public/**/*'",
  "dev": "npx concat-with-current-dir || npx npm-run-all --parallel dev:server dev:browser"
}
```