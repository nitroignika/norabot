import { Message } from "discord.js";
import Command from "../../types/Command";

module.exports = new Command({
  name: "icon",
  description: "Get the icon URL of the specified user/yourself",
  aliases: ["avatar"],
  usage: `[@user(s)]`,
  execute(message: Message) {
    if (!message.mentions.users.size) {
      return message.channel.send(
        `Your icon: ${message.author.displayAvatarURL}`
      );
    }

    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s icon: ${user.displayAvatarURL}`;
    });

    message.channel.send(avatarList);
  }
});
