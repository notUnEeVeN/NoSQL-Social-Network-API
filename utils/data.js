const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughtTexts = [
  "Thinking about how amazing the world is.",
  "How does technology change so rapidly?",
  "Why do we dream?",
  "What's the next big thing in tech?",
  "Reflecting on the meaning of life.",
  "Is there life elsewhere in the universe?",
  "Pondering the mysteries of the cosmos.",
  "Is time travel possible?",
  "How will AI change our future?",
  "The beauty of nature is unparalleled.",
  "Is there a parallel universe?",
  "The wonders of quantum mechanics.",
  "The importance of mental health.",
  "The joy of coding.",
  "Contemplating the vastness of the universe.",
  "The future of virtual reality.",
  "The power of positive thinking.",
  "The role of education in shaping our future."
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () =>
`${getRandomArrItem(names)}`;

// Generates a random email based on the name
const getRandomEmail = (name) =>
`${name.toLowerCase()}@example.com`;

// Function to generate random thoughts that we can add to user object.
const getRandomThoughts = (int) => {
const results = [];
for (let i = 0; i < int; i++) {
  results.push(getRandomArrItem(thoughtTexts));
}
return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomEmail, getRandomThoughts };