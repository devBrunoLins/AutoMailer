var http = require('http');
var cron = require('node-cron');
var nodemailer = require('nodemailer');
var colors = require('colors');
// Criando Servidor
var server = http.createServer(function (request, response) {
	response.writeHead(200, {
		"Content-Type": "text/html"
	});

	cron.schedule('23 22 * * *', function NodeCron() {
		// Inicio do Mailer
		// Enviando e-mails usando o Node.js e o famoso nodemailer
		// Vamos criar a conta que irá mandar os e-mails
		var conta = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'blins44@gmail.com', // Seu usuário no Gmail
				pass: 'nike2011' // A senha da sua conta no Gmail
			}
		});
		conta.sendMail({
			from: 'Bruno Lins <blins44@gmail.com>', // Quem está mandando
			to: 'Luiz Felipe Nicolini - Futuro Dev Avanade <luizfelipenicolini@gmail.com>', // Para quem o e-mail deve chegar
			subject: 'Você está contratado! Parabens', // O assunto
			html: '<strong>Oi!</strong><p>Estou testando o meu AutoMailer! @devBrunoLins</p>', // O HTMl do nosso e-mail
		}, (err) => {
			if (err) throw err;
			console.log('E-mail enviado com sucesso.');
		});
		// Fim do Mailer
	});
	response.end();
});
// Listando o Servidor na Porta 3000
server.listen(3000, () => {
	const version = 'v1.0';
	console.log(colors.green('Acesse: localhost:3000 em seu navegador para iníciar o AutoMailer ' + version));
	console.log(colors.magenta('Ajude-nos também no aperfeiçoamento de nosso AutoMailer'));
});