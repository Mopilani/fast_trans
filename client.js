const http = require("http");
const fs = require("fs");

const options = {
    hostname: 'localhost:8024',
    port: 8024,
    path: '/dart',
    method: 'POST',
    headers: {
        // 'Content-Type': 'application/json',
        // 'Content-Length': Buffer.byteLength(postData),
    },
};

const req = http.request(options, (res) => {
    console.log('Code: ' + res.statusCode);
    if (res.statusCode == 500) {
        msg.reply('ISE');
        return;
    }
    if (res.statusCode == 404) {
        msg.reply('NF');
        return;
    }
    res.setEncoding('utf8');
    var answer = '';
    res.on('data', (chunk) => {
        answer = answer + chunk;
    });
    res.on('end', () => {
        console.log('Answer: ' + answer);
        msg.react('👍🏻');
        msg.reply(answerv);
    });
});

const videoStream = fs.createReadStream(videoPath, { start, end });
videoStream.on();
req.write();

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
    msg.reply(`problem with request: ${e.message}`);
});
// req.write(JSON.stringify(body));
req.end();