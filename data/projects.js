const projects = [
  {
    title: "Needlify",
    url: "https://needlify.com",
    description: "A knowledge sharing plateform around IT and new technologies",
    image: "https://i.ibb.co/MNFxsL3/mockup2.png",
    tags: ["Blog", "Learn", "Tech"],
    wip: false,
  },
  {
    title: "TimePHP",
    url: "https://github.com/TimePHP-org",
    description: "Lightweight Php MVC framework",
    image: "",
    tags: ["Php", "Mvc", "Framework", "Twig"],
    wip: false,
  },
  {
    title: "Rainbow-console",
    url: "https://github.com/MrAnyx/Rainbow-console",
    description: "A very lightweight php library to color text in the console",
    image: "https://i.ibb.co/fN3hJYQ/photo-1609466686153-8da47ddda47b.png",
    tags: ["Php", "Console", "Color", "Composer"],
    wip: false,
  },
  {
    title: "Codeplate",
    url: "https://github.com/Codeplate-app/Codeplate",
    description: "Desktop app to manage community boilerplates",
    image: "",
    tags: ["Electron", "Boilerplate", "VueJS", "ViteJS"],
    wip: true,
  },
  {
    title: "Made with collection",
    url: "https://github.com/MrAnyx/made-with-collection",
    description:
      'A collection of "made-with..." badges to share the usage of a technology',
    image: "",
    tags: ["Js", "Npm"],
    wip: false,
  },
  {
    title: "Pony plugin",
    url: "https://github.com/MrAnyx/lite-plugin-pony",
    description:
      "This plugin allows you to use the Pony language within the Lite or Lite-XL editor",
    image: "",
    tags: ["Pony", "Lite", "Plugin"],
    wip: false,
  },
  {
    title: "Shortly",
    url: "https://github.com/MrAnyx/shortly",
    description: "Very simple url shortner made with AdonisJS",
    image: "",
    tags: ["AdonisJS", "Url", "Shortner", "Js"],
    wip: false,
  },
  {
    title: "TinyDB",
    url: "https://github.com/MrAnyx/TinyDB",
    description: "Json based database for tiny Php projects",
    image: "https://i.ibb.co/VHrZspk/tinydb.png",
    tags: ["Json", "Php", "Database"],
    wip: true,
  },
  {
    title: "HashTag",
    url: "https://github.com/MrAnyx/HashTag",
    description: "Desktop app to easily hash things",
    image: "https://i.ibb.co/vJ7NY0t/pexels-photo-2179483.png",
    tags: ["Electron", "Hash", "Js"],
    wip: false,
  },
  {
    title: "Quicklog",
    url: "https://github.com/MrAnyx/QuickLog_v2",
    description: "Simple password manager made with Electron and Vuejs",
    image: "",
    tags: ["Electron", "Password", "VueJS", "Vuetify"],
    wip: true,
  },
  {
    title: "Linux-autohost",
    url: "https://github.com/Buissartt/Linux-autohost",
    description:
      "Linux-autohost is a really small Bash script which automates the configuration of a new local web site on Debian distributions or WSL based on Debian distributions",
    image: "https://i.ibb.co/QfGGx3t/linux-autohost.png",
    tags: ["WSL", "Linux", "Debian", "Web"],
    wip: true,
  },
  {
    title: "Nuit de l'info 2020",
    url: "https://github.com/CrabGang-Team/crabgang2020",
    description:
      'For the third time in a row, accompanied by the Crab\'Gang team, we participated in the night of info. This year was, all the same, a bit special since, instead of regrouping with the team, we were each at home working on this year\'s project. Being our last participation, we wanted to finish in style. In this way, we have been rewarded 3 times. We first finished second in the challenge "Carbon code: sensitize users to the impact of their choices" proposed by the company Leroy Merlin in which we had to, via the use of a REST API created by us , show the CO2 consumption of the pages viewed by a user. We were also rewarded for the first time by the company Apside TOP by finishing second in the challenge "1337 5P34K" in which we had to transform the entire text of our site into Leet Speak. Finally, we were once again rewarded by this same company by finishing first in the "Oualle Strite Ingliche" challenge whose main objective was to create a website accessible by English and French speakers. Finally, Coddity praised our performance by awarding us fifth place out of a total of 35 for the "EMERGENCY MEETING !!!" challenge. in which we had to bring up references to the video game "Among us".',
    image: "",
    tags: ["Team", "Project", "Event", "1st place"],
    wip: false,
  },
  {
    title: "Nuit de l'info 2019",
    url: "https://github.com/MrAnyx/NuitInfo2019",
    description:
      'This year, we have been rewarded twice. Indeed, we finished second in the challenge: "Accessible to all users", offered by the company Altran. By accepting this challenge, we had to make our website accessible to everyone. We also finished third in the "Anime Your Victory Dance" challenge from the Alten company. This proposed to the teams to add a hidden page in which was a character doing a choreography performed using a JavaScript library: Three.js.',
    image: "",
    tags: ["Team", "Project", "Event", "1st place"],
    wip: false,
  },
  {
    title: "Nuit de l'info 2018",
    url: "https://github.com/MrAnyx/CrabGang.github.io",
    description:
      'La nuit de l\'Info is a national event that brings together thousands of students across France. During it, we took first place in the challenge: "U talkin???to me ??". The goal of it was to achieve the main theme of the night of info while adding functionality to the Google Assistant',
    image: "",
    tags: ["Team", "Project", "Event", "1st place"],
    wip: false,
  },
  {
    title: "FlappyBird",
    url: "https://github.com/MrAnyx/FlappyBird",
    description: "Obviously, this is the FlappyBird game written in Processing",
    image: "https://i.ibb.co/2MbGrs4/pexels-photo-414181.jpg",
    tags: ["FlappyBird", "Processing", "Game"],
    wip: false,
  },
  {
    title: "Picture of the day",
    url: "https://github.com/MrAnyx/TwitterBot",
    description:
      "Once again, this a Twitter bot that post the picture of the day from the Nasa API every day",
    image: "https://i.ibb.co/r54tF7C/E8p-R-DBWUAAt-Sk3.jpg",
    tags: ["Twitter", "Bot", "Nasa", "Picture"],
    wip: false,
  },
  {
    title: "ISS Everywhere",
    url: "https://github.com/MrAnyx/TwitterBot-ISS-Everywhere",
    description: "Twitter bot that post the position of the ISS every hour",
    image: "",
    tags: ["Twitter", "Bot", "Nasa", "Iss"],
    wip: false,
  },
  {
    title: "Bot Discord",
    url: "https://github.com/MrAnyx/DiscordBot",
    description: "My first ever Discord bot with different commands",
    image: "",
    tags: ["Discord", "Bot", "Commands"],
    wip: false,
  },
  {
    title: "Vykon 4",
    url: "https://github.com/MrAnyx/Vykon4",
    description:
      "12th grade final project. This is a Power 4 with an 'AI' written in Python",
    image: "",
    tags: ["Python", "Power 4", "AI"],
    wip: false,
  },
  {
    title: "Game of life",
    url: "https://github.com/MrAnyx/Jeu-de-la-vie",
    description: "Simple implementation of the Game of life using Processing",
    image: "",
    tags: ["Processing", "Game", "Cells", "Life"],
    wip: false,
  },
  {
    title: "Langton's Ant",
    url: "https://github.com/MrAnyx/FourmiLangton",
    description: "Langton's ant implementation written in Processing",
    image: "",
    tags: ["Langton", "Ant", "Processing"],
    wip: false,
  },
];

export default projects;
