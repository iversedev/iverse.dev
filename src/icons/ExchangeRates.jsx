import React from "react"

export function ExchangeRates(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill="none" stroke="currentColor" strokeLinecap="round">
                <path d="M17.757 7.193a7.5 7.5 0 0 0-13.108 6.303M19.3 10.274a7.5 7.5 0 0 1-13.186 6.375"></path>
                <path
                    strokeLinejoin="round"
                    d="M18.125 5.5v2h-2m-8.25 9h-2v2"
                ></path>
                <path d="M12 8v8"></path>
                <path
                    strokeLinejoin="round"
                    d="M13.81 10.152c-.12-.53-.803-1.12-1.804-1.12s-1.77.65-1.77 1.47c0 1.864 3.711.906 3.711 3.07c0 .781-.94 1.444-1.94 1.444s-1.694-.615-1.899-1.274"
                ></path>
            </g>
        </svg>
    )
}
