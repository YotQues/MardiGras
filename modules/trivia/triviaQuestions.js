// import TriviaClass from './triviaClass.js';

export class TriviaClass {
  constructor(_quest, _ansA, _ansB, _ansC, _ansD, _correct) {
    this.question = _quest;
    this.answers = {
      a: _ansA,
      b: _ansB,
      c: _ansC,
      d: _ansD
    };
    this.correctAnswer = _correct
  }
}

export const triviaQuestions = [
  new TriviaClass("When was the first Mardi Gras ?",
    "Feb. 24, 1857",
    "Nov. 3, 1957",
    "Mar. 15, 1875",
    "Feb. 26, 1668",
    "A"),

  new TriviaClass("What the Mardi Gras colors stand for?",
    "Purple for wine, green - nature, and gold for wealth",
    "Purple for HackerU, green - Haifa, and gold for shiny things",
    " Purple for justice, green - faith, and gold for power",
    "Purple for fairness, green - envy, and yellow for intimidation",
    "C"),

  new TriviaClass("What is Twelfth Night?",
    "It's the official ending of Mardi Gras",
    "It's on January 6th and is the official start of Mardi Gras",
    "It's always between February 18th and March 8th",
    "It's the birthday of St. Mardi Gras of course!",
    "B"),

  new TriviaClass('Since when have "throws" been around?',
    "Since the 1970s",
    "Since the 1760s",
    "Since the 1930s",
    "Since the 1870s",
    "D"),

  new TriviaClass("Who first broadcast Mardi Gras LIVE on the Internet?",
    "MardiGrasNewOrleans.com",
    "NBC News",
    "i24news.com",
    "NatGeo Travel",
    "A"),

  new TriviaClass("How much does it cost to go to Mardi Gras?",
    "60 Mardi Gras beads",
    "5 USD for an adult",
    "50 USD for an adult",
    "It's free!",
    "D"),

  new TriviaClass("When is Mardi Gras?",
    "Could be any Sunday between March 23 and April 25",
    "Could be any Tuesday between March 14 and April 16",
    "Always 47 days before Easter",
    "Answers A and C are both correct",
    "D"),

  new TriviaClass("What is Fat Tuesday?",
    "The day when food is free all over New Orleans",
    "It symbolizes the hunger in which the first colonists of the city were in",
    "It's the English meaning for 'Mardi Gras'",
    "A fasting day to help the people of the city stay healthy",
    "C"),

  new TriviaClass("What is Lundi Gras?",
    "The event where the king is chosen",
    "The closing event of the holiday",
    "A series of Shrove Monday events at Woldenberg Park",
    "St. Mardi Gras' day of baptism of course!",
    "C"),

  new TriviaClass("When was New Orleans established?",
    "1718",
    "1892",
    "1755",
    "1649",
    "A"),
]