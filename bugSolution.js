The solution involved a combination of cleaning cache directories and reinstalling dependencies.  The exact steps required will vary depending on the operating system and project setup. However, the process generally involves:

1. **Cleaning the Expo cache:** This typically involves removing the `.expo` directory from the project root.
2. **Clearing the Metro bundler cache:** This may involve deleting the `.metro` cache directory (the location can vary by OS).
3. **Reinstalling project dependencies:** This is done by running `npm install` or `yarn install`.
4. **(If problems persist):** As a last resort, try removing the entire `node_modules` directory and then running `npm install` or `yarn install`. 

After performing these steps, run `expo start --clear` to initiate a clean build. In some cases, restarting the machine might be necessary.  These steps effectively resolve the vague 'metro-resolver' errors by forcing a complete rebuild with fresh dependencies and configurations.