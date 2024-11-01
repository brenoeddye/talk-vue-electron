import { app, BrowserWindow } from 'electron';
import path from 'path';

// Definindo __dirname para ESM
const __dirname = path.resolve();

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Ajuste conforme seu arquivo de preload
            contextIsolation: true,
            enableRemoteModule: false,
        },
    });

    mainWindow.loadURL('http://localhost:5173'); // URL que Vite está servindo
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});