const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
const cloudName = 'dpuu8grdy';
cloudinary.cloudName = cloudName;

const app = express();

const port = process.env.PORT || 5000;

cloudinary.config({ 
  cloud_name: cloudName, 
  api_key: '962124367574345', 
  api_secret: 'h8cEG2qXpF1KLuMvhJkaCUwd_oM' 
});
let cloudResult = '';
app.get('/api/getAllImages',cors(), (req, res) => {
  cloudinary.v2.api.resources( function(error, result)
  {
    cloudResult = result
  });
  
  res.send(cloudResult.resources);
});

app.listen(port, () => console.log(`Listening on port ${port}`));