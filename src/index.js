const {Client, Attachment} = require("discord.js")
const client = new Client()
const config = require('./config.json')
const cheerio = require('cheerio')
const request = require('request')
const GphApiClient = require('giphy-js-sdk-core')
var giphy = GphApiClient('YOUR-GIPHY-API')
const embed = {
  "title": "COMANDOS DISPONÍVEIS BOT KYIUU",
  "description": "```\n!bah\n!nosinhora\n!chupa\n!dia\n!gps\n!horas\n!kaique\n!gif\n!negoney\n!bom dia```",
  "url": "https://discordapp.com",
  "color": 15597776,
  "timestamp": "2020-05-14T20:30:02.985Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/705097507952132157/e2d7dc850b40abe791bf10d7d93fce64.png?size=256",
    "text": "by Café"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/avatars/705097507952132157/e2d7dc850b40abe791bf10d7d93fce64.png?size=256"
  },
  "author": {
    "name": "Kyiuu Bot",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/avatars/705097507952132157/e2d7dc850b40abe791bf10d7d93fce64.png?size=256"
  }
};


const { prefix, token } = require('./config.json');
client.login(token);

client.on("ready", () => {
  console.log(`O pai ${client.user.tag} ta on!`)
})
client.on("message", message => {
	const searchForGif = (gifName) => {
	  return giphy.search('gifs', {"q": gifName})
	         .then((response) => {
 				let result = Math.floor((Math.random() * response.data.length));
          	 	var gif = response.data[result].url;
           		return gif;
	         })
	         .catch((err) => {
	           	return err;
	         })
	}
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();
	if (command === "comandos") {
		message.channel.send({ embed });
	}
	if (command === "bomdia") {
		message.channel.send("Bom é você, dia é só um detalhe");
	}
	if (command === "bah") {
		message.channel.send("TCHÊ")
	}
	if (command === "hi") {
		let response = [
		"sla",
		"seila",
		"aaaaaisla",
		"hihihihislslaasalsa",
		"oi sla",
		"ai ai ai sla"
		]
		let result = Math.floor((Math.random() * response.length));
		message.channel.send(response[result])
	}
	if (command === "nosinhora") {
		message.channel.send("Alekinho")
	}
	if (command === "uai") {
		message.channel.send("Sô")
	}
	if (command === "chupa") {
		message.channel.send("cu de goianinha!")
	}
	if (command === "dia") {
		message.channel.send("de comer sua mamãe, aquela 20 toneladas!")
	}
	if (command === "gps") {
		let response = [
		"de acordo com a sua latitude e longitude, você está bem próximo da puta que te pariu. rs",
		"de acordo com a sua latitude e longitude, você está fodido de verdade",
		"de acordo com negoney, você já está no inferno"
		]
		let result = Math.floor((Math.random() * response.length));
		message.channel.send(response[result])
	}
	if (command === "horas") {
		message.channel.send("Hora de comer o cu de curioso")
	}
	if (command === "gif"){
	   var searchPromise = searchForGif(`${args}`);

	   searchPromise.then((gif) => {
	     message.channel.send(gif);
	   }) 
	}
	if (command === "negoney"){
		
	   image(message) 
	}
})

function image(message){
	var cars = {
		url: "http://results.dogpile.com/serp?qc=images&q=" + "nego+ney&capv=zKGGrxkRCk3debhNn_f-a2R5tCG7KyS48XzF_W5q0TnxhRt46JVFFB1CDAZQUVs",
		method: "GET",
		headers:{
			"Accept": "text/html",
			"User-Agent": "Chrome"
		}
	};

    request(cars, function(error, response, responseBody) {
    if (error) {
        return;
    }


    $ = cheerio.load(responseBody);


    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
   
    console.log(urls);

    if (!urls.length) {
       
        return;
    }

    // Send result
    message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
});

}
