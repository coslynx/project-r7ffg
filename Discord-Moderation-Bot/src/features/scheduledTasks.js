const scheduledTasks = {
  checkServerActivity: () => {
    // Logic to check server activity
  },
  runScheduledTasks: () => {
    scheduledTasks.checkServerActivity();
    // Add more scheduled tasks here
  },
};

module.exports = scheduledTasks;