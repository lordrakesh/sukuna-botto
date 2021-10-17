import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'uname',
            description: 'Generally used to check if bot is Up',
            category: 'misc',
            usage: `${client.config.prefix}uname`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(`👒 Your user name is ${M.sender.username}!`))
    }
}
