var http = require('http');
var cron = require('node-cron');
var nodemailer = require('nodemailer');
var colors = require('colors');
// Criando Servidor
var server = http.createServer(function (request, response) {
	response.writeHead(200, {
		"Content-Type": "text/html"
	});

	cron.schedule('00 00 * * *', function NodeCron() {
		// Inicio do Mailer
		// Enviando e-mails usando o Node.js e o famoso nodemailer
		// Vamos criar a conta que irá mandar os e-mails
		var conta = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'example@gmail.com', // Seu usuário no Gmail
				pass: '*****' // A senha da sua conta no Gmail
			}
		});
		conta.sendMail({
			from: 'Nome Empresa <blins44@gmail.com>', // Quem está mandando
			to: 'Bruno Lins <blins44@gmail.com>', // Para quem o e-mail deve chegar
			subject: 'Fazendo testes de AutoMailer v1.0', // O assunto
			html: '<strong>Oi!</strong><p>Estou testando o seu AutoMailer! @devBrunoLins</p>', // O HTMl do nosso e-mail
		}, (err) => {
			if (err) throw err;
			console.log('E-mail enviado com sucesso.');
		});
		// Fim do Mailer
	});
	response.end();
});
// Listando o Servidor na Porta 3000
server.listen(3000, function () {
	const version = 'v1.0';
	console.log(colors.green('Acesse: localhost:3000 em seu navegador para iníciar o AutoMailer ' + version));
	console.log(colors.magenta('Ajude-nos também no aperfeiçoamento de nosso AutoMailer'));
});