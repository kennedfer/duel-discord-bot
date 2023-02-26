import { SlashCommandBuilder } from "discord.js";
import { duelInteraction } from "../interactions/index.js";

export const duelCommand = {
  data: new SlashCommandBuilder()
    .setName("duelar")
    .setDescription("Desafie alguém para um duelo")
    .addUserOption((option) =>
      option
        .setName("oponente")
        .setDescription("Quem você quer chamar para um duelo?")
        .setRequired(true)
    ),

  async execute(interaction) {
    const oponent = interaction.options.getUser("oponente");
    const challenger = interaction.user;

    duelInteraction.startDuel(interaction, challenger, oponent);
  },
};
