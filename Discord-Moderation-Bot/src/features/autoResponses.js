const autoResponses = {
  commonQuestions: {
    "what is the server rule": "Please refer to the #rules channel for the server rules.",
    "how do I report a user": "You can report a user by using the !report command in the #reporting channel.",
    "who are the moderators": "The moderators are listed in the #moderators channel.",
    "how do I get a special role": "Special roles are given based on your activity and behavior in the server.",
  },
  commandResponses: {
    "!help": "I am here to assist you with any questions or issues you may have. Feel free to ask!",
    "!website": "You can visit our website at www.example.com for more information.",
    "!socials": "Follow us on social media for the latest updates and announcements.",
  },
  customResponses: {
    "Good morning!": "Good morning! Have a great day ahead.",
    "Good night!": "Good night! Sweet dreams.",
    "Thank you!": "You're welcome!",
  },
  handleAutoResponse: (message) => {
    if (autoResponses.commonQuestions[message]) {
      return autoResponses.commonQuestions[message];
    } else if (autoResponses.commandResponses[message]) {
      return autoResponses.commandResponses[message];
    } else if (autoResponses.customResponses[message]) {
      return autoResponses.customResponses[message];
    } else {
      return "I'm sorry, I don't have a pre-defined response for that.";
    }
  },
};

module.exports = autoResponses;