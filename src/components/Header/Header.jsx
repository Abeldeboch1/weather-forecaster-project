import React from "react";
import Search from "../Search/Search";
import "../../components/Header/Header.css";

export default function Header({ searchCity }) {
    return (
        <>
        <header className="Header" >
                <h1 className="Header__title" > Weather <span className='blue'>Forecast</span> </h1>
                <Search searchCity={searchCity} />
            </header >
        </>
    );
}