import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help 1',
            description: 'Generally used to check if bot is Up',
            category: 'misc',
            usage: `${client.config.prefix}help 1`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(`━━━━━━❰𝙰𝙳𝙼𝙸𝙽 𝚂𝙴𝙲𝚃𝙸𝙾𝙽❱━━━━━━
管理メニュー 🎗
━━━━━━━━━━━━━━━━━━━━━━━━
관리자 메뉴 🎗
━━━━━━━━━━━━━━━━━━━━━━━━
👑 /tagall
👑 /promote
👑 /demote
👑 /remove
👑 /open
👑 /close
👑 /purge 
👑 /xp
👑 /nsfw (activate/deactivate)
👑 /events (activate/deactivate)
━━━━━━━━━━━━━━━━━━━━━━━━
to know how to use the commands do
!help [command_name]`))
    }
}
