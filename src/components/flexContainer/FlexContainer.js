// import React from 'react';
// import { Container, Header } from 'semantic-ui-react';
// import { Link } from "react-router-dom";
// import "./FlexContainer.css";
// import { withAsyncAction } from "../../redux/HOCs";

// class FlexContainer extends React.Component {
//     handleLike = event => {
//         event.preventDefault();
//         this.props.like();
//     };

//     render() {
//         return (
//             <div className="FlexContainer">
//                 const FlexContainer = () => (
//                 <div>
//                     <Container fluid>
//                         <Header as='h2'>About Our Big, Bad Universe</Header>
//                         <p>this is some stuff about the universe</p>
//                         <p>this is some science about the unknown</p>
//                     </Container>
//                 </div>
//                 )
//             </div>
//         )

//     };

// export default FlexContainer;



import React from 'react'
import { Container, Divider, Header, Image } from 'semantic-ui-react'

const FlexContainer = () => (
    <div>
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Mercury!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Mercury.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Venus!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Venus.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Earth!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Earth.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Mars!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Mars.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Jupiter!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Jupiter.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Saturn!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Saturn.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Uranus!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Uranus.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Neptune!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Neptune.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. Pluto!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/Pluto.jpg")} size='small' floated='left' />
            </div>
            <p>
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
        <br />
        <Container fluid textAlign='justified'>
            <Header as='h2' color='green'>Because. PlanetX!</Header>
            <div>
                <Image src={require("../../components/assets/images/planets/PlanetX.jpg")} size='small' floated='left' />
            </div>
            <p id="Planet">
                Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight, when the Sun's brightness doesn't outshine little Mercury. However, 13 times each century, observers on Earth can watch Mercury pass across the face of the Sun, an event called a transit. These rare transits fall within several days of 8 May and 10 November. The first transits of Mercury in the 21st century occurred May 7, 2003, Nov. 8, 2006, and May 9, 2016. The next one will be Nov. 11, 2019.

                The first spacecraft to visit Mercury was Mariner 10, which imaged about 45 percent of the surface. And the MESSENGER spacecraft flew by Mercury three times and orbited the planet for four years before crashing on its surface. The European Space Agency launched their first mission to explore Mercury - BepiColombo - in 2018.
            </p>
            <p>
                Significant Events:<br />
                1631: Thomas Harriott and Galileo Galilei observe Mercury with the newly invented telescope.
            <br />
            1631: Pierre Gassendi uses a telescope to watch from Earth as Mercury crosses the face of the Sun.
            <br />
            1965: Incorrectly believing for centuries that the same side of Mercury always faces the Sun,<br /> astronomers using radar find that the planet rotates three times for every two orbits.
            <br />
            1974-1975: Mariner 10 photographs roughly half of Mercury's surface during three flybys.
            <br />
            1991: Scientists using Earth-based radar find signs of ice locked in permanently shadowed areas of craters in Mercury's polar regions.
            <br />
            2008-2009: MESSENGER observes Mercury during three flybys.
            <br />
            2011: MESSENGER begins its orbital mission at Mercury, yielding a treasure trove of images, compositional data and scientific discoveries.
            <br />
            2015: MESSENGER is deliberately crashed into Mercury after expending all its propellant, ending its mission.
            <br />
            2018: BepiColombo launches with a target date for Mercury orbit insertion of 2025.
            </p>
        </Container>
    </div>
)

export default FlexContainer