import React from 'react'

export default function HomePage({setCurrentUser, currentUser}) {
    return (
        <div>
            "Hi! I'm the HP!" {currentUser.name}
            <img 
            src={currentUser.picture}
            alt='Who I am'
            />
        </div>
    )
}
