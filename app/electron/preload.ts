import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    myCustomAPI: () => {
        console.log("Hello from Electron with TypeScript");
    },
});