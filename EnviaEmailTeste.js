var nodemailer = require('nodemailer');

        var remetente = nodemailer.createTransport({
          host: 'smtp.office365.com',
          service: 'smtp.office365.com',
          port: 587,
          secure: false,
          auth:{
            user: 'tech@movats.com.br',
            pass: 'Mova@2021' 
            },
            tls: {
                ciphers: 'SSLv3'
            }
          });
        
          var emailASerEnviado = {
        
            from: 'tech@movats.com.br',
            to: 'marcelo.shitakubo@movats.com.br',
            subject: 'Alguém aí está precisando de um reforço nas contas? 💼🤑',
            // text: `Olá,\n\nTemos uma oportunidade única para você antecipar seus recebiveis.\n\nCaso tenha interesse nos envie uma mensagem pelo WhatsApp pelo seguinte link: \n\nhttps://url.gratis/e1jwA\n\nAtenciosamente,\nSquad Movatech \n\n`,
            html: `<div style="background-color:#eeeeee">
                    <center>
                    <body style="width:600px">
                    <img src="https://i.imgur.com/zJQgyeH.png">
                      <br><br>
                      <font size="4"> 
                      <text style="text-align:justify">
                        Quer saber mais? Nos envie uma mensagem pelo WhatsApp com o código para identificação clicando <b><a href="https://api.whatsapp.com/send?phone=+14155238886&text=join%20solar-building" style="text-decoration:none">aqui 🚀</a></b>.  
                      </text>
                      <br><br>
                      </font> 
                      </body>
                    </center>
                  </div>`
            // attachments : [
            //   {
            //     filename: '@movatech',
            //     path: 'https://drive.google.com/file/d/1S915nk4kvAGocZerjwJIIHJEz-wHVFcd/preview',
            //     cid: 'main',

            //   }
            // ]
         };
        
        remetente.sendMail(emailASerEnviado, function(error){
            if (error) {
              console.log(error);
            } else {
              console.log('Email Enviado com sucesso')
            }
          });

