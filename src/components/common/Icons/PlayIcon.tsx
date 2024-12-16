import React from 'react'
interface colorProp {
    color: string;
}
const PlayIcon: React.FC<colorProp> = ({ color }) => {
    return (
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.4648 14.0003L0.267169 27.3935L0.26717 0.607088L23.4648 14.0003Z" fill={color} />
        </svg>

    )
}

export default PlayIcon