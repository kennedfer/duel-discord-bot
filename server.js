import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { botCommands } from "./commands/commands.js";
import { duelInteraction } from "./interactions/index.js";

dotenv.config();

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

bot.commands = new Collection();
botCommands.forEach((command) => bot.commands.set(command.data.name, command));

bot.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isButton()) {
    return await duelInteraction.checkChoice(interaction);
  }

  const command = interaction.client.commands.get(interaction.commandName);
  command.execute(interaction);
});

bot.login(process.env.BOT_TOKEN);

console.log("bot online...");
