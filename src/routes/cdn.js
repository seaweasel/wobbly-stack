const express = require('express');
const router = new express.Router();

const fs = require("fs");
const tus = require("tus-js-client");

router.get('/cdn', (req, res) => {

// specify location of file you'd like to upload below
    const path = __dirname + "/test.mp4";
    const file = fs.createReadStream(path);
    const size = fs.statSync(path).size;

    const options = {
        endpoint: "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT ID}/stream",
        headers: {
            'X-Auth-Email': '{EMAIL}',
            'X-Auth-Key': '{API KEY}',
        },
        chunkSize: 5 * 1024 * 1024, // Cloudflare Stream requires a minimum chunk size of 5MB.
        resume: true,
        metadata: {
            filename: "test.mp4",
            filetype: "video/mp4"
        },
        uploadSize: size,
        onError: function (error) {
            throw error;
        },
        onProgress: function (bytesUploaded, bytesTotal) {
            const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
            console.log(bytesUploaded, bytesTotal, percentage + "%");
        },
        onSuccess: function () {
            console.log("Upload finished:", upload.url);
            const index = upload.url.lastIndexOf("/") + 1;
            const mediaId = upload.url.substr(index)
            console.log("Media id:", mediaId);
        }
    };

    const upload = new tus.Upload(file, options);
    upload.start();
});

module.exports = router;
