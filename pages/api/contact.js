const contactForm = (req) =>{
    return(
        `
            <div>
                <p><mark>Nome</mark>: ${req.body.name}</p>
                <p><mark>Empresa</mark>: ${req.body.company}</p>
                <p><mark>Número de colaboradores</mark>: ${req.body.companySize}</p>
                <p><mark>Email</mark>: ${req.body.email}</p>
                <p><mark>Mensagem</mark>: ${req.body.message}</p>
            </div>
        `
    )
}

export default function contact(req, res) {
    require('dotenv').config()
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.user,
            pass: process.env.pass,
        },
        secure: true,
    });
    console.log(contactForm(req))
    const mailData = {
        from: 'contato@borogodo.co',
        to: process.env.user,
        subject: `Mensagem enviada por: ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: contactForm(req)
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}
