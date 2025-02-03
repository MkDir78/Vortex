Join my discord server: https://dsc.gg/vortex-service
Support me (SEND LTC ONLY):ltc1qg0aecsfuee2uz4jx8f65grxuy97k9y204fgm5a



How to Use:

1. Update the Account List:
   In the script, find the accounts array. Add your Steam account usernames and passwords here. You can add up to 1000 accounts in the array.

   Example:
   const accounts = [
        { username: "YourUsername", password: "YourPassword", shared_secret: "YourSharedSecret" },
        { username: "YourUsername2", password: "YourPassword2", shared_secret: "YourSharedSecret2" },
       // Add more accounts as needed
   ];

3. Choose Games to Farm:
   Edit the games array to include the AppIDs of the games you want to farm. For example, for CS:2 (730), TF2 (440), and Dota 2 (570), the array looks like this:

   Example:
   let games = [730, 440, 570];  // CS:2, TF2, Dota 2

   You can find the AppID of any game by searching for it on SteamDB: https://steamdb.info/

5. Install Node & Modules:
   First install NodeJS: https://nodejs.org/dist/v22.13.1/node-v22.13.1-x64.msi

   Then when done open installer.bat and wait till it closes

5. Run the Script:

   Open Start.bat

Output:
After running the script, you should see login output in your terminal


Notes:
- Security Warning: Be careful with storing your Steam passwords in plain text, especially if you plan to share the configuration files. (Woking On)
- Account Limits: Steam may have limitations on how many accounts can be linked to a single IP address or how many requests are allowed. (Working on Bypass!)
- Games: Make sure the AppIDs you provide correspond to games you own, as the script will attempt to use those games for farming.

License:
This project is open source, and you can freely use, modify.

Rights:
NEVER SELL THIS PROJECT!

