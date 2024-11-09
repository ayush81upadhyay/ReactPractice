import React, { useState } from "react";
import Header from './Components/Header'
import SearchBar from "./Components/SearchBar";
import SelectMenu from "./Components/SelectMenu";
import CountriesList from "./Components/CountriesList"
import './App.css'

const App = () => {
    const [query, Setquery] = useState("");
    return (
        <>
            <Header />
            <main>
                <div className="search-filter-container">
                    <SearchBar Setquery={Setquery} />
                    <SelectMenu />
                </div>
                <CountriesList query={query} />
            </main>
        </>
    )
}

export default App;