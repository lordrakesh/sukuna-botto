import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'chitoge',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}chitoge`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Sukuna/sukuna-git.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: sukuna }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `火 ʂυƙυɳα\n\n⚜ *Description: Contact owner for repo *<!mod/>* \n\n\n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
