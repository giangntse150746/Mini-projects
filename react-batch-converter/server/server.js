const port = 3001;
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// create an independence version of ffmpeg on node without installing to the system
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const app = express();
app.use(bodyParser.json());
app.use(fileUpload());
// Define the directory to store uploaded files
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// --------------------------------------------------

app.post('/convert', (req, res) => {
  if (!req.files || !req.files.mp3) {
    return res.status(400).json({ error: 'No MP3 file uploaded' });
  }

  const mp3File = req.files.mp3; console.log(mp3File);
  const filePath = path.join(uploadsDir, mp3File.name);
  const wavFilePath = path.join(uploadsDir, mp3File.name.replace('.mp3', '.wav'));

  mp3File.mv(filePath, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to upload file' });
    }

    try {
      await new Promise((resolve, reject) => {
        ffmpeg(filePath)
          .toFormat('wav')
          .on('end', () => {
            resolve();
          })
          .on('error', (err) => {
            reject(err);
          })
          .save(wavFilePath);
      });

      res.download(wavFilePath, 'converted.wav', (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to download converted file' });
        }
        // Clean up files
        fs.unlinkSync(filePath);
        fs.unlinkSync(wavFilePath);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to convert file' });
    }
  });
});

// --------------------------------------------------

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});