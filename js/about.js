const electron = require("electron");
const {ipcRenderer} = electron;

$("#btnSendMsg").click(()=>{
    let msg = $("#msg").val();
    ipcRenderer.send('async', msg);
});