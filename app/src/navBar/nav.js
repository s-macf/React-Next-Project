"use client";

import Link from "next/link";

function handleClick(msg) {
    console.log("Button pressed " + msg)
}

function GetButton({name, msg}) {
    return (
        <div>
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

                <div className="leftBar">
                    <Link href="/">
                        <GetButton name="Home" msg="Home clicked!" />
                    </Link>
                    <Link href="/src/pages/page2">
                        <GetButton name="=" msg="Page2 clicked!" />
                    </Link>
                </div>

                <div className="rightBar">
                    <Link href="/src/pages/page2">
                        <GetButton name="Rooms" msg="Page3 clicked!" />
                    </Link>
                    <Link href="/src/pages/page2">
                        <GetButton name="Wellness" msg="Page3 clicked!" />
                    </Link>
                    <Link href="/src/pages/page2">
                        <GetButton name="Experiences" msg="Page3 clicked!" />
                    </Link>
                    <Link href="/src/pages/page2">
                        <GetButton name="Dining" msg="Page3 clicked!" />
                    </Link>
                    <Link href="/src/pages/page2">
                        <GetButton name="Book" msg="Page3 clicked!" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default function Nav() {
    return getNav();
}