//Notifications & Reminders//
// script.js
// Function to display a notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;

    // Add the notification to the notification container
    const notificationContainer = document.getElementById('notification-container');
    notificationContainer.appendChild(notification);

    // Remove the notification after a certain duration
    setTimeout(() => {
        notification.remove();
    }, 5000); // Remove after 5 seconds
}
// Function to set a reminder
function setReminder(reminder, date) {
    // Convert the date to a JavaScript Date object
    const reminderDate = new Date(date);
    alert(addReminder);

    // Calculate the time remaining until the reminder
    const currentTime = new Date();
    const timeRemaining = reminderDate.getTime() - currentTime.getTime();

    // Schedule a notification for the reminder
    setTimeout(() => {
        showNotification(`Reminder: ${reminder}`);
    }, timeRemaining);
}
