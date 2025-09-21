import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './MobileApp.css'
import img1 from './assets/benten watch.png'
import img2 from './assets/blue lava rock.png'
import img3 from './assets/buddha_displacepent.png'
import img4 from './assets/cello-4709128.jpg'
import img5 from './assets/CANDY.png'
import heroLogo from './assets/belnd.svg'
import blenderlogo from './assets/blender_logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='screen1'>
      <div className='svgMusicNote'><img  id='herologo' src={heroLogo} alt="" /></div>
    <h3 className='introName'>Hi! i am Rahul Chityala</h3>
    </div>
    <div className="screen2">
<h3>Crafting ART That Speak Beyond Words</h3>
<p>“I’m a passionate <b>3d Artist</b> dedicated to blending Scenes, rhythm, and emotion into unique visual experiences.”</p>
    </div>
    <div className="screen3">
      <div className='screen3heading'>

      <h1>My <span>Blender</span> Journey</h1>
      <p>A Journey of Creativity and Exploration in 3D World. Experimenting with different styles and techniques has been a key part of my growth as an artist.</p>
      </div>
    <div className="musicJourneyImages">
      <div className="image"><img src={img1} alt="" /><div className='eventDetails'>
        <h1>The Ben10 Watch</h1>
        <p>
       I tried making the Ben 10 watch (Omnitrix) in Blender, and it was a really fun project.
Adding the green glow and little details made it feel more alive, just like in the cartoon.
I enjoyed experimenting with materials and lighting to give it that sci-fi look.
Overall, it was a great experience that helped me practice both modeling and rendering. </p></div></div>


      <div className="image"><img src={img2} alt="" /><div className='eventDetails'><h1>The BlueLava</h1><p>Well <b>Blue Lava</b> is a concept I came up with while watching Ben 10. I thought there should be a character that is the opposite of "Heat Blast",that is blue lava flowing within him and that's how <br /> <b>The Cold Blast</b> was born.</p></div></div>
      <div className="image"><img src={img3} alt="" /><div className='eventDetails'><h1>Buddha in Dhyana Mudra</h1><p>I was casually making pillars in Blender and ended up creating this serene Buddha statue in the Dhyana Mudra.creating this peice of art itself felt like meditation. <b>Namo Buddhaya</b> .</p></div></div>
      <div className="image"><img src={img4} alt="" /><div className='eventDetails'><h1>The Final Show</h1><p>The final show of the tour wrapped things up with powerful sound and dazzling visuals.
It wasn’t just a concert—it was a memory the audience will carry forever.</p></div></div>
<div className='image'><img src={img5} alt="" /><div className='eventDetails'><h1>The Candy Experience</h1><p>This project was all about fun and creativity.I was practicing <b>particle systems</b> here, experimenting with colors and shapes to make it pop.</p></div></div>
    </div>
    </div>


    <div className="screen4">
      <img src={blenderlogo} className='blenderlogo' alt="" />
      {/* <h1>Let's Connect</h1> */}
      {/* <h1>Thanks To</h1> */}

    </div>
    <div className="screen5">
      <div className="contactHolder">
      <h1>Let's Connect</h1>
      <div className='connectAt'>
      <a href="https://www.instagram.com/create.u___/" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className='instalogo' alt="" /></a>
      <a href="https://www.facebook.com/profile.php?id=100004138637174" target='_blank'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" className='fblogo' alt="" />
      </a>  
      </div>

      </div>
    </div>
    </>
  )
}

export default App
