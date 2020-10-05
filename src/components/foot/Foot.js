import React from "react";
import Goofy from "../../media/Goofy.jpg"
import Sam from "../../media/sam.jpg"
import Tim from "../../media/tim.jpg"
import Shari from "../../media/shari.png"
import { Carousel, } from 'antd';
import { createFromIconfontCN, } from '@ant-design/icons';

class Foot extends React.Component {
    state = {
        dotPosition: 'top',
    }
    render() {
        // for the icons
        const IconFont = createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
        });
        const { dotPosition } = this.state;
        return (
            <div>
                {/* take to make one for yourself */}
                <Carousel autoplay dotPosition={dotPosition}>
                    {/* start of the dev card  */}
                    <div className="card-container">

                        <img
                            className="Dev"
                            src={Tim}
                            alt="user"
                        />

                        <h3><b>Tim Terry</b></h3>
                        <h2>Ohio</h2>
                        <p>
                            Casual Gamer <br />
                            Front-end developer
                        </p>

                        <p>
                            <b>
                                Interest: Gaming , Sleeping and binge-watching on my days off.<br />
                            Aspirations:Learning to steam , learning more tech skills , getting a pilot license
                            </b>
                        </p>

                        <div className="media links">
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} />  </a>
                            <a href="https://www.facebook.com/tim.terry.99" target="_blank" rel="noopener noreferrer"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} />  </a>
                        </div>

                        <div className="skills">
                            <h1>Skills</h1>
                            <ul>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>Software Development</li>
                            </ul>
                        </div>
                    </div>
                    {/* end of the dev card */}
                    {/* start of the dev card  */}
                    <div className="card-container">

                        <img
                            className="Dev"
                            src={Goofy}
                            alt="user"
                        />

                        <h3><b>Mike Reames</b></h3>
                        <h2>New Jersey</h2>
                        <p>
                            Aspiring Web Developer and Voice Actor
                        </p>

                        <p>
                            Grade-A Nutcase
                            <strong>Favorite band:</strong> Alice in Chains
                            <strong>Favorite Show:</strong> Bojack Horseman
                            <strong>Favorite Movie:</strong> Inside Out
                            <strong>Favorite Game:</strong> Fire Emblem: Path of Radiance

                        </p>

                        <div className="media links">
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} />  </a>
                            <a href="https://www.facebook.com/mike.reames.9" target="_blank" rel="noopener noreferrer"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} />  </a>
                        </div>

                        <div className="skills">
                            <h1>Skills</h1>
                            <ul>
                                <li>Front End Development</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Dreamweaver</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
                    {/* end of the dev card */}
                    {/* start of the dev card  */}
                    <div className="card-container">

                        <img
                            className="Dev"
                            src={Sam}
                            alt="user"
                        />

                        <h3><b>Samantha Taylor</b></h3>
                        <h2>Ohio</h2>
                        <p>
                            Bada** Gamer and Creative front-end developer
                        </p>

                        <p>
                            <strong>Hobbies:</strong> Dice Making, Painting, Tabletop gaming, DnD, Mtg, Video Games.<br />
                            <strong>Favorite Tv Show:</strong> Supernatural, The 100, The Magicians<br />
                            <strong>Favorite Movies:</strong>Inception, Oceans Movies, The Martian<br />
                            <strong>Favorite Band:</strong> Shinedown <br />
                            <strong>Favorite Games:</strong> Legend of Zelda, Final Fantasy, Minecraft<br />
                            <strong>Favorite Coding Language:</strong> React
                        </p>

                        <div className="media links">
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} />  </a>
                            <a href="https://www.facebook.com/samanthataylor91/" target="_blank" rel="noopener noreferrer"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} />  </a>
                        </div>

                        <div className="skills">
                            <h1>Skills</h1>
                            <ul>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
                    {/* end of the dev card */}
                    {/* start of the dev card  */}
                    <div className="card-container">

                        <img
                            className="Dev"
                            src="https://randomuser.me/api/portraits/women/79.jpg"
                            alt="user"
                        />
                        <h3><b>Phillip Golden</b></h3>
                        <h2>Ohio</h2>
                        <p>
                            Casual Gamer and front-end developer
                        </p>

                        <p>
                            Big anime fan <IconFont type="icon-twitter"></IconFont>
                        </p>

                        <div className="media links">
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} />  </a>
                            <a href="https://www.facebook.com/tim.terry.99" target="_blank" rel="noopener noreferrer"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} />  </a>
                        </div>

                        <div className="skills">
                            <h1>Skills</h1>
                            <ul>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
                    {/* end of the dev card */}
                    {/* start of the dev card  */}
                    <div className="card-container">

                        <img
                            className="Dev"
                            src={Shari}
                            alt="user"
                        />


                        <h3><b>Shari Dragon</b></h3>
                        <h2>Colorado</h2>
                        <p>
                            Front-end Developer <br />
                            Love to read books and eat sweet treats
                        </p>

                        <div className="media links">
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} />  </a>
                            <a href="https://www.facebook.com/tim.terry.99" target="_blank" rel="noopener noreferrer"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} />  </a>
                        </div>

                        <div className="skills">
                            <h1>Skills</h1>
                            <ul>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>


                </Carousel>

            </div>
        );
    }
}

export default Foot;


















