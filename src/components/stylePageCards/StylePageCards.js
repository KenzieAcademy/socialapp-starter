import React from 'react';
// import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { userIsAuthenticated } from "../../redux/HOCs";

import { Image, Card, Reveal } from 'semantic-ui-react';

import './StylePageCards.css';


// class StylePageCards extends React.Component {

//     render() {
//         return (

const StylePageCards = () => (

    <Card.Group itemsPerRow={5}>
        <Reveal animated='move up'>
            <Reveal.Content visible>
                <div>
                    <Image title="LemAndChuckCard" height="250" width="250" frameBorder='0' src='../../components/assets/images/stylePlaceholders/LemAndChuckPlanet51.jpg' />
                </div>
            </Reveal.Content>
            <Reveal.Content hidden>
                <Image.Link title="LemAndChuck" as={Link} to='https://www.photofunny.net/cat-kids/lemandchuckplanet51'></Image.Link>
            </Reveal.Content>
        </Reveal>
    </Card.Group>

)

// <Reveal.Content animated='move up'>
//     <Reveal.Content visible>
//         <div className="Cards">
//             <Card.Group itemsPerRow={5}>
//                 <Card title='Card1' type="Link" raised src="../../components/assets/images/stylePlaceholders/LemAndChuckPlanet51.jpg" />
//                 <Card title='Card2' type="Link" raised src="../../components/assets/images/stylePlaceholders/Spock.jpg" />
//                 <Card title='Card3' type="Link" raised src="../../components/assets/images/stylePlaceholders/AstronautZoom.jpg" />
//                 <Card title='Card4' type="Link" raised src="../../components/assets/images/stylePlaceholders/MichaelAndET.jpg" />
//                 <Card title='Card5' type="Link" raised src="../../components/assets/images/stylePlaceholders/Saturn.jpg" />
//                 <Card title='Card6' type="Link" raised src="../../components/assets/images/stylePlaceholders/Astronaut.jpg" />
//                 <Card title='Card7' type="Link" raised src="../../components/assets/images/stylePlaceholders/SpaceStache.jpg" />
//                 <Card title='Card8' type="Link" raised src="../../components/assets/images/stylePlaceholders/FireAndIce.jpg" />
//                 <Card title='Card9' type="Link" raised src="../../components/assets/images/stylePlaceholders/ObiWan.jpg" />
//                 <Card title='Card10' type="Link" raised src="../../components/assets/images/stylePlaceholders/Avatar.jpg" />
//             </Card.Group>
//         </div>
//     </Reveal.Content>

/* <Reveal.Content hidden>
    <div className="Links">
        <Link.Group itemsPerRow={5}>
            <Link className="Card1" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-kids/lemandchuckplanet51'
            ></Link>
            <Link className="Card2" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-celebrities/photomontage-spock-star-trek'></Link>
            <Link title="Card3" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-funny-photo-effects/photomontage-astronaut-zoom-earth-background'
            ></Link>
            <Link title="Card4" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-celebrities/EtMichaelJackson'
            ></Link>
            <Link title="Card5" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-special/photomontage-planets-uranus-small-ring'
            ></Link>
            <Link title="Card6" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-funny-photo-effects/photomontage-astronaut'
            ></Link>
            <Link title="Card7" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-stickers/sticker-mustache-hispster'
            ></Link>
            <Link title="Card8" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-collages/fire-ice-planet-with-your-photo'
            ></Link>
            <Link title="Card9" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-filmstv/ObiWanKenobi'
            ></Link>
            <Link title="Card10" height="250" width="250" frameBorder='0' scrolling='0' src='https://www.photofunny.net/cat-filmstv/avatar-girl'
            ></Link>
        </Link.Group>
    </div>
</Reveal.Content> */

// </Reveal.Content >
//         )
//     }
// }

export default userIsAuthenticated(StylePageCards);