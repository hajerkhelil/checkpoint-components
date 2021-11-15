
import React from 'react'
import Pic from './photo.png'

function ProfilePhoto() {
    const mystyle = {
        width :"50%",
        height:"auto"
    }
    return (
        <div>
            <img src={Pic} style={mystyle} alt='Pic'/>
        </div>
    )
}

export default ProfilePhoto