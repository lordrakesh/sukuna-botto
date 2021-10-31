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
        return void (await M.reply(`OWNER

🎗 #off

🎗 #on

🎗 #status

🎗 #setthumb

🎗 #settarget

🎗 #setfakeimg

🎗 #setreply

🎗 #setprefix [2 Button]

🎗 #mode [2 Button self/public]

🎗 #term <code>

🎗 #eval <code>

🎗 #colongsw [reply sw]

    

GRUP

🧧 #grup [3 Button]

🧧 #promote <reply chat member>

🧧 #demote <reply chat member>

🧧 #setdesc

🧧 #setname

🧧 #kick <reply/tag member>

🧧 #add <reply/tag member>

🧧 #getbio <reply chat member>

🧧 #getname <reply chat member>

🧧 #reminder <msg/2s>

🧧 #listonline

🧧 #linkgc

🧧 #sider [reply chat bot]

🧧 #antilink

🧧 #antihidetag

🧧 #antiviewonce

🧧 #antivirus

🧧 #kickarea <anti +1 number>

🧧 #leveling <1(on)/0(off)>

🧧 #delete <reply to bot msg>

🧧 #bc <broadcast both>

🧧 #bcgc <broadcast grup>

🧧 #profile

    

MAKER

🎭 #wolf <text>

🎭 #tfire <text>

🎭 #ytgold <text>

🎭 #ytsilver <text>

🎭 #t3d  <text>

🎭 #logo <text&text>

🎭 #phlogo <text&text>

🎭 #write <text>

🎭 #phcomment <text&text>

🎭 #marvel <text&text>

🎭 #leavest<text>

🎭 #neon <text>

🎭 #wall <text>

🎭 #sticker

🎭 #swm <author|packname>

🎭 #take <author|packname>

🎭 #fdeface

🎭 #emoji

    

CONVERT

🧩 #toimg

🧩 #tomp3

🧩 #tomp4

🧩 #slow

🧩 #fast

🧩 #reverse

🧩 #tourl

🧩 #tts

🧩 #attp

    

DOWNLOADER

🎼 #youtube <url>

🎼 #tiktok <url>

🎼 #instagram <url>

🎼 #twitter <url>

UP STORY

🎆 #upswtxts

🎆 #upswimage

🎆 #upswvideo

    

CONTACT

🎍 #slander

🎍 #slanderpc

🎍 #contact

    

TAG

🔗 #tagall

🔗 #hidetag

🔗 #contacttag

🔗 #sticktag

🔗 #mediatag

FUN

✨ #truth

✨ #dare

✨ #lesbiancheck

✨ #handsomecheck

✨ #gaycheck

✨ #beautifulcheck

✨ #uglycheck

✨ #uglycheck

✨ #slap

    

OTHER

🎨 #ping

🎨 #inspect

🎨 #join

🎨 #searchmessage <query>

🎨 #get

🎨 #ytsearch <query>

🎨 #igstalk <query>

🎨 #githubstalk <query>

🎨 #tiktokstalk <query>

🎨 #play <query>

🎨 #video <query>

🎨 #igstory <username>

🎨 #twitter <link>

🎨 #tiktok <link>

🎨 #tiktokaudio <link>

🎨 #fb <link>

🎨 #brainly <query>

🎨 #image <query>

🎨 #anime <random>

🎨 #pinterest <query>

🎨 #comic <query>

🎨 #lyrics <query>

🎨 #chara <query>

🎨 #playstore <query>

🎨 #otaku <query>

    

SIMPLE BOT

🔧 #jadibot

🔧 #stopjadibot

🔧 #listbot

STICKER CMD

⚙ #addcmd

⚙ #delcmd

⚙ #listcmd

    

VOTE

♦ #voting

♦ #delvote

♦ #vote

♦ #devote`))
    }
}
