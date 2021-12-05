const exp = require('constants');
const os = require('os');


setInterval(() => {
    const {arch, platform, totalmem, freemem} = os;
    const tram = parseInt(totalmem()/1024/1024);
    const tfreemem = parseInt(freemem()/1024/1024)
    const usage = (tfreemem/tram) * 100;
    
    const stats = {
        OS : platform(),
        Arch: arch(),
        TotalRam: `${tram} MB`,
        FreeRam: `${tfreemem} MB`,
        Usage: `${usage.toFixed(2)}%`
    };

    console.clear();
    console.table(stats);
    

    exports.stats = stats;
}, 1000);

