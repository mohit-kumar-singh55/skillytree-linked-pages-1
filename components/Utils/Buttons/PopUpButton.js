import React from 'react';
import Link from "next/link";

const PopUpButton = ({ label, link }) => {
    return (
        <>
            {link ? (
                <Link href={link}>
                    <button
                        // type={props.type}
                        className="h-[29px] w-[105px] rounded-full bg-gradient-to-r from-pink to-gradient_yellow px-4 text-lg font-bold text-white sm:h-[37px] sm:w-[133px] text-center"
                    >
                        {label}
                    </button>
                </Link>
            ) : (
                <button
                    // type={props.type}
                    className="h-[29px] w-[105px] rounded-full bg-gradient-to-r from-pink to-gradient_yellow px-4 text-lg font-bold text-white sm:h-[37px] sm:w-[133px] text-center"
                >
                    {label}
                </button>
            )}

        </>
    )
}

export default PopUpButton;