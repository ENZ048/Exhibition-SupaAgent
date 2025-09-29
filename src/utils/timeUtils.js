// Function to get time-based greeting messages with different tones
export function getTimeBasedGreeting() {
  const now = new Date();
  const hour = now.getHours();

  // Array of greeting messages for each time period
  const morningGreetings = [
    "☀️ Good morning! Ready to kickstart your business today?",
    "Morning! A fresh day = fresh ideas. What can I solve for you?",
    "Rise & shine—let's make your business smarter today."
  ];

  const afternoonGreetings = [
    "Hey 👋 Hope your day's going well! Need a quick business boost?",
    "Welcome! Perfect time for a smart solution—shall we start?"
  ];

  const eveningGreetings = [
    "Evenings are for smart moves ✨ What's on your mind?",
    "Hey! Don't worry if it's late—business doesn't sleep, and neither do I.",
    "Good evening! Ready to make your next big business move?"
  ];

  const lateNightGreetings = [
    "🌙 Burning the midnight oil? I'm here to help.",
    "You're up late, and so am I. Let's get things done.",
    "Insomniac or hustler? Either way—I've got your back."
  ];

  let selectedGreeting;

  if (hour >= 6 && hour < 12) {
    // Morning (6 AM – 11 AM) → Fresh & Energetic
    const randomIndex = Math.floor(Math.random() * morningGreetings.length);
    selectedGreeting = morningGreetings[randomIndex];
  } else if (hour >= 12 && hour < 18) {
    // Afternoon (12 PM – 5 PM) → Friendly & Helpful
    const randomIndex = Math.floor(Math.random() * afternoonGreetings.length);
    selectedGreeting = afternoonGreetings[randomIndex];
  } else if (hour >= 18 && hour < 24) {
    // Evening/Night (6 PM – 11 PM) → Relaxed & Supportive
    const randomIndex = Math.floor(Math.random() * eveningGreetings.length);
    selectedGreeting = eveningGreetings[randomIndex];
  } else {
    // Late Night (12 AM – 5 AM) → Quirky & Reassuring
    const randomIndex = Math.floor(Math.random() * lateNightGreetings.length);
    selectedGreeting = lateNightGreetings[randomIndex];
  }

  return selectedGreeting;
}
