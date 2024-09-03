const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'bdwissem658@gmail.com',
      pass: 'BD8074512002BD',
  },
});
app.use(cors());
app.use(express.json());
function buyproduct() {
  var phoneNumber = prompt("Entrez votre numéro de téléphone");
  if (phoneNumber == null || phoneNumber == "") {
      alert("Veuillez entrer votre numéro de téléphone.");
      return;
  }

  // Send the phone number to the backend
  fetch('http://localhost:3000/submit-phone', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
  })
  .catch(error => {
      alert('Erreur lors de l\'envoi du numéro de téléphone.');
      console.error('Error:', error);
  });
}

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
const mailOptions = {
  from: 'estwissem1@gmail.com',
  to: 'bdwissem658@gmail.com',
  subject: '+216 55 187 604',
  text: `Phone Number rr need u: ${+216 95857308}`,
};