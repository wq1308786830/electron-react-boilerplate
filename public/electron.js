// Modules to control application life and create native browser window

const path = require('path');
const NodePdfPrinter = require('node-pdf-printer');

const { app, BrowserWindow, ipcMain } = require('electron');

const isDev = process.env.NODE_ENV === 'development';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  for (const name of extensions) {
    try {
      await installer.default(installer[name], forceDownload);
    } catch (e) {
      console.log(`Error installing ${name} extension: ${e.message}`);
    }
  }
};

async function createWindow() {
  isDev && (await installExtensions());

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'electron/preload.js')
    }
  });

  // and load the index.html of the app.
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000/');
    // Open the DevTools only if in development mode.
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(
      path.resolve(path.join(__dirname, '../build/index.html'))
    );
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// hot reload
isDev &&
  require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/../node_modules/electron`),
    ignored: /node_modules|[\/\\]\./
  });

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  createPrintWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
let printWindow = null;
function createPrintWindow() {
  const windowOptions = {
    width: 100,
    height: 100,
    title: '打印页',
    show: false
  };
  printWindow = new BrowserWindow(windowOptions);
  printWindow.loadURL(
    path.resolve(path.join(__dirname, '../build/index.html'))
  );

  initPrintEvent();
}

function initPrintEvent() {
  ipcMain.on('print', (event, deviceName = '') => {
    const printers = printWindow.webContents.getPrinters();
    event.sender.send('asynchronous-reply', printers);
    printers.forEach(element => {
      if (element.name === deviceName) {
        console.log(element);
      }
      if (element.name === deviceName && element.status != 0) {
        mainWindow.send('print-error', deviceName + '打印机异常');
        return;
      }
    });
    nodePrinter();
    // printWindow.webContents.print(
    //   { silent: true, printBackground: true, deviceName: deviceName },
    //   data => {
    //     console.log('回调', data);
    //     event.sender.send('asynchronous-reply', data);
    //   }
    // );
  });
}

function nodePrinter() {
  NodePdfPrinter.listPrinter(); // 列出所有打印机名称

  const array = ['C:\\Users\\flyin\\Desktop\\ReferenceCard.pdf']; // 待打印文件地址列表

  NodePdfPrinter.printFiles(array); // 打印文件到Windows默认打印机

  NodePdfPrinter.printFiles(array, 'OneNote'); // 打印文件到指定打印机
}
