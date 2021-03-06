const os = require('os');
const log = require('./logger');
const dateTime = require('./dateTime');


setInterval(()=>{
    const { freemem, totalmem} = os;

    const total = parseInt(totalmem()/1024/1024);
    const men = parseInt(freemem()/1024/1024);
    const percents = parseInt((men/total) * 100);

    const stats = {
        free: `${men} MB`,
        total: `${total} MB`,
        usage: `${percents}%`,
    
    }

    console.clear();
    console.log("=============PC Statas===============");
    console.table(stats);

    log(`${JSON.stringify(stats)}\n
    ${dateTime()} \n\n`)

}, 1000);