import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// Language context
export const LanguageContext = createContext();

const PRIMARY_LANGUAGE = 'en';
const SECONDARY_LANGUAGE = 'pl';
const PRIMARY_LANGUAGE_ICON_ID = 'primary-lang-icon';
const SECONDARY_LANGUAGE_ICON_ID = 'secondary-lang-icon';

function App() {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const [language, setLanguage] = useState(PRIMARY_LANGUAGE);

  // Helper to get the opposite icon id
  const getOppositeLangIconId = (lang) =>
    lang === PRIMARY_LANGUAGE ? SECONDARY_LANGUAGE_ICON_ID : PRIMARY_LANGUAGE_ICON_ID;

  // Helper to get the opposite language
  const getOppositeLanguage = (lang) =>
    lang === PRIMARY_LANGUAGE ? SECONDARY_LANGUAGE : PRIMARY_LANGUAGE;

  const applyPickedLanguage = (pickedLanguage, oppositeLangIconId) => {
    swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    setLanguage(pickedLanguage);
    var resumePath =
      pickedLanguage === PRIMARY_LANGUAGE
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    loadResumeFromPath(resumePath);
  };

  const swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    var pickedLangIconId =
      oppositeLangIconId === PRIMARY_LANGUAGE_ICON_ID
        ? SECONDARY_LANGUAGE_ICON_ID
        : PRIMARY_LANGUAGE_ICON_ID;
    document
      .getElementById(oppositeLangIconId)
      ?.removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      ?.setAttribute("filter", "brightness(40%)");
  };

  const loadResumeFromPath = async (path) => {
    try {
      const response = await axios.get(path, { cache: 'no-store' });
      setResumeData(response.data);
    } catch (err) {
      alert(err);
    }
  };

  const loadSharedData = async () => {
    try {
      const response = await axios.get(`portfolio_shared_data.json`, { cache: 'no-store' });
      setSharedData(response.data);
      document.title = `${response.data.basic_info.name}`;
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    loadSharedData();
    applyPickedLanguage(PRIMARY_LANGUAGE, SECONDARY_LANGUAGE_ICON_ID);
    // eslint-disable-next-line
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div>
        <Header sharedData={sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              applyPickedLanguage(
                PRIMARY_LANGUAGE,
                SECONDARY_LANGUAGE_ICON_ID
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={PRIMARY_LANGUAGE_ICON_ID}
            ></span>
          </div>
          <div
            onClick={() =>
              applyPickedLanguage(
                SECONDARY_LANGUAGE,
                PRIMARY_LANGUAGE_ICON_ID
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-spain"
              data-inline="false"
              id={SECONDARY_LANGUAGE_ICON_ID}
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={resumeData.basic_info}
          sharedBasicInfo={sharedData.basic_info}
        />
        <Projects
          resumeProjects={resumeData.projects}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Skills
          sharedSkills={sharedData.skills}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Experience
          resumeExperience={resumeData.experience}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Footer sharedBasicInfo={sharedData.basic_info} />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
