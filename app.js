const { Client } = require('discord.js');

const client = global.client = new Client({ disableEveryone: true});
const process = global.process;

client.on("ready", async () => {
  let sesliKanalID = client.channels.cache.get(""); //SES KANALI ID
  if (sesliKanalID)
    sesliKanalID.join()
      .catch(err => console.error("Bot ses kanalina baglanamadi!"));
});

require('./src/login');
require('./src/events');
require('./src/commands');

 