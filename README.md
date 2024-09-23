Family Chore Chart Web App: 
An interactive, mobile-friendly chore chart web application designed to help distribute household chores among your children. This app aims to instill cleanliness and responsibility in your children while reducing the cleaning workload on you and your wife.

Demo
Live Demo
(Replace yourusername and your-repository-name with your actual GitHub username and repository name.)

Table of Contents
Features
Getting Started
Prerequisites
Running Locally
Hosting on GitHub Pages
Usage
Selecting a Child
Completing Chores
Redeeming Rewards
Customization
Updating Chores and Rewards
Changing Styles
Data Persistence
Contributing
License
Acknowledgments
Features
User Profiles: Separate profiles for each child with age-appropriate chores and rewards.
Chore Assignment: Modern daily and weekly chores to encourage responsibility.
Interactive Interface: Kids can mark chores as completed and earn points.
Rewards System: Non-monetary rewards to motivate participation.
Mobile-Friendly Design: Accessible and user-friendly on smartphones and tablets.
Standalone Operation: Can be run locally or hosted for free on platforms like GitHub Pages.
Getting Started
Prerequisites
A web browser (Chrome, Firefox, Safari, etc.)
Optional: Git for cloning the repository.
Running Locally
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/your-repository-name.git
(Replace yourusername and your-repository-name with your actual GitHub username and repository name.)

Navigate to the Project Directory

bash
Copy code
cd your-repository-name
Open the App

Open the index.html file in your web browser.
Hosting on GitHub Pages
Enable GitHub Pages

Go to your repository settings on GitHub.
Scroll down to the GitHub Pages section.
Under Source, select main branch and /root folder.
Click Save.
GitHub will provide a URL where your app is hosted.
Access the App

Visit the provided URL (e.g., https://yourusername.github.io/your-repository-name/).
Access from Mobile Devices

Open the URL on your smartphone's browser.
Add the page to your home screen for easy access.
Usage
Selecting a Child
Use the Select Child dropdown menu to choose between Skylar, Adyson, or Lucas.
The app will display chores and rewards specific to the selected child.
Completing Chores
Chores List: Displays all assigned chores with their point values.
Mark as Done: Click the Mark as Done button to complete a chore.
Completed chores are crossed out.
Points are added to the child's total.
Redeeming Rewards
Rewards List: Shows available rewards with their point costs.
Redeem: Click the Redeem button to exchange points for a reward.
Points are deducted from the total.
A confirmation message appears.
Customization
Updating Chores and Rewards
Edit script.js

Locate the kids object.
Modify the chores and rewards arrays for each child as needed.
Example:

javascript
Copy code
skylar: {
    name: "Skylar",
    age: 11,
    chores: [
        { task: "Wash Dishes", points: 2, completed: false },
        // Add or modify chores here
    ],
    rewards: [
        { reward: "Extra Screen Time", cost: 5 },
        // Add or modify rewards here
    ],
    totalPoints: 0
},
Save Changes

After editing, save the file and refresh the web page to see updates.
Changing Styles
Edit styles.css

Customize colors, fonts, and layouts to personalize the app.

For example, to change the background color:

css
Copy code
body {
    background-color: #ffffff; /* Replace with desired color */
}
Data Persistence
By default, the app does not save data between sessions. To enable data persistence:

Use Browser Local Storage

Modify script.js

Add the following functions to save and load data:

javascript
Copy code
// Save data to localStorage
function saveData() {
    localStorage.setItem('kidsData', JSON.stringify(kids));
}

// Load data from localStorage
function loadData() {
    const data = localStorage.getItem('kidsData');
    if (data) {
        Object.assign(kids, JSON.parse(data));
    }
}

// Call saveData() after any changes
// For example, after marking a chore as completed or redeeming a reward

// Load data on initialization
loadData();
Note

Data will be saved per device.
To sync data across devices, a backend service is required.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

License
This project is open-source and available under the MIT License.

Acknowledgments
Family Inspiration: Thanks to your children for inspiring this project.
Open Source Community: For resources and tools that made this project possible.
