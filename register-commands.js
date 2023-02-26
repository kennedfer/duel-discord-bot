import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
import { botCommands } from "./commands/commands.js";

dotenv.config();

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log("ativando comandos");

    botCommands.forEach(
      async (command) =>
        await rest.put(Routes.applicationCommands(process.env.CLIENT_TOKEN), {
          body: [command.data.toJSON()],
        })
    );

    console.log("comandos ativos");
  } catch (er) {
    console.log(er);
  }
})();
