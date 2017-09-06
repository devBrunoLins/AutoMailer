var http = require('http');
var cron = require('node-cron');
var nodemailer = require('nodemailer');

// Criando Servidor
var server = http.createServer(function(request, response){
	response.writeHead(200,{"Content-Type": "text/html"});

	cron.schedule('36 15 * * *', function NodeCron(){
		
		// Inicio do Mailer
		
		// Enviando e-mails usando o Node.js e o famoso nodemailer
		var nodemailer = require('nodemailer');

		// Vamos criar a conta que irá mandar os e-mails
		var conta = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
        			user: 'blins44@gmail.com', // Seu usuário no Gmail
        			pass: 'nike2011' // A senha da sua conta no Gmail
        		}
        	});

		conta.sendMail({
    		from: 'Nome Empresa <blins44@gmail.com>', // Quem está mandando
    		to: 'Eduardo Labre <eduardo@simplificafretes.com.br>, Luiz Paulo <luizpaulo@simplificafretes.com.br>', // Para quem o e-mail deve chegar
    		subject: 'Fazendo testes de AutoMailer v1.0', // O assunto
    		html: '<strong>Oi!</strong><p>Estou testando o AutoMailer! E esse é o corpo em HTML5 do meu e-mail.</p>', // O HTMl do nosso e-mail
    	}, function(err){
    		if(err)
    			throw err;

    		console.log('E-mail enviado com sucesso.');
    	});
		// Fim do Mailer
	});
	response.end();
});

// Listando o Servidor na Porta 3000
server.listen(3000, function(){
	var version = '1.0';
	console.log('Acesse: localhost:3000 em seu navegador para iníciar o AutoMailer '+ version);
});

