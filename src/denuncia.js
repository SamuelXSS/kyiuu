const Discord = require("discord.js")
const client = new Discord.Client()
const config = require('./config.json')

const { prefix, token } = require('./config.json');
client.login(token);

client.on("ready", () => {
  console.log(`O pai ${client.user.tag} ta!`)
})
client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();
	if (command === 'teste') {
	if (!args.length) {
		return message.channel.send(`Parece que faltam informações, ${message.author}! Lembre-se de colocar: Nick *espaço* Motivo. Se tiver Prints, envie para um Staff.`);
	}
	for(var i=1;i<=prefix.length; i++){
		var motivo = args[i];
	}
	message.channel.send(`*DENÚNCIA FEITA COM SUCESSO*\n Nick: ${args[0]}\n Motivo: ${motivo}`);
}
})
