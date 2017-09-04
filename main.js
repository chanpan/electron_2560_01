const electron = require("electron");
const {app, BrowserWindow} = electron;

let mainWin="";
let childWin="";

app.on("ready", ()=>{
	mainWin = new BrowserWindow({ width:1200, height:600});
	mainWin.loadURL(`file://${__dirname}/index.html`);
	mainWin.on('closed', function () { win = null; });
});

exports.openWindow = (filename) =>{
	childWin = new BrowserWindow({ width:800, height:400, parent: mainWin, modal: false }); 
	childWin.loadURL(`file://${__dirname}/${filename}.html`);
}