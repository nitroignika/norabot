import { Message } from "discord.js";
import Command from "../../types/Command";

module.exports = new Command({
  name: "leave",
  description: "Have the bot leave the channel it is currently in",
  aliases: ["l"],
  usage: ``,
  guildOnly: true,
  voiceRequired: true,
  async execute(message: Message) {
    message.guild.me.voiceChannel.leave();
    message.reply("goodbye!");
  }
});
