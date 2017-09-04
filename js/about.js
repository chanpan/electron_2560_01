const electron = require("electron");
const {ipcRenderer} = electron;

$("#btnSendMsg").click(()=>{
    ipcRenderer.send('async', "Test sdfdsfsdfsf");
});