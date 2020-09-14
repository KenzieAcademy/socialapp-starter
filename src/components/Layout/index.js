import React from "react";
import Navigation from '../Navigation'
import { Pane, Card } from 'evergreen-ui'

// Generates site layout on each page
// location prop should ALWAYS equal this.constructor.name
const Layout = ({ children, location }) => {
    return (
        <Pane
            clearfix
            height='100vh'
            width='100vw'
            display='flex'
            flexDirection='row'
            justifyContent='flex-start'
        >
            <Navigation location={location} />
            <Pane
                height='100vh'
                width='85vw'
                background="tint1"
                display='flex'
                flexDirection='column'
            >
                {children}
            </Pane>
        </Pane>
    )

}

export default Layout

