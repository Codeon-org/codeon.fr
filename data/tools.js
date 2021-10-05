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
        description: "",
      },
      {
        name: "Lite XL",
        link: "https://lite-xl.github.io/",
        description: "",
      },
      {
        name: "Github Codespace",
        link: "https://github.com/features/codespaces",
        description: "",
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
        description: "",
      },
      {
        name: "Fira Code",
        link: "https://github.com/tonsky/FiraCode",
        description: "",
      },
      {
        name: "JetBrains Mono",
        link: "https://www.jetbrains.com/lp/mono/",
        description: "",
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
        description: "",
      },
      {
        name: "Pinterest",
        link: "https://www.pinterest.com/",
        description: "",
      },
      {
        name: "Screenlane",
        link: "https://screenlane.com/",
        description: "",
      },
      {
        name: "Flowrift",
        link: "https://flowrift.com/",
        description: "",
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
        description: "",
      },
      {
        name: "Pomotroid",
        link: "https://splode.github.io/pomotroid/",
        description: "",
      },
      {
        name: "Todoist",
        link: "https://todoist.com/",
        description: "",
      },
      {
        name: "Astral",
        link: "https://astralapp.com/",
        description: "",
      },
      {
        name: "Codespace",
        link: "https://codespace.app/",
        description: "",
      },
      {
        name: "Office 365",
        link: "https://www.office.com/",
        description: "",
      },
      {
        name: "Carbon",
        link: "https://carbon.now.sh/",
        description: "",
      },
      {
        name: "Google Suit",
        link: "https://workspace.google.com/",
        description: "",
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
        description: "",
      },
      {
        name: "Mailspring",
        link: "https://getmailspring.com/",
        description: "",
      },
      {
        name: "Messenger",
        link: "https://www.messenger.com/",
        description: "",
      },
      {
        name: "Signal",
        link: "https://signal.org/",
        description: "",
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
        description: "",
      },
      {
        name: "Devto",
        link: "https://dev.to/",
        description: "",
      },
      {
        name: "Medium",
        link: "https://medium.com/",
        description: "",
      },
      {
        name: "Scotch",
        link: "https://scotch.io/",
        description: "",
      },
      {
        name: "Github Blog",
        link: "https://github.blog/",
        description: "",
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
        description: "",
      },
      {
        name: "Undraw",
        link: "https://undraw.co/",
        description: "",
      },
      {
        name: "SimpleIcons",
        link: "https://simpleicons.org/",
        description: "",
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
        description: "",
      },
      {
        name: "Color Hunt",
        link: "https://colorhunt.co/",
        description: "",
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
        description: "",
      },
      {
        name: "Git Bash",
        link: "https://git-scm.com/",
        description: "",
      },
      {
        name: "Ubuntu 20.04",
        link: "https://www.microsoft.com/en-ca/p/ubuntu-2004-lts/9n6svws3rx71",
        description: "",
      },
      {
        name: "Kali Linux",
        link: "https://www.microsoft.com/en-ca/p/kali-linux/9pkr34tncv07",
        description: "",
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
        description: "",
      },
      {
        name: "TablePlus",
        link: "https://www.tableplus.io/",
        description: "",
      },
      {
        name: "Filezilla",
        link: "https://filezilla-project.org/",
        description: "",
      },
      {
        name: "Insomnia",
        link: "https://insomnia.rest/",
        description: "",
      },
      {
        name: "Github",
        link: "https://github.com/MrAnyx",
        description: "",
      },
      {
        name: "Mailtrap",
        link: "https://mailtrap.io/",
        description: "",
      },
      {
        name: "Composer",
        link: "https://getcomposer.org/",
        description: "",
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
        description: "",
      },
      {
        name: "Spotify",
        link: "https://www.spotify.com/",
        description: "",
      },
      {
        name: "PowerToys",
        link: "https://github.com/microsoft/PowerToys",
        description: "",
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
        description: "",
      },
      {
        name: "Vue DevTool",
        link: "https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg",
        description: "",
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
        description: "",
      },
      {
        name: "Material Icons Theme",
        link: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
        description: "",
      },
      {
        name: "Material Product Icons",
        link: "https://marketplace.visualstudio.com/items?itemName=PKief.material-product-icons",
        description: "",
      },
      {
        name: "TODO Highlight",
        link: "https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight",
        description: "",
      },
      {
        name: "Todo Tree",
        link: "https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree",
        description: "",
      },
      {
        name: "ESLint",
        link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
        description: "",
      },
      {
        name: "Prettier",
        link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
        description: "",
      },
      {
        name: "GitLens",
        link: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
        description: "",
      },
      {
        name: "Polacode",
        link: "https://marketplace.visualstudio.com/items?itemName=pnp.polacode",
        description: "",
      },
      {
        name: "Remote WSL",
        link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl",
        description: "",
      },
      {
        name: "Vetur",
        link: "https://marketplace.visualstudio.com/items?itemName=octref.vetur",
        description: "",
      },
      {
        name: "WikiLens",
        link: "https://marketplace.visualstudio.com/items?itemName=lostintangent.wikilens",
        description: "",
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
        description: "",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
        description: "",
      },
      {
        name: "PHP",
        link: "https://www.php.net/",
        description: "",
      },
      {
        name: "Python",
        link: "https://www.python.org/",
        description: "",
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
        description: "",
      },
      {
        name: "UiKit",
        link: "https://getuikit.com/",
        description: "",
      },
      {
        name: "Symfony",
        link: "https://symfony.com/",
        description: "",
      },
      {
        name: "VueJS",
        link: "https://vuejs.org/",
        description: "",
      },
      {
        name: "ViteJS",
        link: "https://vitejs.dev/",
        description: "",
      },
      {
        name: "Electron",
        link: "https://www.electronjs.org/",
        description: "",
      },
    ],
  },
];

export default tools;
