import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Generally used to check if bot is Up',
            category: 'general',
            usage: `${client.config.prefix}help`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(`Konnichiwa! *${M.sender.username}*, *I'm Sukuna!* I'm ready for help.

My perfix - !

- 🄶🄴🄽🄴🅁🄰🄻

◍!google
◍!covid
◍!github
◍!profile
◍!hi
◍!owner
◍!support
◍!xp
◍!weather
◍!sukuna
◍!bot/chat

- 🄼🄴🄳🄸🄰

◍ !sticker
◍ !toimg
◍ !play
◍ !ytmp3
◍ !ytmp4
◍ !yts
◍ !fb
◍ !ig
◍ !subreddit

 *- 🄰🄳🄼🄸🄽* 

◍ !add
◍ !kick
◍ !promote
◍ !demote
◍ !enable antilink
◍ !tagall
◍ !hidetag
◍ !linkgroup

- 🅆🄴🄴🄱

◍ !waifu
◍ !neko
◍ !wallpaperanime

Sooooo, My work is done. Bye! 

Any problem? Remember me :)
