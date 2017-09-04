const remote = require("electron").remote;
const main = remote.require('./main.js');
 
$("#btnAbout").click(()=>{
    var window = remote.getCurrentWindow();
    main.openWindow('about');
});
 