// Data for kids, chores, and rewards
const kids = {
    skylar: {
        name: "Skylar",
        age: 11,
        chores: [
            { task: "Wash Dishes", points: 2, completed: false },
            { task: "Vacuum Living Room", points: 2, completed: false },
            { task: "Take Out Trash", points: 1, completed: false },
            { task: "Fold Laundry", points: 2, completed: false },
            { task: "Clean Bathroom", points: 3, completed: false },
            { task: "Help Siblings with Homework", points: 2, completed: false }
        ],
        rewards: [
            { reward: "Choose Family Movie", cost: 5 },
            { reward: "Extra Hour of Screen Time", cost: 5 },
            { reward: "Sleepover with Friends", cost: 15 },
            { reward: "No Chore Pass", cost: 7 },
            { reward: "Favorite Dinner", cost: 5 }
        ],
        totalPoints: 0
    },
    adyson: {
        name: "Adyson",
        age: 5,
        chores: [
            { task: "Pick Up Toys", points: 1, completed: false },
            { task: "Feed the Pet", points: 1, completed: false },
            { task: "Set the Table", points: 1, completed: false },
            { task: "Water Plants", points: 1, completed: false }
        ],
        rewards: [
            { reward: "Trip to the Park", cost: 5 },
            { reward: "Extra Story at Bedtime", cost: 3 },
            { reward: "Choose a Dessert", cost: 4 }
        ],
        totalPoints: 0
    },
    lucas: {
        name: "Lucas",
        age: 3,
        chores: [
            { task: "Put Toys Away", points: 1, completed: false },
            { task: "Help with Laundry (Matching Socks)", points: 1, completed: false },
            { task: "Place Dirty Clothes in Hamper", points: 1, completed: false }
        ],
        rewards: [
            { reward: "Playtime with Parent", cost: 3 },
            { reward: "Favorite Snack", cost: 2 },
            { reward: "Extra Playtime Before Bed", cost: 2 }
        ],
        totalPoints: 0
    }
};

// Initialize App
const userSelect = document.getElementById('user-select');
const userName = document.getElementById('user-name');
const choresList = document.getElementById('chores');
const rewardsList = document.getElementById('rewards');
const totalPointsDisplay = document.getElementById('total-points');

function loadUserData(userKey) {
    const user = kids[userKey];

    // Update User Name
    userName.textContent = user.name;

    // Clear Existing Chores and Rewards
    choresList.innerHTML = '';
    rewardsList.innerHTML = '';

    // Display Chores
    user.chores.forEach((chore, index) => {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = `${chore.task} (${chore.points} pts)`;
        if (chore.completed) {
            taskSpan.classList.add('completed');
        }

        const completeBtn = document.createElement('button');
        completeBtn.textContent = chore.completed ? 'Completed' : 'Mark as Done';
        completeBtn.classList.add('complete-btn');
        if (chore.completed) {
            completeBtn.classList.add('disabled');
            completeBtn.disabled = true;
        }
        completeBtn.addEventListener('click', () => {
            chore.completed = true;
            user.totalPoints += chore.points;
            loadUserData(userKey);
        });

        li.appendChild(taskSpan);
        li.appendChild(completeBtn);
        choresList.appendChild(li);
    });

    // Display Total Points
    totalPointsDisplay.textContent = user.totalPoints;

    // Display Rewards
    user.rewards.forEach((reward, index) => {
        const li = document.createElement('li');
        const rewardSpan = document.createElement('span');
        rewardSpan.textContent = `${reward.reward} (${reward.cost} pts)`;

        const redeemBtn = document.createElement('button');
        redeemBtn.textContent = 'Redeem';
        redeemBtn.classList.add('redeem-btn');
        if (user.totalPoints < reward.cost) {
            redeemBtn.classList.add('disabled');
            redeemBtn.disabled = true;
        }
        redeemBtn.addEventListener('click', () => {
            user.totalPoints -= reward.cost;
            alert(`${user.name} redeemed: ${reward.reward}`);
            loadUserData(userKey);
        });

        li.appendChild(rewardSpan);
        li.appendChild(redeemBtn);
        rewardsList.appendChild(li);
    });
}

// Event Listener for User Selection
userSelect.addEventListener('change', () => {
    const selectedUser = userSelect.value;
    loadUserData(selectedUser);
});

// Initial Load
loadUserData('skylar');
