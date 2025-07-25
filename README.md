# Multilingual React Portfolio

This is a modern, multilingual portfolio web application built with React. It supports English and Polish languages, uses React Context for global language state, and loads all content dynamically from JSON files. The app is fully component-based and easy to customize.

## Features
- **Multilingual:** Switch between English and Polish with a single click.
- **React Context:** Global language state management.
- **Dynamic Content:** All portfolio data (about, projects, experience, skills) is loaded from JSON files.
- **Modern UI:** Responsive, clean, and easy to extend.
- **No jQuery:** Uses `axios` for all data fetching.

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
```bash
npm start
```
The app will run at [http://localhost:3000](http://localhost:3000).

## Project Structure
```
Portfolio/
  public/
    res_primaryLanguage.json         # English content
    res_secondaryLanguage.json       # Polish content
    portfolio_shared_data.json       # Shared data (name, social, etc.)
    ...
  src/
    components/                     # All React components
    App.js                          # Main app with LanguageContext
    ...
  README.md
  package.json
```

## How Language Switching Works
- The app uses a `LanguageContext` to manage the current language globally.
- When you click a language icon, the app loads the corresponding JSON file and updates all content.
- All components use the context to access the current language and display the correct data.

## Customization
- **Add More Languages:**
  1. Create a new JSON file in `public/` (e.g., `res_french.json`).
  2. Add a new language icon and update the language logic in `App.js`.
- **Edit Content:**
  - Update the JSON files in `public/` to change about, projects, experience, or skills.
- **Add Sections:**
  - Create new components in `src/components/` and add them to `App.js`.

## Dependencies
- React
- axios
- react-bootstrap
- react-awesome-slider
- react-switch
- @iconify/react

## License
MIT
