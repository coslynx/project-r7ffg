const customSettings = {
  moderationActions: {
    warningMessage: "Please adhere to the server rules.",
    muteDuration: "1h",
    banReason: "Repeated violations of server rules."
  },
  loggingSettings: {
    logChannel: "mod-logs",
    logFormat: "[$userTag]: $message"
  },
  reportingSystemSettings: {
    reportChannel: "report-channel",
    reportThreshold: 3
  },
  scheduledTasksSettings: {
    taskInterval: "24h",
    taskTime: "00:00"
  },
  roleManagementSettings: {
    defaultRole: "member",
    moderatorRole: "moderator",
    adminRole: "admin"
  },
  autoResponseSettings: {
    greetingMessage: "Welcome to the server!",
    commandPrefix: "!"
  },
  blacklistSettings: {
    bannedWords: ["badword1", "badword2", "badword3"],
    bannedUsers: ["user1", "user2", "user3"]
  },
  aiModerationSettings: {
    aiEnabled: true,
    aiThreshold: 0.8
  }
};

module.exports = customSettings;