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
◍!crypto
◍!sukuna
◍!bot/chat

- 🄼🄴🄳🄸🄰

◍!play
◍!yta
◍!ytv
◍!yts
◍!spotify
◍!karaoke
◍!lyrics
◍!rpaper
◍!subred
◍!sticker
◍!blur

- 🄰🄳🄼🄸🄽

◍!tagall
◍!purge
◍!admin
◍!promote
◍!demote
◍!remove
◍!open
◍!close
◍!revoke
◍!change (sub/desc)
◍!nsfw (act/deact)
◍!events (act/, deact)

- 🄵🅄🄽

◍!ship
◍!quote
◍!fact
◍!hug
◍!pat
◍!kill
◍!kick
◍!dance
◍!joke
◍!trigger

- 🅆🄴🄴🄱

◍!waifu
◍!husbando
◍!loli
◍!neko
◍!animequote

- 🄷🄴🄽🅃🄰🄸

Cᴏᴍɪɴɢ Sᴏᴏɴ 🍑
<><><><><><><>

Sooooo, My work is done. Bye! 
Don't Summon Me Again (๑•﹏•)` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
