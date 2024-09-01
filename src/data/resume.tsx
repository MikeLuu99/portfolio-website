import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mike Luu",
  initials: "ML",
  url: "https://mike.yboard.ai",
  location: "Orange County, California",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Computer Science Student building tools for visualize thinking",
  summary:
    `Since buildspace s5, I have been working on a visual note-taking app [Yboard](https://www.yboard.ai) to improve our thinking and working flow for researchers, 
students, and writers using AI-generated graphs. I also make cinematic music and watch movies in my spare time, loving Ghibli at the moment.
If these stuffs sounds fun to you, feel free to reach out.
`,
  avatarUrl: "/avatarIcon.png",
  skills: [
    "python",
    "c",
    "pytorch",
    "langchain",
    "mysql",
    "cloudflare",
    "typescript",
    "javascript",
    "java",
    "react",
    "nodedotjs",
    "nextdotjs",
    "postgresql",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://www.yboard.ai/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "trungducmic@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MikeLuu99",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mike-duc-luu-117147253/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mikmikkk6",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ducluu9412",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Yboard",
      href: "https://yboard.ai",
      badges: [],
      location: "Fullerton, CA",
      title: "Co-Founder",
      logoUrl: "/YboardLogo.png",
      start: "2024",
      end: "Present",
      description:
        "Led the launch of an innovative AI visual note-taking app, managing the development of advanced search capabilities including BM25 and Vector Search. Managed the implementation of hybrid retrieval methods, resulting in a 10x improvement in response time and 15% increase in accuracy. Conducted extensive market research, engaging with 100 potential customers to validate product-market fit. Currently overseeing the development of a high-performance sync engine utilizing Postgres and Sqlite to optimize data access and updates for seamless user experience.",
    },
    {
      company: "Chapman University",
      badges: [],
      href: "https://www.chapman.edu/",
      location: "Orange, CA",
      title: "Student Researcher",
      logoUrl: "/chapmanLogo.png",
      start: "2023",
      end: "Present",
      description:
        `Currently working in a student researchers team on analyzing Canadian wildfire satellite images
using convolutional neural network and binary classification methods for research paper on predicting the risk
of wildfires in specific Canadian regions.
Developed website for Chapman University's Earth System and Data Solution Labs using ReactJs.
Implementing SQLite database for storing lab member's personal information, contributing to more
engagement to the labs to 10 people a day.`,
    },
    {
      company: "Military Technical Academy (MTA)",
      badges: [],
      href: "",
      location: "Hanoi, Vietnam",
      title: "AI Researcher",
      logoUrl: "/MTALogo.png",
      start: "2022",
      end: "2023",
      description:
        `Conducted research and implemented a voice recognition model for a military humanoid, utilizing the Bag of
Words model as a foundational approach.`,
    }
  ],
  education: [
    {
      school: "Chapman University",
      href: "https://www.chapman.edu/",
      degree: "Computer Science, BS",
      logoUrl: "/chapmanLogo.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5 grad",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    }
  ],
  projects: [
    {
      title: "Yboard",
      href: "https://www.yboard.ai",
      dates: "",
      active: true,
      description:
        `A simple canvas/note-taking tool for branching and remixing AI-generated outputs. 
        Instead of a linear thread, conversations on Yboard are modular and can be taken apart, 
        branched, and combined in different ways. `,
      technologies: [
        "Typescript",
        "Next.js",
        "Cloudflare",
        "Sqlite"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.yboard.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/yboardScreenshot.png",
      // video:
      //   "https://ragdotpage.pages.dev/api/files/visualizationDemo1.gif",
    },
    {
      title: "JustWrite",
      href: "https://justwrite.yboard.ai",
      dates: "",
      active: true,
      description:
        `A text editor that allows writers to "locked in", forcing them to write continuously for a set time 
        without switching tabs or risk losing their work. Aims to eliminate distractions and boost focused productivity.`,
      technologies: [
        "Typescript",
        "React",
        "Vite",
        "Shadcn/UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://justwrite.yboard.ai",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MikeLuu99/focused-text-editor.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TextEditorScreenshot.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Search Shortcuts Extension",
      href: "https://aistoryboardhf.streamlit.app/",
      dates: "",
      active: true,
      description:
        `Developed an open source Chrome extension using TypeScript and React that implements DuckDuckGo's "Bang!" 
        customizable search shortcuts to navigate to different website quickly. 
        Adding the !w to the search query can redirect the query to Wikipedia instead of Google`,
      technologies: [
        "Typescript",
        "React",
        "Chrome"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://aistoryboardhf.streamlit.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/MikeLuu99/CustomBangSearch.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ExtensionScreenshot.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "AI Storyboard",
      href: "https://aistoryboardhf.streamlit.app/",
      dates: "",
      active: true,
      description:
        `AI-generated images of scenes in a storyboard using Llama2 and a Stable Diffusion model 
        integrated with a PDF parser to extract crucial scene descriptions and scene indexes`,
      technologies: [
        "Streamlit",
        "Python",
        "Langchain",
        "Chroma",
        "FAISS",
        "llama.cpp"
      ],
      links: [
        {
          type: "Website",
          href: "https://aistoryboardhf.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MikeLuu99/AI-Storyboard-Stable-Diffusion-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/StoryboardScreenshot.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Music Lyrics Autocomplete",
      href: "https://lyrics-autocomplete.streamlit.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        `Developed a transformers model to complete a text based on the artist's lyrics datasets scraped from Kaggle
datasets. Have 6 monthly users on Streamlit community.
Trained artist lyrics model includes The Beatles, Taylor Swift, and John Mayer.`,
      technologies: [
        "Streamlit",
        "Hugging Face",
        "Pytorch",
        "Kaggle",
      ],
      links: [
        {
          type: "Website",
          href: "https://lyrics-autocomplete.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MikeLuu99/Lyrics-Autocomplete",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/LyricsScreenshot.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Podcast/Audio summarizations extraction",
      href: "https://github.com/MikeLuu99/Podcast-RAG-OpenAI",
      dates: "",
      active: true,
      description:
        "Extracting essential video information and cutting crucial video segments using ChatGPT API, Langchain output parser features, and FFmpeg.",
      technologies: [
        "OpenAI",
        "Python",
        "Langchain",
        "FFmpeg",
        "ChatGPT API",
        "Pydantic",
        "Hugging Face",
        "Chroma"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MikeLuu99/Podcast-RAG-OpenAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/github-logo.webp",
    },
    {
      title: "Reddit Memes Search Engine",
      href: "https://automatic.chat",
      dates: "",
      active: true,
      description:
        "A meme search engine that generated a meme based on the Kaggle Reddit meme dataset using the CLIP model and semantic search.",
      technologies: [
        "Streamlit",
        "Python",
        "CLIP",
        "Hugging Face",
        "Reddit Kaggle Dataset",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MikeLuu99/Meme-Search-Engine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/github-logo.webp",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
