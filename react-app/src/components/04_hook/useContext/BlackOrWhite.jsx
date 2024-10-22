import React, {useState} from 'react'
import ThemeContext from './ThemeContext';
import MainContent from './MainContent';

const BlackOrWhite = () => {
    const [theme, setTheme] = useState("white");

    const toggleTheme = () => {
        // if문 사용 가능
        if(theme == "white") {
            setTheme("black");
        }
        else {
            setTheme("white");
        }
    }

    // return() 내에서는 if문 등은 되도록 사용X
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    )
}

export default BlackOrWhite