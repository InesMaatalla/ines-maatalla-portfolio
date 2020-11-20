// import React from "react"
// import "./Stack.css"

// const Stack = () => (
//     <div className="stack">
//         <h1>[Stacks]</h1>
//         <div className="stack-container">
//             <p class="alignleft">
                
//                 <p>Front End Development</p>
        
//                 <div className="SkillList">
//                     <code class="SkillList_item">HTML5</code>
//                     <code class="SkillList_item">CSS3</code>
//                     <code class="SkillList_item">Javascript</code>
//                     <code class="SkillList_item">Sass</code>
//                     <code class="SkillList_item">Bootstrap</code>
//                     <code class="SkillList_item">Figma</code>
//                     <code class="SkillList_item">Gatsby</code>
//                 </div>
                
//                 <p class="alignleft">
//                     <span class="Heading_icon">
//                     <i class ="Icon icon-react">
//                     </i>
//                     </span>
//                     Back End Development
//                 </p>
//                 <div>
//                     <code class="SkillList_item">Ruby</code>
//                     <code class="SkillList_item">Rails</code>
//                     <code class="SkillList_item">Git</code>
//                     <code class="SkillList_item">Heroku</code>
//                     <code class="SkillList_item">Cloudinary</code>
//                     <code class="SkillList_item">Netlify</code>
//                     <code class="SkillList_item">GitHub</code>
//                 </div>
//             </p>
//             <p class="alignright">
//                 <p>[INES]</p>
//                 <p>Learned Full Stack Web Development at Le Wagon.
//                     Looking for a position to assist me in developing, 
//                     improving and obtaining the necessary skills in a challenging 
//                     and creative environment that utilizes team work 
//                     and encourages learning and development.
//                     I will bring my joy of living and my smile to your company!
//                 </p>
//             </p>
//         </div>
//     </div>
// )

// export default Stack

import React from 'react'
import './Stack.css'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import Portfolio from "../images/portfolio.png"

const Stack = () => {
    return (
        <div className="stack-container">
            <p className="top-line">
                [Stacks]
            </p>
            <p className="description">
                Languages and Frameworks
            </p>
            <div className="content-wrapper">
                <div className="column-one">
                    <div className="stack">
                        <IoMdCheckmarkCircleOutline/>
                        <h3>Front End Development</h3>
                        <p>HTML5, CSS3, Javascript, SASS, Bootstrap, Figma, Gatsby</p>
                    </div>
                    <div className="stack">
                        <IoMdCheckmarkCircleOutline/>
                        <h3>Back End Development</h3>
                        <p>Ruby, Rails, Git, GutHub, Heroku, Cloudinary, Netlify</p>
                    </div>
                    <div className="stack">
                        <FaRegLightbulb/>
                        <h3>//Ines</h3>
                        <p>Learned Full Stack Web Development at Le Wagon.
                            Looking for a position to assist me in developing, 
                            improving and obtaining the necessary skills in a challenging 
                            and creative environment that utilizes team work 
                            and encourages learning and development.
                            I will bring my joy of living and my smile to your company!
                        </p>
                    </div>
                </div>
                <div className="column-two">
                <img className="img" src={Portfolio} alt="me" />
                </div>
            </div>
        </div>
    )
}
export default Stack 


