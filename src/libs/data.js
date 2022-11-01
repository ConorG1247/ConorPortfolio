export const data = [
  {
    title: "BSS Tools (Game)",
    tech: "React and TypeScript",
    image: "https://puu.sh/JnQeR/a883911b97.png",
  },
  {
    title: "Improved Twitch",
    tech: "React, TypeScript, MongoDB, Express, Node.js, Twitch API",
    image: "https://puu.sh/JpjeR/d87f3e2666.png",
  },
  {
    title: "Animovies",
    tech: "React, MongoDB, Express, Node.js and Chakra UI",
    image: "https://puu.sh/JdJkt/b1d4623621.png",
  },
  {
    title: "BÖK",
    tech: "Next.js, Postgres, Express, Node.js, Material UI",
    image: "https://puu.sh/JiD0M/8e0949c427.png",
  },
  {
    title: "Learn Japanese",
    tech: "React and Chakra UI",
    image: "https://puu.sh/JdRaC/b2e5611c65.png",
  },
];

export const workData = [
  {
    title: "BSS Tools",
    images: [
      "https://puu.sh/Jpfen/8b891412d0.png",
      "https://puu.sh/Jpfez/432d808595.png",
      "https://puu.sh/JpfeF/4a0440f044.png",
      "https://puu.sh/JpfeK/a3c411731f.png",
      "https://puu.sh/JnQeR/a883911b97.png",
      "https://puu.sh/JnQfh/d7dbc6ad0d.png",
      "https://puu.sh/JnQg9/7f01d966c3.png",
      "https://puu.sh/JnQgm/322fa1f7f9.png",
      "https://puu.sh/JnQgO/7ef17fd2b7.png",
      "https://puu.sh/JnQhe/d4c41fdef2.png",
    ],
    tech: "React and TypeScript",
    description: [
      "After finishing the SoC Bootcamp, I wanted to continue growing my knowledge of tech used as well as ones I'd only been briefly introduced to, this is why I decided to use React and TypeScript for this project. The app was created primarily for mobile however, it's fully responsive and works great for desktop as well.",
      "The idea for the app is a selection of different tools for a game I play which makes it easier to keep track of item progress, plan different items to get in game and calculate materials used per level up. I initially searched for an app similar within the game community but couldn't find anything and decided this would be a great opportunity to create one myself.",
      "Initially, I only planned on having one tool in the app (recipe calculator) but after getting feedback from the community on more features I could add, I created the item planenr as well.",
      "It was a fun project to work on and sharing it within an active community and getting real feedback really helped the design and feature addition process.",
    ],
    links: [
      "https://github.com/ConorG1247/BSSCalc",
      "https://bss-tools.netlify.app/",
    ],
  },
  {
    title: "Improved Twitch",
    images: [
      "https://puu.sh/JpjeR/d87f3e2666.png",
      "https://puu.sh/Jpjgd/ceeb963a48.png",
      "https://puu.sh/JpjgG/c3d237a1b6.png",
      "https://puu.sh/JpjgM/9045cc70a8.png",
    ],
    tech: "React, TypeScript, MongoDB, Express and Node.js",
    description: [
      "This project was something I'd wanted to make for months now but initially I was intimidated about using Twitch's API as it had multiple Client variables that needed to be fetched by the user before recieving data.",
      "To challenge myself to learn new methods for fetches and how I'd go about implementing user auth with Twitch's own API authorization, I started off small by creating just the category page which displays the top 100 games currently streamed on Twitch. After I was happy with this and it was functional, I made a new page for top 100 Live channels which was similar to categories.",
      "After getting the main functionality for both of these pages, I decided to implement new features which I've wanted on the main Twitch site for years. This includes Blocking game categories or live channels and filtering by language maintaining selection on all pages.",
      "I implemented a backend to store users blocklist, including categories and live channel, without the need to log in to my website or Twitch's. This is currently still a work in progress and I will continue to add new features in the future.",
    ],
    links: [
      "https://github.com/ConorG1247/TwitchDashboard",
      "https://improved-twitch.netlify.app/directory/categories",
    ],
  },
  {
    title: "Animovies",
    images: [
      "https://puu.sh/JdKyA/0cb68f05ee.png",
      "https://puu.sh/JdKyP/32f4034903.png",
      "https://puu.sh/JdKza/5c8817e8e7.png",
      "https://puu.sh/JdJkt/b1d4623621.png",
      "https://puu.sh/JdKzs/6e201a4cc0.png",
      "https://puu.sh/JdKzE/a048fd2b56.png",
    ],
    tech: "MongoDB, Express, React, Node.js and Chakra UI",
    description: [
      "After spending two weeks learning React, I wanted to push myself by creating a full-stack app using MongoDB, Express, React and Node.js to help cement what I'd learnt and also expand my knowledge on other tech I hadn't previously used. ",
      "Over a three week period, I created an app which allows a user to view and search anime and movies using several different API's including IMDb, OMDb and Jikan. User's can add a movie or anime they've found to a watchlist which is stored in a Mongo database and remove it later once they've watched it.",
      "I found it challenging at times, but also very exciting to be putting what I'd learnt to use as well as becoming more comfortable with React, CSS, MongoDB and Chakra UI.",
    ],
    links: [
      "https://github.com/ConorG1247/movie-api-app",
      "https://animovies.netlify.app/",
    ],
  },
  {
    title: "BÖK",
    images: [
      "https://puu.sh/JiD0M/8e0949c427.png",
      "https://puu.sh/JiD0O/2dc3b8c607.png",
      "https://puu.sh/JiD1B/2b6fcabacf.png",
      "https://puu.sh/JiD1H/4daf478a9c.png",
      "https://puu.sh/JiD1Q/edfc446fc9.png",
      "https://puu.sh/JiD1X/9153f03f73.png",
    ],
    tech: "Postgres, Express, Next.js, Node.js and Material UI",
    description: [
      "For the final 4 weeks of School of Code, with 5 other random bootcampers, we we're given a brief and set out to create a real world app.",
      "We decided to challenge ourselves by using Next.js as well as Material UI as we didn't have experience using these before and we didn't want to stick only with what we knew.",
      "Similar to my Animovies app, we created a book finder which allows the user to create a personal reading list or keep track and score which books they've read.",
      "We constantly used an agile methodology throughout creating the app by taking  user feedback and changing features or redesigning pages. It was a great chance to get real world experience of working in a tech team for a month and I learnt a lot of skills, not only technically but soft skills needed for working in an effective team.",
    ],
    links: [
      "https://github.com/SchoolOfCode/final-project_front-end-hackson5",
      "https://hackson5bok.vercel.app/",
    ],
  },
  {
    title: "Learn Japanese",
    images: [
      "https://puu.sh/JdRaq/ce1effe0c6.png",
      "https://puu.sh/JdRaC/b2e5611c65.png",
      "https://puu.sh/JdRaF/2ed8a09059.png",
      "https://puu.sh/JdRaZ/f4f38fe81f.png",
      "https://puu.sh/JdRbF/a5ca648b8a.png",
    ],
    tech: "React and Chakra UI",
    description: [
      "After creating my Anime and Movies API app, I wanted to continue growing my knowledge of React so I set out to create a single page app with mobile users in mind.",
      "I settled on the idea of an app which helps with learning a new language, in this case Japanese, in a structured and organised way. The user is given several options to choose from which affect the diffuculty of what they're learning, the game type and the amount of rounds they want to practice for.",
      "This is an ongoing project as I am still new to learning Japanese and I'm developing this as I progress, I've found it helpful with memorizing a lot of the Japanese alphabet as well as some phrases and words.",
      "Creating the logic for the flash cards system was more challenging than I'd expected, but I feel I've improved with React and JavaScript a great amount since starting and hope I will continue to grow the more I develop this app.",
    ],
    links: [
      "https://github.com/ConorG1247/japanese-app",
      "https://learn-japanese-app.netlify.app",
    ],
  },
];
