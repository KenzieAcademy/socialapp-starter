import React from 'react'
import {Pane, TabNavigation, SidebarTab} from 'evergreen-ui'
import {NavLink} from 'react-router-dom'

const Navigation = ({ location }) => {
    const pages = ['Home', 'Notifications', 'Profile']

    return (
        <Pane
            display='flex'
            flexDirection='column'
            height='100vh'
            width='15vw'
            background="tint1"
            borderRight='muted'
        >
            <TabNavigation marginX={4} marginBottom={16}>
                {pages.map((tab) => (
                    <SidebarTab
                        key={tab}
                        is="a"
                        href="#"
                        id={tab}
                        isSelected={location === tab}
                    ><NavLink to={'./' + tab.toLowerCase()}>
                        {tab}
                    </NavLink>
                    </SidebarTab>
                ))}
            </TabNavigation>
        </Pane>
    )
}

export default Navigation