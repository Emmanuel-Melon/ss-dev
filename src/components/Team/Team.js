import React, { useState, useEffect } from 'react'
import DisplayTeam from './DisplayTeam'

import { Row, Col, Card, Button} from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaUser } from 'react-icons/fa'

import './Team.css'

export default function Team() {
    const [experts, setExperts] = useState({
        status:false,
        data:null,
        error:false
    })

    useEffect(() => {
        fetch('https://ssdev-api.herokuapp.com/expert').then(res => res.json()).then(data => setExperts({
            status:true,
            data:data,
            error:false
        }))
    }, [])

    return (
        <DisplayTeam experts={ experts } />
    )
}
