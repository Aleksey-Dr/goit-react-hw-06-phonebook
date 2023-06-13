Basic initial settings #1
1. Created this repository by React homework template (https://github.com/goitacademy/react-homework-template).
2. Set Settings > Actions > General:
   Workflow permissions:
   🔘 Read and write permissions (Workflows have read and write permissions in the repository for all scopes)
   ☑  Allow GitHub Actions to create and approve pull requests
3. Changed: "homepage": "https://your_username.github.io/your_repo_name/".

II. Basic initial settings #2
1. Set Settings > Pages:
   Branch: gh-pages from folder "root"
2. Code > About > ⚙ > Website > ☑ Use your GitHub Pages website
   (https://aleksey-dr.github.io/goit-react-hw-04-phonebook/).

III. Adding and configuring tools
1. npm install.
2. npm i prop-types.
3. npm i clsx.
4. npm i shortid.

IV. Copied all components from goit-react-hw-04-phonebook

V. Refactoring <Filter>
1. Created a "redux" folder in the "src" folder.
2. Created a store.js to the "redux" folder.
3. "npm i redux".
4. "npm i react-redux".
5. "npm install @reduxjs/toolkit react-redux".
6. "npm i @redux-devtools/extension".
7. Created a filterSlice.js in the "redux" folder.

VI. Refactoring <ContactForm> and <ContactsItem>
1. Created a contactsSlice.js in the "redux" folder.
2. Created an "addContact" metod in the contactsSlice.
3. Created an "deleteContact" metod in the contactsSlice.