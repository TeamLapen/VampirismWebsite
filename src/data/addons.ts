export type AddonCategory = 'Official' | '3rd Party' | 'Older/Outdated'

export interface Addon {
  name: string
  description: string
  category: AddonCategory
  image?: string
  imageStyle?: 'banner' | 'icon'
  curseforge?: string
  modrinth?: string
  wiki?: string
}

export const addons: Addon[] = [
  {
    name: 'Vampirism Integrations',
    description:
      'Adds compatibility between Vampirism and several other mods. Vampirism itself only supports JEI — this mod extends that to many more integrations.',
    category: 'Official',
    image: '/assets/img/mods/vampirism-integrations-banner.png',
    imageStyle: 'banner',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/vampirism-integrations',
    modrinth: 'https://modrinth.com/mod/vampirism-integrations',
    wiki: 'https://wiki.vampirism.dev/integrations/wiki/intro',
  },
  {
    name: 'Werewolves',
    description:
      'Werewolves are strong and brutal with sharp teeth and claws. As a werewolf you live as human during the day and unleash your strength at night.',
    category: 'Official',
    image: '/assets/img/mods/werewolves-title.svg',
    imageStyle: 'banner',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/werewolves-become-a-beast',
    modrinth: 'https://modrinth.com/mod/werewolves',
    wiki: 'https://wiki.werewolves.dev',
  },
  {
    name: 'Godly Vampirism',
    description:
      'A small addon mod that changes Vampirism\'s configuration to remove most of the downsides of being a vampire.',
    category: 'Official',
    image: '/assets/img/mods/godly-vampirism-icon.png',
    imageStyle: 'icon',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/godly-vampirism',
    modrinth: 'https://modrinth.com/mod/godlyvampirisms',
  },
  {
    name: 'Vampires Need Umbrellas',
    description:
      'Vampires no longer need to fear the sun! This mod adds umbrellas that protect vampires from sunlight.',
    category: '3rd Party',
    image: '/assets/img/mods/vampires-need-umbrellas-banner.png',
    imageStyle: 'banner',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/vampires-need-umbrellas',
  },
  {
    name: 'Vampiric Ageing',
    description:
      'A highly configurable addon that adds an Ageing Mechanic for Vampires, Hunters, and if installed, Werewolves.',
    category: '3rd Party',
    image: '/assets/img/mods/vampiric-ageing-icon.png',
    imageStyle: 'icon',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/vampiric-ageing-a-vampirism-addon',
  },
  {
    name: "Vampire's Delight",
    description:
      "An addon for Farmer's Delight and Vampirism with the aim of nourishing vampires as well as humans.",
    category: '3rd Party',
    image: '/assets/img/mods/vampires_delight.png',
    imageStyle: 'icon',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/vampires-delight',
    modrinth: 'https://modrinth.com/mod/vampires-delight',
  },
  {
    name: 'Bloodlines',
    description:
      'Adds a Bloodline mechanic for vampires and hunters, fundamentally changing the way you play Vampirism.',
    category: '3rd Party',
    image: '/assets/img/mods/bloodlines-icon.png',
    imageStyle: 'icon',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/bloodlines',
  },
  {
    name: 'Dynamic Trees – Vampirism',
    description:
      'Adds compatibility between Dynamic Trees and Vampirism, bringing dynamic tree growth to vampire biomes.',
    category: '3rd Party',
    image: '/assets/img/mods/banner.png',
    imageStyle: 'banner',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/dynamic-trees-vampirism',
  },
  {
    name: 'Vamparasols',
    description:
      'Creates parasols and other accessories to protect vampires from the sun. Parasols currently have infinite durability.',
    category: 'Older/Outdated',
    image: '/assets/img/mods/vamparasols.jpeg',
    imageStyle: 'banner',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/vamparasols',
  },
  {
    name: 'Mekanism × Vampirism: MekaSuit Modules',
    description:
      'A fusion of ancient blood and futuristic technology. Vampires can use the power of Mekanism to keep the sun at bay and feed automatically.',
    category: 'Older/Outdated',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/mekanism-x-vampirism-integration-mekasuit-modules',
    modrinth: 'https://modrinth.com/mod/mekanism-x-vampirism-integration-mekasuit-modules',
  },
  {
    name: 'VampPatch',
    description:
      'A lightweight compatibility and bug-fix mod for Vampirism on Minecraft 1.12.2.',
    category: 'Older/Outdated',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/vamppatch',
  },
  {
    name: 'D&D Origins 5e',
    description:
      'Vampire, Werewolf, and other origins for the Origins mod inspired by Dungeons & Dragons 5th edition.',
    category: 'Older/Outdated',
    curseforge: 'https://www.curseforge.com/minecraft/mc-mods/origins-5e',
  },
]
