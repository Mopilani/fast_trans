const express = require("express");
const app = express();
const fs = require("fs");

app.post('/dart', function (req, res) {
    res.status(200);
    req.read().on('readable', () => {
        let chunk;
        console.log('Stream is readable (new data received in buffer)');
        // Use a loop to make sure we read all currently available data
        while (null !== (chunk = readable.read())) {
            console.log(`Read ${chunk.length} bytes of data...`);
        }
    });
});


// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

// app.get("/video", function (req, res) {
//     const range = req.headers.range;
//     if (!range) {
//         res.status(400).send("Requires Range header");
//     }
//     const videoPath = "Kimetsu.mp4";
//     const videoSize = fs.statSync("Kimetsu.mp4").size;
//     const CHUNK_SIZE = 10 ** 6;
//     const start = Number(range.replace(/\D/g, ""));
//     const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
//     const contentLength = end - start + 1;
//     const headers = {
//         "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": contentLength,
//         "Content-Type": "video/mp4",
//     };
//     res.writeHead(206, headers);
//     const videoStream = fs.createReadStream(videoPath, { start, end });
//     videoStream.pipe(res);
// });

app.listen(8024, function () {
    console.log("Listening on port 8024!");
});