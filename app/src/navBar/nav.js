"use client";

import Link from "next/link";

function handleClick(msg) {
    console.log("Button pressed " + msg)
}

function GetButton({name, msg}) {
    return (
        <div className="buttonArea">
            <button 
                onClick={() => handleClick(msg)} 
                className="navButton"
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
                <Link href="/">
                    <GetButton name="Home" msg="Home clicked!" />
                </Link>
                <Link href="/src/pages/page2">
                    <GetButton name="Page2" msg="Page2 clicked!"/>
                </Link>
            </div>
        </nav>
    )
}

export default function Nav() {
    return getNav();
}