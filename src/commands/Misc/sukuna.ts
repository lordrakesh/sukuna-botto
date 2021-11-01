import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'sukuna',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}sukuna`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Sukuna/sukuna-git.mp4'
        ]
        let sukuna = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: sukuna }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `Konnichiwa! *${M.sender.username}*, *I'm Sukuna!* I'm ready for help.

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
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
