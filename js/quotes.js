const quotes = [
  {
    quote:
      "Christmas is for everyone, adults and children alike.\nAllow this season fill your heart, and let go of the things you dislike.",
    author: "Julie Hebert",
  },
  {
    quote:
      "Never worry about the size of your Christmas tree.\nIn the eyes of children, they are all 30 feet tall.",
    author: "Larry Wilde",
  },
  {
    quote:
      "When we remember a special Christmas, it is not the presents that made it special,\nbut the laughter, the feeling of love,\nand the togetherness of friends and family that made that Christmas special.",
    author: "Catherine Pulsifer",
  },
  {
    quote:
      "Christmas is a season for kindling the fire for hospitality in the hall,\nthe genial flame of charity in the heart.",
    author: "Washington Irving",
  },
  {
    quote:
      "One of the most glorious messes in the world is the mess created\nin the living room on Christmas day.\nDon’t clean it up too quickly.",
    author: "Andy Rooney",
  },
  {
    quote:
      "Christmas is the season of joy, of holiday greetings exchanged,\nof gift-giving, and of families united.",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "Christmas waves a magic wand over this world,\nand behold, everything is softer and more beautiful.",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "Probably the reason we all go so haywire at Christmas time with the endless unrestrained\nand often silly buying of gifts is that we don’t quite know how to put our love into words.",
    author: "Harlan Miller",
  },
  {
    quote:
      "Christmas is most truly Christmas\nwhen we celebrate it by giving the light of love to those who need it most.",
    author: "Ruth Carter Stapleton",
  },
  {
    quote:
      "The spirit of Christmas is in every shared joy\nand in every act of kindness during this wondrous time of year.",
    author: "Unknown",
  },
  {
    quote:
      "Christmas is for children, but it is for grown-ups too.\nEven if it is a headache, a chore, and nightmare,\nit is a period of necessary defrosting of chill and hide-bound hearts.",
    author: "Lenora Mattingly Weber",
  },
  {
    quote:
      "From home to home, and heart to heart,\nfrom one place to another the warmth and\njoy of Christmas brings us closer to each other.",
    author: "Emily Matthews",
  },
  {
    quote: "Christmas isn't just a day.\nIt's a frame of mind.",
    author: "Valentine Davies",
  },
  {
    quote:
      "If you can’t wrap Christmas presents well,\nat least make it look like they put up a good fight.",
    author: "Author Unknown",
  },
  {
    quote:
      "We don't need more parties, or decorations, or gifts, or worries,\nor expectations to be added to Christmas.\nWhat we really need is some grace.\nFor ourselves and others. And we need to love people.",
    author: "Susanna Foth Aughtmon",
  },
  {
    quote:
      "It's not what's under the christmas tree that matters.\nIt's who's around it.",
    author: "Charles M. Schuiz",
  },
  {
    quote:
      "People are so worried about what they eat between Christmas and the New Year,\nbut they really should be worried about what they eat between the New Year and Christmas.",
    author: "Author Unknown",
  },
  {
    quote:
      "Like snowflakes, my christmas memories gather and dance - each beautiful, unique, and gone too soon.",
    author: "Deborah Whipp",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function makeQuotes() {
  const presentQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = presentQuote.quote;
  author.innerText = presentQuote.author;
}

makeQuotes();
setInterval(makeQuotes, 10000);
