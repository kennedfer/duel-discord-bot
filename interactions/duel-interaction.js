import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";
import { ButtonStyle } from "discord.js";
import { duelHooks } from "./hooks/index.js";

const POSITIVE_ID = "accept";
const NEGATIVE_ID = "forfeit";

let _oponent;
let _challenger;

const buttonRow = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setCustomId(POSITIVE_ID)
    .setLabel("⚔️")
    .setStyle(ButtonStyle.Success),

  new ButtonBuilder()
    .setCustomId(NEGATIVE_ID)
    .setLabel("🏳️")
    .setStyle(ButtonStyle.Danger)
);

const oponentIsBot = (interaction) => {
  return interaction.reply({ content: "Bots não podem ser desafiados" });
};

export const startDuel = (interaction, challenger, oponent) => {
  if (duelHooks.checkOponentIsBot(oponent)) return oponentIsBot(interaction);

  _oponent = oponent;
  _challenger = challenger;

  interaction.reply({
    content: `<@${_oponent.id}>, <@${_challenger.id}> o desafiou para um duelo!`,
    components: [buttonRow],
  });
};

export const checkChoice = (interaction) => {
  if (duelHooks.userIsNotOponent(interaction, _oponent)) {
    return userNotOponent(interaction);
  }

  if (interaction.customId == POSITIVE_ID) {
    if (challengerWinDuel()) return challengerWin(interaction);
    return challengerLose(interaction);
  }

  duelRefused(interaction);
};

const challengerLose = (interaction) => {
  interaction.update({
    content: `<@${_oponent.id}> ganhou o duelo!`,
    components: [],
  });
};

const challengerWin = (interaction) => {
  interaction.update({
    content: `<@${_challenger.id}> ganhou o duelo!`,
    components: [],
  });
};

const duelRefused = (interaction) => {
  interaction.update({
    content: `<@${_oponent.id}> é um COVARDE!`,
    components: [],
  });
};

const userNotOponent = (interaction) => {
  const user = interaction.user;

  interaction.update({
    content: `<@${user.id}> o oponente é <@${_oponent.id}> não você!`,
  });
};

const challengerWinDuel = () => {
  return Math.random() >= 0.55;
};
