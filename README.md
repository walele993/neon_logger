# 🔥 Neon Logger  

*A colorful and lightweight logging package for [Node.js](https://www.npmjs.com/package/neon-logger?activeTab=readme)*  

## 🚀 Introduction  

Neon Logger is a simple and elegant logger for Node.js that brings **colorful log messages** to your console. It supports five logging levels:  

- ✅ **Info** (cyan) - General information logs  
- ⚠️ **Warning** (yellow) - Cautionary messages  
- ❌ **Error** (red) - Critical errors  
- 📝 **Debug** (gray) - Debugging information  
- 🔎 **Verbose** (magenta) - Detailed logs for in-depth insights  

With Neon Logger, you can enhance the readability of your logs and quickly differentiate message types while debugging.  

---

## 📦 Installation  

You can install **Neon Logger** via npm:  
```
npm install neon-logger  
```
---

## 📖 Usage  

Neon Logger works with both **CommonJS (require)** and **ES Modules (import)**.  

### 🔹 CommonJS Example  

If your project uses **CommonJS**, require the module as follows:  
```
const logger = require('neon-logger');  

logger.info('This is an info message.');  
logger.warn('Warning: this is a warning message!');  
logger.error('Error: something went wrong.');  
logger.debug('Debugging details...');  
logger.verbose('Extra details for verbose mode.');  
```
### 🔹 ES Modules Example  

For **ES Modules**, make sure your `package.json` includes `"type": "module"`, then use `import` syntax:  
```
import * as logger from 'neon-logger';  

logger.info('This is an info message.');  
logger.warn('Warning: this is a warning message!');  
logger.error('Error: something went wrong.');  
logger.debug('Debugging details...');  
logger.verbose('Extra details for verbose mode.');  
```
---

## 🎨 Log Level Colors  

Each log level is color-coded for better visibility:  

| Level    | Color    | Usage Example |
|----------|---------|--------------|
| **Info**  | 🔵 Cyan | logger.info('App started successfully.'); |
| **Warning** | 🟡 Yellow | logger.warn('Low disk space warning.'); |
| **Error** | 🔴 Red | logger.error('Failed to connect to the database.'); |
| **Debug** | ⚪ Gray | logger.debug('Received API response: {...}'); |
| **Verbose** | 🟣 Magenta | logger.verbose('Detailed processing information...'); |

---

## ⚙️ Configuration  

Neon Logger works out of the box, but in the future, we plan to add **log level filtering** and **custom color themes**. Stay tuned! 🚀  

---

## 🛠️ Requirements  

- **Node.js** `>=16.0`  
- **npm** `>=7.0`  

---

## 🤝 Contributing  

We welcome contributions! If you’d like to improve **Neon Logger**, feel free to:  

1. **Fork** the repository  
2. **Clone** your fork:  

   ```
   git clone https://github.com/yourusername/neon-logger.git  
   ```

3. **Create a new branch**:  

   ```
   git checkout -b feature-new-feature
   ```  

4. **Make your changes** and commit them  
5. **Push** your changes:  

   ```
   git push origin feature-new-feature  
   ```

6. **Submit a pull request** 🚀  

---

## 📄 License  

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## 🌟 Credits  

This project was created by Gabriele Meucci.
