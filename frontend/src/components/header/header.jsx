import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import './header.css';
export default function Header({ type }) {
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <i class="fa fa-bed" aria-hidden="true"></i>
                        <span>Stay</span>
                    </div>
                    <div className="headerListItem">
                        <i class="fa fa-plane" aria-hidden="true"></i>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <i class="fa fa-car" aria-hidden="true"></i>
                        <span>Car Rentals</span>
                    </div>

                </div>
                {
                    type !== "list" && (
                        <>
                            <h1 className="headerTitle">
                                A lifetime of discounts? It's Genius.
                            </h1>
                            <p className="headerDesc">
                                Get rewarded for your travels – unlock instant savings of 10% or
                                more with a free Booking.com account
                            </p>
                            <button className="headerBtn">Sign in / Sign Up</button>
                            <div className="headerSearch">
                                <div className="headerSearchItem">
                                    <i className="fa fa-bed headerIcon" aria-hidden="true"></i>
                                    <input
                                        type="text"
                                        placeholder="Where are you going?"
                                        className="headerSearchInput"
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                </div>
                                <div className="headerSearchItem">
                                    <i className="fa fa-calendar headerIcon" aria-hidden="true"></i>
                                    <span
                                        onClick={() => setOpenDate(!openDate)}
                                        className="headerSearchText"
                                    >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                                        date[0].endDate,
                                        "dd/MM/yyyy"
                                    )}`}</span>
                                    {openDate && (
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={(item) => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            className="date"
                                            minDate={new Date()}
                                        />
                                    )}
                                </div>
                                <div className="headerSearchItem">
                                    <i className="fa fa-user headerIcon" aria-hidden="true"></i>
                                    <span
                                        onClick={() => setOpenOptions(!openOptions)}
                                        className="headerSearchText"
                                    >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                                    {openOptions && (
                                        <div className="options">
                                            <div className="optionItem">
                                                <span className="optionText">Adult</span>
                                                <div className="optionCounter">
                                                    <button
                                                        disabled={options.adult <= 1}
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("adult", "d")}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">
                                                        {options.adult}
                                                    </span>
                                                    <button
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("adult", "i")}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="optionText">Children</span>
                                                <div className="optionCounter">
                                                    <button
                                                        disabled={options.children <= 0}
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("children", "d")}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">
                                                        {options.children}
                                                    </span>
                                                    <button
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("children", "i")}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="optionItem">
                                                <span className="optionText">Room</span>
                                                <div className="optionCounter">
                                                    <button
                                                        disabled={options.room <= 1}
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("room", "d")}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="optionCounterNumber">
                                                        {options.room}
                                                    </span>
                                                    <button
                                                        className="optionCounterButton"
                                                        onClick={() => handleOption("room", "i")}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    )}
                                    <div className="headerSearchItem">
                                        <button className="headerBtn" onClick={handleSearch}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )

}
