import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import { Carousel } from 'antd';
import UserData from "../components/getUsers/getUsers"
import funtable from "../pages/assets/photo1.jpg"
import clubspot from "../pages/assets/photo4.jpg"
class Home extends React.Component {


  render() {
    const contentStyle = {
      height: '260px',
      color: '#fff',
      lineHeight: '200px',
      textAlign: 'center',
      // background: '#364d79',
     
    };

    return (
      <div className="Home">



        <div className="site-layout-content">
          <Menu />
         
          <Carousel className="slidedeck" autoplay>
            <div>
         
              <h3 style={contentStyle}> <img className="imageslide" src={ funtable}style={{height:'300px'} }/></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img className="imageslide"src={ clubspot}style={{height:'300px'} }/></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img className="imageslide"src={ funtable}style={{height:'100px'} }/></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img className="imageslide"src={ funtable}style={{height:'100px'} }/></h3>
            </div>
          </Carousel>
        </div>
        <LoginForm />
      Link to="/register"><p>Register</p></Link>
        <RegistrationForm />

      </div>

    );

  }

}


export default userIsNotAuthenticated(Home);
