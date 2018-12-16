/**
 * norabot: a multi-purpose Discord bot
 *
 * Copyright (C) 2018 by nitroignika
 *
 * This file is part of norabot.
 *
 * norabot application is free software: you can redistribute
 * it and/or modify it under the terms of the GNU Affero General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * norabot application is distributed in the hope that it will
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU A General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with norabot.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license AGPL-3.0+ <http://spdx.org/licenses/AGPL-3.0+>
 */

const { deleteTimer }  = require("../../commands.json");

module.exports = {
    name: 'prune',
    description: 'Delete up to 99 messages',
    aliases: ['p'],
    usage: `[command amount]`,
    guildOnly: true,
    adminReq: true,
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('That is not a valid number.').then(msg => {
                msg.delete(deleteTimer)
            }).catch(err => {
                console.log(err);
            })
        }
        else if (amount <= 1 || amount > 100) {
            return message.reply('The number must be between 1 and 99.').then(msg => {
                msg.delete(deleteTimer)
            }).catch(err => {
                console.log(err);
            })
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Sorry, an error occured. If the problem persists, contact the developer').then(msg => {
                msg.delete(deleteTimer)
            }).catch(err => {
                console.log(err);
            })
        });
    }
};