const tools = [
  {
    header: "Code editors",
    anchor: "code-editors",
    items: [
      {
        name: "Visual Studio Code",
        link: "https://code.visualstudio.com/",
        description:
          "It's very flexible and it has very good features for javascript projects.",
      },
      {
        name: "PHPStorm",
        link: "https://www.jetbrains.com/phpstorm/",
        description:
          "It's more convenient for PHP. The autocompletion, code scanning, ...",
      },
      {
        name: "Lite XL",
        link: "https://lite-xl.github.io/",
        description: "To quickly edit a file.",
      },
    ],
  },
  {
    header: "Fonts",
    anchor: "fonts",
    items: [
      {
        name: "Cascadia Code",
        link: "https://github.com/microsoft/cascadia-code",
        description:
          "Ligature and cursive style 😍. This is a greate alternative to Operator Mono.",
      },
      {
        name: "JetBrains Mono",
        link: "https://www.jetbrains.com/lp/mono/",
        description: "When I get tired of using Cascadia Code.",
      },
      {
        name: "Fira Code",
        link: "https://github.com/tonsky/FiraCode",
        description: "When I get tired of using JetBrains Mono.",
      },
    ],
  },
  {
    header: "Inspirations",
    anchor: "inspirations",
    items: [
      {
        name: "Dribbble",
        link: "https://dribbble.com/",
        description: "Best website to get inspired.",
      },
      {
        name: "Pinterest",
        link: "https://www.pinterest.com/",
        description: "Infinite source of inspiration.",
      },
      {
        name: "Screenlane",
        link: "https://screenlane.com/",
        description: "Another way to get inspired.",
      },
      {
        name: "Flowrift",
        link: "https://flowrift.com/",
        description: "A collection a beautiful UI components.",
      },
    ],
  },
  {
    header: "Productivity softwares",
    anchor: "productivity-softwares",
    items: [
      {
        name: "Notion",
        link: "https://www.notion.so/",
        description:
          "Simply he best tool to organize projects, ideas, meetings, ...",
      },
      {
        name: "Pomotroid",
        link: "https://splode.github.io/pomotroid/",
        description: "Small but very efficient pomodoro timer.",
      },
      {
        name: "Todoist",
        link: "https://todoist.com/",
        description: "Helpful to schedule my time.",
      },
      {
        name: "Astral",
        link: "https://astralapp.com/",
        description: "Web application to manage github stars.",
      },
      {
        name: "Codespace",
        link: "https://codespace.app/",
        description: "Never forget a code snippet.",
      },
      {
        name: "Office 365",
        link: "https://www.office.com/",
        description: "Obviously 😄",
      },
      {
        name: "Carbon",
        link: "https://carbon.now.sh/",
        description: "Share pieces of code with syntax highlighting.",
      },
    ],
  },
  {
    header: "Messenging",
    anchor: "messenging",
    items: [
      {
        name: "Discord",
        link: "https://discord.com/",
        description: "Organize conversations, communities, servers, ...",
      },
      {
        name: "Mailspring",
        link: "https://getmailspring.com/",
        description: "Beautiful email client.",
      },
      {
        name: "Signal",
        link: "https://signal.org/",
        description: "Messenging app focused on privacy.",
      },
    ],
  },
  {
    header: "Blogs",
    anchor: "blogs",
    items: [
      {
        name: "Needlify",
        link: "https://needlify.com/",
        description:
          "Well, this is probably the best platform to learn and share knowledges about new technologies",
      },
      {
        name: "Devto",
        link: "https://dev.to/",
        description:
          "Community platform where people share ideas and tutorials.",
      },
      {
        name: "Medium",
        link: "https://medium.com/",
        description:
          "Wonderful place where people share thoughts not only around technologies.",
      },
      {
        name: "Scotch",
        link: "https://scotch.io/",
        description: "Great place to find tutorials about web technologies.",
      },
      {
        name: "Github Blog",
        link: "https://github.blog/",
        description: "Ideas to help developers build better softwares",
      },
    ],
  },
  {
    header: "Images / Icons",
    anchor: "images-icons",
    items: [
      {
        name: "Unsplash",
        link: "https://unsplash.com/",
        description: "Thousands of free to use pictures.",
      },
      {
        name: "Undraw",
        link: "https://undraw.co/",
        description: "An open-source illustration bank.",
      },
      {
        name: "SimpleIcons",
        link: "https://simpleicons.org/",
        description: "Almost every brand logo are in SimpleIcons",
      },
    ],
  },
  {
    header: "Design",
    anchor: "design",
    items: [
      {
        name: "Adobe XD",
        link: "https://www.adobe.com/products/xd.html",
        description: "Excellent for creation and prototyping.",
      },
      {
        name: "Color Hunt",
        link: "https://colorhunt.co/",
        description: "Simple website that generated color palettes.",
      },
    ],
  },
  {
    header: "Terminals",
    anchor: "terminals",
    items: [
      {
        name: "Windows Terminal",
        link: "https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701",
        description: "CMD on steroids 💪",
      },
      {
        name: "Git Bash",
        link: "https://git-scm.com/",
        description: "Simple terminal with linux commands support.",
      },
      {
        name: "Ubuntu 20.04",
        link: "https://www.microsoft.com/en-ca/p/ubuntu-2004-lts/9n6svws3rx71",
        description: "Real Linux kernel on Windows.",
      },
      {
        name: "Kali Linux",
        link: "https://www.microsoft.com/en-ca/p/kali-linux/9pkr34tncv07",
        description: "To learn ethical hacking.",
      },
    ],
  },
  {
    header: "Other development tools",
    anchor: "other-development-tools",
    items: [
      {
        name: "Windows Subsystem for Linux (WSL 2)",
        link: "https://docs.microsoft.com/en-us/windows/wsl/install",
        description:
          "Allow you to use windows and linux at the same time. Best of both worlds.",
      },
      {
        name: "TablePlus",
        link: "https://www.tableplus.io/",
        description: "Desktop app to manage databases.",
      },
      {
        name: "Filezilla",
        link: "https://filezilla-project.org/",
        description: "Upload and download files using FTP and sFTP.",
      },
      {
        name: "Insomnia",
        link: "https://insomnia.rest/",
        description: "Execute and test REST API endpoints.",
      },
      {
        name: "Github",
        link: "https://github.com/MrAnyx",
        description: "Who doesn't use Github ?",
      },
      {
        name: "Mailtrap",
        link: "https://mailtrap.io/",
        description: "Flexible mail API.",
      },
      {
        name: "Composer",
        link: "https://getcomposer.org/",
        description: "PHP package manager.",
      },
      {
        name: "Regex 101",
        link: "https://regex101.com/",
        description: "Build and (hopefully) understand regex.",
      },
    ],
  },
  {
    header: "Other softwares",
    anchor: "other-softwares",
    items: [
      {
        name: "Brave",
        link: "https://brave.com/",
        description: "Chrome with privary.",
      },
      {
        name: "Spotify",
        link: "https://www.spotify.com/",
        description: "Start VSCode, play your playlist and enjoy coding.",
      },
      {
        name: "PowerToys",
        link: "https://github.com/microsoft/PowerToys",
        description: "Utilitary tools to enjoy using windows everyday.",
      },
    ],
  },
  {
    header: "Chrome extensions",
    anchor: "chrome-extensions",
    items: [
      {
        name: "Fonts Ninja",
        link: "https://chrome.google.com/webstore/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh",
        description: "Discover which fonts are used on a website.",
      },
      {
        name: "Vue DevTool",
        link: "https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg",
        description: "Understand and debug vue behaviour.",
      },
    ],
  },
  {
    header: "VSCode extensions",
    anchor: "vscode-extensions",
    items: [
      {
        name: "Bearded Theme Arc EolStorm",
        link: "https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg",
        description: "Great theme for bearded men 🧔",
      },
      {
        name: "Material Icons Theme",
        link: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
        description: "Classic but still effective.",
      },
      {
        name: "Fluent Icons",
        link: "https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons",
        description: "To improve the overall look of VSCode.",
      },
      {
        name: "TODO Highlight",
        link: "https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight",
        description: "Get organized even when you code.",
      },
      {
        name: "Todo Tree",
        link: "https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree",
        description: "Simple extension that lists every TODO comment.",
      },
      {
        name: "ESLint",
        link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
        description: "Code formatting",
      },
      {
        name: "Prettier",
        link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
        description: "Code formatting (bis)",
      },
      {
        name: "GitLens",
        link: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
        description: "Achieve complex git tasks.",
      },
      {
        name: "Polacode",
        link: "https://marketplace.visualstudio.com/items?itemName=pnp.polacode",
        description: "Create code snippet and save it as an image.",
      },
      {
        name: "Remote WSL",
        link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl",
        description: "Develop a project on WSL using VSCode.",
      },
      {
        name: "Vetur",
        link: "https://marketplace.visualstudio.com/items?itemName=octref.vetur",
        description: "Make the VueJS development way easier.",
      },
      {
        name: "WikiLens",
        link: "https://marketplace.visualstudio.com/items?itemName=lostintangent.wikilens",
        description: "Document your code using Wiki or markdown pages.",
      },
    ],
  },
  {
    header: "Programming languages",
    anchor: "programming-languages",
    items: [
      {
        name: "Javascript",
        link: "https://www.javascript.com/",
        description: "Dynamize websites",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
        description: "Create stable apps with types",
      },
      {
        name: "PHP",
        link: "https://www.php.net/",
        description: "Why not 😄",
      },
      {
        name: "Python",
        link: "https://www.python.org/",
        description: "Simple and flexible.",
      },
    ],
  },
  {
    header: "Frameworks",
    anchor: "frameworks",
    items: [
      {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        description: "Good for prototyping.",
      },
      {
        name: "Symfony",
        link: "https://symfony.com/",
        description: "To create websites with a string PHP backend.",
      },
      {
        name: "VueJS",
        link: "https://vuejs.org/",
        description: "I used to use React, and then, I discovered VueJS 💗",
      },
      {
        name: "ViteJS",
        link: "https://vitejs.dev/",
        description: "Speed up the development process.",
      },
      {
        name: "Electron",
        link: "https://www.electronjs.org/",
        description: "Convert websites into desktop apps.",
      },
      {
        name: "NuxtJS",
        link: "https://nuxtjs.org/",
        description:
          "Quickly create VueJS web apps without spending time to configure everythings.",
      },
    ],
  },
];

export default tools;
