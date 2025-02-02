WELCOME TO VORTEX IDLER


Scroll Down Instructions


Terms and Service:
1. Introduction
By using the Idler application ("the Software"), you ("the User") agree to comply with the following terms and conditions. If you do not agree with these terms, you must immediately stop using the Software.

2. License
The Software is provided to you under a personal, non-commercial, non-exclusive license to use for lawful purposes. The Software is designed for automating certain actions within the Steam platform and is not affiliated with Steam, Valve Corporation, or any other third-party services.

3. Permitted Use
You are allowed to use the Software to automate Steam card farming and other activities within Steam, as long as they comply with Steam’s Terms of Service.
You may use this Software on personal computers or within your own Steam account but must not use it to exploit, harass, or harm other users in any manner.

4. Prohibited Use
By using this Software, you agree not to:

Use the Software to violate Steam’s Terms of Service or any applicable laws.
Use the Software to exploit, cheat, or gain unauthorized access to any game features, accounts, or content.
Engage in botting, spamming, or any form of malicious activity that may negatively affect the experience of other users on Steam.
Redistribute or reverse-engineer the Software.
Share your Steam account information with any other parties not authorized by you.

5. Privacy and Security
The Software requires access to your Steam credentials (username and password). You are solely responsible for the security and confidentiality of this information. The creator of this Software does not store or retain your credentials.
While every effort has been made to ensure the Software is secure, no system is entirely secure, and the creator is not liable for any unauthorized access or misuse of your Steam account.

6. Disclaimer of Liability
The Software is provided "as is", and the creator makes no warranties regarding the accuracy, performance, or fitness for a particular purpose. The creator is not responsible for:

Any loss or damage to your Steam account, virtual goods, or personal data.
Any action taken by Steam in response to the use of this Software, including account bans or restrictions.
Any third-party claims related to your use of the Software.
By using the Software, you accept all risks associated with its use.

7. Steam Terms of Service
By using the Software, you acknowledge and agree that you are still bound by Steam’s Terms of Service and any violations of Steam’s terms, including but not limited to botting, account manipulation, or unauthorized automation, may result in consequences such as account suspension or permanent bans.

Please review Steam's Terms of Service at https://store.steampowered.com/terms/.

8. Updates and Modifications
The creator reserves the right to update, modify, or discontinue the Software at any time without prior notice. You are responsible for regularly checking for updates, as changes may be required to continue using the Software.

9. Indemnity
You agree to indemnify and hold harmless the creator of this Software, its affiliates, and partners from any claims, losses, or damages resulting from your use of the Software, including any violation of these Terms and Service.

10. Termination
The creator reserves the right to terminate access to the Software for users found to be in violation of these terms. Such termination is at the sole discretion of the creator and may result in the loss of access to any services provided by the Software.

11. Governing Law
These Terms and Service are governed by the laws of England and Wales, and any disputes will be resolved in accordance with the applicable laws of that jurisdiction.

12. Contact Information
If you have any questions about these Terms and Service, please contact me on discord _mkdir_.






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
- Security Warning: Be careful with storing your Steam passwords in plain text, especially if you plan to share the configuration files. (Ignore this is for the new web based idler that am working on)
- Account Limits: Steam may have limitations on how many accounts can be linked to a single IP address or how many requests are allowed.
- Games: Make sure the AppIDs you provide correspond to games you own, as the script will attempt to use those games for farming.

License:
This project is open source, and you can freely use, modify, and distribute it. However, use it responsibly and within the boundaries of Steam's terms and services.

