import React from 'react'
import './Video.css'

const Video = () => {
    return (
        <div className="video-container">
            <p className="video-title">
                [Videos]
            </p>
            <p className="video-description">
            Go where you feel most alive.
            </p>
            <div className = "video-cards">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/jbMuQNMGzsI" 
                    title="Fjord Saguenay - Exploring Canadian life." 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    
                </iframe>
                <p className="description-youtube">Fjord Saguenay - Exploring Canadian life.</p>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/ALjURBuY6Bw" 
                    title="Bruce Peninsula Park - Meet me where the sky touches the sea." 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <p className="description-youtube">Algonquin & Bon Echo Park - Leave the road, take the trails.</p>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/3knvPVoLYdA" 
                    title="Algonquin & Bon Echo Park - Leave the road, take the trails." 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <p className="description-youtube">Bruce Peninsula Park - Meet me where the sky touches the sea.</p>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/1h1vmPuOv-s" 
                    title="Western Canada - It's a long road but it's worth it." 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <p className="description-youtube">Western Canada - It's a long road but it's worth it.</p>
            </div>
        </div>
    )
}
export default Video
