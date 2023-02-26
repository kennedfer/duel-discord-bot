export const userIsNotOponent = (interaction, oponent) => {
  const userId = interaction.user.id;
  return userId != oponent.id;
};

export const checkOponentIsBot = (oponent) => {
  return oponent.bot;
};
