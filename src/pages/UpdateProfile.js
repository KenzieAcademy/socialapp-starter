import Menu from "../components/menu/Menu";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import React from 'react'
import { Image } from 'semantic-ui-react'
import { userIsAuthenticated } from "../redux/HOCs";
class UpdateProfile extends React.Component {

    
    render() {
        return (

            <div> 
                <h1>User Name :..........</h1>
                <h1> pasword: .......</h1>
                <Segment>
                    <img src='https://i0.wp.com/theregister.co.nz/wp-content/uploads/converted_files/tumb/images/longform/shutterstock_1059853814-scaled.jpg?resize=1200%2C800&ssl=1'
                        height='200 px'
                        width='200 px'
                    />
                </Segment>


            </div>



        )


    }
}
export default UpdateProfile;
