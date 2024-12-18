import React from "react";
import Header from './Components/Header'
import SearchBar from "./Components/SearchBar";
import SelectMenu from "./Components/SelectMenu";
import CountriesList from "./Components/CountriesList"
import './App.css'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className="search-filter-container">
                    <SearchBar />
                    <SelectMenu />
                </div>
                <CountriesList />
            </main>
        </>
    )
}

export default App;