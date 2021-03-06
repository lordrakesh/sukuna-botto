import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Say hi to the bot.',
            category: 'general',
            usage: `${client.config.prefix}help`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Sukuna/sukuna.mp4'
        ]
        let sukuna = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: sukuna }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `Konnichiwa! *${M.sender.username}*, *I'm Sukunai!* Know your place Fool.

My perfix - !

- πΆπ΄π½π΄ππ°π»

β!google
β!covid
β!github
β!profile
β!hi
β!owner
β!support
β!xp
β!weather
β!crypto
β!sukuna
β!bot/chat

- πΌπ΄π³πΈπ°

β!play
β!yta
β!ytv
β!yts
β!spotify
β!karaoke
β!lyrics
β!rpaper
β!subred
β!sticker
β!blur

- π°π³πΌπΈπ½

β!tagall
β!purge
β!admin
β!promote
β!demote
β!remove
β!open
β!close
β!revoke
β!change (sub/desc)
β!nsfw (act/deact)
β!events (act/, deact)

- π΅ππ½

β!ship
β!quote
β!fact
β!hug
β!pat
β!kill
β!kick
β!dance
β!joke
β!trigger

- ππ΄π΄π±

β!waifu
β!husbando
β!loli
β!neko
β!animequote

- π·π΄π½ππ°πΈ

Cα΄α΄ΙͺΙ΄Ι’ Sα΄α΄Ι΄ π
<><><><><><><>

Sooooo, My work is done. Bye! 
Don't Summon Me Again (ΰΉβ’οΉβ’)` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
