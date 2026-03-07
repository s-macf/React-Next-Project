"use client";

import Link from "next/link";

function handleClick(msg) {
    console.log("Button pressed " + msg)
}

function GetButton({name, msg, className}) {    
    return (
        <div>
            <button 
                onClick={() => handleClick(msg)} 
                className={className}
            >
                {name}
            </button>
        </div>
    )
}

function getNav() {
    return (
        <nav>
            <div className="navBar">

                <div className="leftBar">
                    <Link href="/">
                        <GetButton name="Home" msg="Home clicked!" className="navButton"/>
                    </Link>
                    <GetButton name="=" msg="Page2 clicked!" className="navButton"/>
                </div>

                <div className="rightBar">
                    <Link href="/src/pages/RoomsPage">
                        <GetButton name="Rooms" msg="Page3 clicked!" className="navButton"/>
                    </Link>
                    <Link href="/src/pages/WellnessPage">
                        <GetButton name="Wellness" msg="Page3 clicked!" className="navButton"/>
                    </Link>
                    <Link href="/src/pages/ExperiencesPage">
                        <GetButton name="Experiences" msg="Page3 clicked!" className="navButton"/>
                    </Link>
                    <Link href="/src/pages/DiningPage">
                        <GetButton name="Dining" msg="Page3 clicked!" className="navButton"/>
                    </Link>
                    <Link href="/src/pages/BookPage">
                        <GetButton name="Book" msg="Page3 clicked!" className="bookButton"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default function Nav() {
    return getNav();
}