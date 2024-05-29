const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', '..', 'logs', 'moderation.log');

function logAction(action, user, reason) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${action} by ${user} - Reason: ${reason}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}

module.exports = {
    logAction
};