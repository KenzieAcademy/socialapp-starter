import React from 'react'
import DeleteMessage from '../components/deleteMessage/DeleteMessage'
import Menu from '../components/menu/Menu'



class MyMessages extends React.Component {

    render() {
        return (
            <div className="MyMessages">
                <Menu />
                <DeleteMessage />
            </div>
        )
    }
}

export default MyMessages
