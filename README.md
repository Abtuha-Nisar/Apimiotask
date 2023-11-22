# Visual Interaction Selector

## Overview

This project implements a Visual Interaction Selector tool using React. The tool allows users to enter "selection mode," where they can interact with different elements on a webpage. Clicking on an element marks it for tracking, and simulated events are sent to Google Tag Manager (GTM) for each interaction.

## Approach

- **React Components:** The interactive elements are represented as React components, and state management is handled using React hooks.
- **Event Simulation:** Simulated events are logged to the console for demonstration purposes. In a real-world scenario, these events would be sent to GTM.
- **CSS Styling:** The styling is done using CSS, and interactive elements are visually highlighted during the selection mode.

## Challenges Faced

- **State Management:** Ensuring accurate and efficient state management, especially when dealing with multiple interactive elements, required careful consideration.
- **Event Simulation:** Simulating events and integrating with GTM in a real-world scenario might present additional challenges.

## How to Run and Test

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
# Navigate to Project Directory:
cd your-repository
# Install Dependencies:

npm install
# Run the Application:

npm start
This will start the development server and open the application in your default web browser.

Enter Selection Mode:

Click the "Enter Selection Mode" button to start selecting interactive elements.
Mark Elements for Tracking:

Click on interactive elements to mark them for tracking.
Exit Selection Mode:

Click the "Exit Selection Mode" button to stop selection mode and send simulated events to GTM.

# Technologies Used
React
CSS

#screenshot
![image](https://github.com/Abtuha-Nisar/Apimiotask/assets/111420352/654cb375-6861-4e3a-8d28-ed7cfe2e8276)
![image](https://github.com/Abtuha-Nisar/Apimiotask/assets/111420352/90172ad0-e202-404b-a245-b770301c15c1)


