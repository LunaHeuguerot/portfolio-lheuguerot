const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_APP_USER, 
        pass: process.env.GMAIL_APP_PASS 
    }
});


app.post('/send', (req, res) => {
    const { nombre, telefono, email, tema, detalle } = req.body; 

    const mailOptions = {
        from: '"Consulta de Formulario" <dblunah@gmail.com>',
        to: 'dblunah@gmail.com', 
        subject: `Consulta sobre: ${tema}`,
        text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nTema: ${tema}\nDetalle: ${detalle}`,
        html: `<p><strong>Nombre:</strong> ${nombre}</p>
               <p><strong>Teléfono:</strong> ${telefono}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Tema:</strong> ${tema}</p>
               <p><strong>Detalle:</strong> ${detalle}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Consulta enviada: ' + info.messageId);
    });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});