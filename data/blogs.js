const blogs = {
  posts: [
    {
      publishedAt: { timestamp: 1632677220 },
      title: "How to install Pony on windows 10 using WSL 2",
      slug: "how-to-install-pony-on-windows-10-using-wsl-2-b9960a1d",
      image:
        "https://needlify.com/uploads/985f52c6-7c4c-4f54-88ca-aaa5977dc621.jpeg",
      views: 61,
      description:
        "Pony is a very young language compared to other pioneers like C/C++ or Python. Its creation started in 2012 with a guy called Sylvan Clebsch but its popularity began to rise in 2017. In general terms, Pony is an object oriented programming language which means that you can create classes, interfaces, traits, ... But the main difference that Pony has, is that it also an Actor/Model oriented programming language. Actors are objects that look like classes except that their behaviours are asynchronous. In other words, if you call the behaviour foo before another behaviour called bar, in some cases, depending on the body of these behaviours, bar can return a result before foo. Well, we\u0027ve talked enough about the technique. In this article, we\u0027ll learn how to install Pony on windows 10 using WSL 2. Well, in order to install Pony on Windows 10 using WSL 2, you will need to have an up and running WSL distro. If it is not the case, I recommend you to check this post : Enable Linux subsystem on ",
      url: "https://needlify.com/post/how-to-install-pony-on-windows-10-using-wsl-2-b9960a1d",
    },
    {
      publishedAt: { timestamp: 1630881769 },
      title: "How to configure ESLint and Prettier with VSCode",
      slug: "how-to-configure-eslint-and-prettier-with-vscode-ad8d0900",
      image:
        "https://needlify.com/uploads/55f6e4d9-3ba4-4f44-9aa1-11f72bdb6ff4.jpeg",
      views: 99,
      description:
        "Coding is, most of the time, not as difficult as you may think. But one thing is harder than coding : strictness. Indeed, having the same coding style within an entire project is really hard. In a production project, you will need to have this strictness. That\u0027s why many javascript developers use ESLint and Prettier and, in this article, I\u0027m going to show you how to configure them properly. In this example, we\u0027ll assume that you are starting a brand new javascript project. But all the explanations I\u0027ll give you will work just as well for an old project. The first thing you\u0027ll need to do in order to use Prettier and ESLint within VSCode in your project is to download two plugins :  \uD83D\uDE04 Obviously Then, you\u0027ll need to install ESLint and Prettier as project dependencies. More precisely dev dependencies. To install it, just type the following command on your terminal. The -D flag means that these two dependencies will be installed as dev dependencies. We are actually installing them as dev",
      url: "https://needlify.com/post/how-to-configure-eslint-and-prettier-with-vscode-ad8d0900",
    },
    {
      publishedAt: { timestamp: 1630864870 },
      title: "TLDR #3 - September 2021",
      slug: "tldr-3-september-2021-9c72088f",
      image:
        "https://needlify.com/uploads/9edd09e2-f0b5-4fa5-b0e5-cbd0356b25c4.jpeg",
      views: 93,
      description:
        "\uD83D\uDCDA TLDR (Too Long; Don\u0027t Read) is a monthly post to help you discover some great and innovative github projects, youtube channels or blog posts. Today\u0027s episode is about : a CSS framework to create beautiful MacOS-like desktop app, a PHP library to create enhanced error page, a javascript neural network library with great features, a javascript tool to create smooth transition between web pages, a lightweight terminal animation tool and a great youtube channel to learn coding.  Photon, or PhotonKit, is an awesome CSS framework to create MacOS design desktop app. Using only CSS classes, you\u0027ll be able to add sidebars, buttons, tables, etc, with a MacOS design. This framework is absolutly perfect with electron. Multiple components are available like : tab system, navbar, lists, buttons, forms, tables, icons, ... I\u0027m sure you will find something that fits your needs.  Whoops, as its name might suggest, is a PHP library that will help you when something goes wrong. In other words, it\u0027s a",
      url: "https://needlify.com/post/tldr-3-september-2021-9c72088f",
    },
    {
      publishedAt: { timestamp: 1627769947 },
      title: "TLDR #2 - August 2021",
      slug: "tldr-2-august-2021-b52309a1",
      image:
        "https://needlify.com/uploads/54522635-f5a6-4fca-ba2a-b996dd1eae75.jpeg",
      views: 171,
      description:
        "\uD83D\uDCDA TLDR (Too Long; Don\u0027t Read) is a monthly post to help you discover some great and innovative github projects, youtube channels or blog posts. Today\u0027s episode is about : a PHP library to dynamically create PHP class and files, a lightweight javascript library to add spice to your website, a jQuery like scraping tool, a new way to add interaction on a website and a little bonus at the end \uD83D\uDE00  This library will help you easily create dynamic PHP files. For instance, you have difficulties to create a PHP cli that creates PHP files, php-generator is made for you. This is not the only way to use it Use cases are almost infinite. With only few lines of code, you can easily create the basic structure of a class that respects code normes with a proper identation. It is currently compatible from the version 5.6 to the version 8.0. Other then that, the documentation is pretty good and it gives you many examples.  You want to add some spice to your website because you think it looks too sta",
      url: "https://needlify.com/post/tldr-2-august-2021-b52309a1",
    },
    {
      publishedAt: { timestamp: 1627418537 },
      title: "How to deploy a project to a remote server using git",
      slug: "how-to-deploy-a-project-to-a-remote-server-using-git-b3d809a7",
      image:
        "https://needlify.com/uploads/e0c992d3-ef1c-4f7c-b24f-033cae4c6f14.jpeg",
      views: 194,
      description:
        "If you are hosting a website on a remote server, you probably already know that it\u0027s really annoying to manually deploy a new feature or a bug fix on your remote server using an FTP client like Filezilla or Win-SCP everytime you make little changes. Because you are good developers, you already use a source code manager like Github or Gitlab, but you don\u0027t know how to make the deployment easier. This post is made for you. In this tutorial, you will learn how to deploy a project to a remote server using git commands. In order to make it possible, you will need to satisfy some prerequisites Because we will use git commandes, you must have git installed on your local machine and the remote server. You will also need an SSH access to your remote server. That\u0027s it, we can now jump into it \uD83D\uDC4D The first part needs to be done on your remote server. The first thing we will need to do is to create a bare repository. This can be done using the following command. The --bare means that the folder ",
      url: "https://needlify.com/post/how-to-deploy-a-project-to-a-remote-server-using-git-b3d809a7",
    },
    {
      publishedAt: { timestamp: 1627163566 },
      title:
        "How to implement the rate limiter component on a symfony 5 project",
      slug: "how-to-implement-the-rate-limiter-component-on-a-symfony-5-project-ac6b0982",
      image:
        "https://needlify.com/uploads/275e2de0-a601-4f7d-b790-72f6c2ebdf17.jpeg",
      views: 384,
      description:
        "A rate limiter is basically a piece of code that will limit the number of request for a period of time. This is particularly usefull to restrict the access of an api for example. Symfony recently added this component on the version 5.2. I recently wanted to implement the Rate Limiter component on a symfony project but I faced some issues during the development process. In this tutorial, I will show you how to implement the rate limiter component on a symfony project. To enable and use the rate limiter component, you have to use symfony with a minimum version of 5.2. A specific version of php is also needed. You need to use a version greater or equal to 7.2.5. In order to use it, you will need to, first, install the package. This is the only package you\u0027ll need to use this component. This command will automatically install the package but also every other packages that are need such as symfony/lock or symfony/options-resolver. As mentioned in the official documentation, you will first n",
      url: "https://needlify.com/post/how-to-implement-the-rate-limiter-component-on-a-symfony-5-project-ac6b0982",
    },
    {
      publishedAt: { timestamp: 1626457606 },
      title: "How to switch the php version on ubuntu",
      slug: "how-to-switch-the-php-version-on-ubuntu-ab74097f",
      image:
        "https://needlify.com/uploads/cf5528b8-dc60-4f94-8f86-ecbee49e73f9.jpeg",
      views: 163,
      description:
        "As a PHP developer, you will probably face situations where you need to regularly switch between multiple PHP versions. For instance, your current project is running on PHP 8.0 but an old project you have to maintain is running on PHP 7.4. Because it is PHP, the development environment is not as modern as other programming languages such as Javascript. Indeed, javascript, especially NodeJS, has a tool called NVM which stands for Node Version Manager which is a great tool if you have to use multiple NodeJS versions. But PHP doesn\u0027t have such a tool so, in most cases, you\u0027ll need to do it yourselves. In this article, I will show you how to switch you PHP version on a Debian based system. I\u0027ll assume you already have PHP installed on your machine. If it\u0027s not the case, please read this article before : Let\u0027s jump into it \uD83D\uDC4D By doing a php -v, you can see that my current php version is 7.4. This command returns the current PHP version used by the terminal. To retrieve the PHP version use",
      url: "https://needlify.com/post/how-to-switch-the-php-version-on-ubuntu-ab74097f",
    },
    {
      publishedAt: { timestamp: 1625516237 },
      title: "TLDR #1 - July 2021",
      slug: "tldr-july-2021-af890950",
      image:
        "https://needlify.com/uploads/df368e20-0614-4f72-b52b-0c67be2aaf2b.jpeg",
      views: 195,
      description:
        "\uD83D\uDCDA TLDR (Too Long; Don\u0027t Read) is a monthly post to help you discover some great and innovative github projects, youtube channels or blog posts. On the program: A youtube channel of popularization dealing with various subjects around cybersecurity and computer networks, an MVC framework written in Typescript or a tool allowing to transfer files from a computer to another via a terminal.  You are currently familiar with backend frameworks like Laravel or Symfony and you want to learn NodeJs, you will find yourself in Adonis. In some ways, it is similar to Laravel except that it is written in Typescript and must be used using Typescript. But the MVC stucture and the components are similar. It has a built-in CLI called ace to easily create controllers and migrations. In my opinion, Adonis has the greatest documentation. It covers every aspects of the framework with good examples. If you already know NodeJs, go for it. If you want to discover NodeJs as a backend language, you will enjoy ",
      url: "https://needlify.com/post/tldr-july-2021-af890950",
    },
    {
      publishedAt: { timestamp: 1623617028 },
      title: "How to install and configure PHP on windows 10",
      slug: "how-to-install-and-configure-php-on-windows-10-a7af093a",
      image:
        "https://needlify.com/uploads/bc547079-54c3-4f35-85cc-5408ca69a83d.jpeg",
      views: 193,
      description:
        "Here is a quick example of how to securely install PHP and configure it. In this quick article, you will learn how to install php, configure it and run your first php script. The first thing you\u0027ll need to do is, obviously, install php. But which version ? The two main versions currently available are the 7.4.x and the 8.0.x. They are both equal except that the version 8 has new features. \uD83D\uDCA1 You can see all these new features on the php 8 release page. The installation process is exactly the same. First, go to the php download page for windows and select the release version you want : 7.4.x or 8.0.x. Then, you will have to choose the php version. Indeed, there are multiple version of the same release version : x86, x64, TS, NTS, ... Let me explain these terms. x86 and x64 correspond to the build version. 32-bits processors will only support a x86 build version and 64-bits processors can support both. In most cases, you should download the x64 build version. \uD83D\uDCA1 To check the architec",
      url: "https://needlify.com/post/how-to-install-and-configure-php-on-windows-10-a7af093a",
    },
    {
      publishedAt: { timestamp: 1622385215 },
      title: "How to install and configure SSH with public and private keys",
      slug: "how-to-install-and-configure-ssh-with-public-and-private-keys-ab020931",
      image:
        "https://needlify.com/uploads/36a41959-474a-4f39-bc08-8030835cc4cf.jpeg",
      views: 265,
      description:
        "In this article, we will assume that you already have a debian based machine such as Debian or Ubuntu. First, let\u0027s start by updating the current packages. Then, we will be able to download the necessary package. Installing the SSH service is extremely simple on Linux. Only one command line is required. Just install the openssh-server module. That\u0027s it. In order to check that the service is installed and working, let\u0027s have a look at the service status. Alternatively, if the systemctl module is not available, you can always use the service ssh status command. You should get something like this.  If the service is not started, you can do it with this command sudo systemctl start ssh or sudo service ssh start. If you want the service to start automatically when the machine is started, you must type the following command : sudo systemctl enable ssh. Now that the ssh service is installed, you will be able to access this machine using the following command : username is the name of the user",
      url: "https://needlify.com/post/how-to-install-and-configure-ssh-with-public-and-private-keys-ab020931",
    },
  ],
  total: 10,
};

export default blogs;
