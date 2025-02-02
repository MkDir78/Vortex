// THIS IS VORTEX IDLER ITS OPEN SOURCE

const readline = require('readline');
const fs = require('fs');
const steamUser = require('steam-user');
const steamTotp = require('steam-totp');

// Accounts configuration
const accounts = [
    { username: "YourUsernameHere", password: "YourPasswordHere", shared_secret: "YourSharedSecretHere" },
    { username: "YourUsernameHere2", password: "YourPasswordHere2", shared_secret: "YourSharedSecretHere2" },
    { username: "YourUsernameHere3", password: "YourPasswordHere3", shared_secret: "YourSharedSecretHere3" },
// Add more accounts here
];

// Games to idle
let games = [
    730,     // Counter-Strike 2 (CS2)
    440,     // Team Fortress 2
    570,     // Dota 2
// add more games here
];


// THIS IS VORTEX IDLER ITS OPEN SOURCE


// Your Steam Status
// 0 - Offline
// 1 - Online
// 2 - Busy
// 3 - Away
// 4 - Snooze
// 5 - Looking to Trade
// 6 - Looking to Play
// 7 - Invisible
const status = 1; 

// Function to display the menu
function displayMenu() {
    console.clear();
    const menu = `

====== Vortex Basic Steam Idler ======

       1. Start to Idle

       2. Add GameID to Boost

       3. Save Current Config

       4. Exit

======================================
`;
    console.log(menu);
}

// THIS IS VORTEX IDLER ITS OPEN SOURCE

// Function to handle user input
function handleMenuOption(option) {
    switch (option) {
        case '1':
            startIdling();
            break;
        case '2':
            addGameID();
            break;
        case '3':
            saveConfig();
            break;
        case '4':
            console.log("Exiting...");
            process.exit();
            break;
        default:
            console.log("Invalid option. Please try again.");
            promptMenu();
            break;
    }
}

// Function to start idling accounts (sequentially)
function startIdling() {
    console.log("Starting idling for accounts...");
    idleNextAccount(0); // Start idling from the first account
}

// THIS IS VORTEX IDLER ITS OPEN SOURCE

// Function to idle accounts sequentially
function idleNextAccount(index) {
    if (index >= accounts.length) {
        console.log("All accounts have been processed.");
        return;
    }

    const account = accounts[index];
    console.log(`Logging in as ${account.username}...`);

    const user = new steamUser();
    const twoFactorCode = account.shared_secret
        ? steamTotp.generateAuthCode(account.shared_secret)
        : null;

    user.logOn({
        accountName: account.username,
        password: account.password,
        twoFactorCode: twoFactorCode || undefined,
    });

    // Handle Steam Guard code request
    user.on('steamGuard', (domain, callback) => {
        console.log(`Steam Guard Code required for ${account.username}. Enter the code below:`);
        rl.question(`Steam Guard Code for ${account.username}: `, (code) => {
            callback(code);
        });
    });

// THIS IS VORTEX IDLER ITS OPEN SOURCE

    // Handle successful login
    user.on('loggedOn', () => {
        console.log(`${account.username} - successful`);
        user.setPersona(status);
        user.gamesPlayed(games);

        // Move to the next account after logging in
        idleNextAccount(index + 1);
    });

    // Handle errors
    user.on('error', (err) => {
        console.error(`Error with ${account.username}:`, err.message);

        // Move to the next account even if there's an error
        idleNextAccount(index + 1);
    });
}

// Function to add a GameID
function addGameID() {
    rl.question("Enter the AppID of the game to add: ", (appID) => {
        if (!isNaN(appID)) {
            games.push(Number(appID));
            console.log(`GameID ${appID} added to the list.`);
        } else {
            console.log("Invalid GameID. Please enter a number.");
        }
        promptMenu();
    });
}

// THIS IS VORTEX IDLER ITS OPEN SOURCE

// Function to save current configuration
function saveConfig() {
    console.log("Saving current configuration...");
    const folderPath = './Accounts Configs';

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    accounts.forEach(account => {
        const config = {
            username: account.username,
            games,
            status
        };
        const filePath = `${folderPath}/${account.username}_config.json`;
        fs.writeFileSync(filePath, JSON.stringify(config, null, 4));
        console.log(`Configuration saved for ${account.username} in ${filePath}`);
    });
    console.log("All configurations have been saved in the 'Accounts Configs' folder.");
    promptMenu();
}

// Function to prompt the menu
function promptMenu() {
    displayMenu();
    rl.question("Choose an option: ", (option) => {
        handleMenuOption(option);
    });
}

// Start the program
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

promptMenu();

// THIS IS VORTEX IDLER ITS OPEN SOURCE
