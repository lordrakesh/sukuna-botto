import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bc',
            description: 'Boroadcast',
            category: 'dev',
            usage: `${client.config.prefix}bc (text)`
        })
    }

broadcast = async (text: string, M: WAMessage): Promise<string> => {
        if (!text) return `The Broadcast Message can't be Empty`
        const chats = this.client.chats.all().filter((chat) => chat.jid.endsWith('g.us'))
        const img = await (M.message?.imageMessage
            ? this.client.downloadMediaMessage(M)
            : readFile(join(__dirname, '..', '..', 'assets', 'images', 'broadcast.png')))
        const bc = `${text}\n\n*[${this.client._config.name} BROADCAST]*`
        const groups: string[] = []
        for (const chat of chats) {
            if (!chat.read_only) {
                try {
                    await this.client.sendMessage(chat.jid, img, MessageType.image, { caption: bc })
                    groups.push(chat.metadata?.subject || '')
                } catch (err) {
                    console.log(err.msg)
                    continue
                }
            }
        }
        return `📣 *Broadcast: ${text}*\n\n💌 *Sent to:*\n${groups.join('\n')}`
    }
}
