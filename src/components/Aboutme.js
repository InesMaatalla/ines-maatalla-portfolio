import React from 'react'
import { FcCollaboration, FcIdea, FcServices, FcSportsMode } from 'react-icons/fc'


const AboutData = [
    {
        icon: (<FcServices className="icon-1"/>),
        title: "Hard working",
        desc: "While(noSuccess { tryAgain(); if(Sucess) improve();})",
    },
    {
        icon: (<FcIdea className="icon-2"/>),
        title: "Innovative",
        desc: "Liking what I do is happiness.",
    },
    {
        icon: (<FcSportsMode className="icon-3"/>),
        title: "Challenge",
        desc: "Adventures fill my soul.",
    },
    {
        icon: (<FcCollaboration className="icon-4"/>),
        title: "Joy of living",
        desc: "Getting best result with a smile.",
    },
]

const About = () => {
    return (
        <div className="about-container">
            <p className="title-1">[About]</p>
            <p className="desc-1">export const Ines = styled.div</p>
            <div className="wrapper">
            {AboutData.map((item, index)=> {
                return (
                    <div className="about-box" key={index}>
                        <div className="icon">{item.icon}</div>
                        <p className="title">{item.title}</p>
                        <p className="desc">{item.desc}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default About