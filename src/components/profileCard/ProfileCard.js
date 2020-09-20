import React from 'react'
import DataService from '../../dataService'
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

class ProfileCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          about: '', 
          username: '',
          displayName: '',
          createdAt: '',
          updatedAt: '',
          googleId: '',
          pictureLocation: ''   
        }
        
        this.client = new DataService()
    }

    componentDidMount() {
        console.log(this.props.username)
        this.client.getSingleUser(this.props.username)
        .then(response => this.setState(response.data.user))
    }

    // build tool to prettify date
    dateBuilder(date) {
        if(date) {
        const d = date.slice(0,10).split('-')
        const month = d[1] - 0
        console.log(month)
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December']
        return `${months[month - 1]} ${d[2]}, ${d[0]}`
        }
        return null

    }

    render() {
        const { Header, Content, Footer} = Layout;

        const content = {
          backgroundColor: '#fffb8f',
          padding: '50px 0'
        }
    
        const card = {
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          maxWidth: '300px',
          fontFamily: 'Arial',
          margin: 'auto',
          textAlign: 'center',
          fontFamily: 'arial',
          backgroundColor: 'ffffff',
    
        }
    
        const avatar = {
          backgroundColor: '#e6f7ff',
          height: '110px'
          
        }
    
        const button = {
          border: 'none',
          outline: '0',
          display: 'inline-block',
          padding: '8px',
          color: 'white',
          backgroundColor: '#000',
          textAlign: 'center',
          cursor: 'pointer',
          width: '94%',
          height: '60px',
          fontSize: '18px',
        }

        return(
            <Content style={content} className="content">
            <div style={card} className="Profile">
              <div style={avatar} className="avatar">
                <Avatar shape="square" size={130} icon={<UserOutlined />} />
               </div>
              <p>{this.state.username}</p>
              <p>{this.state.about}</p>
              <p>{this.dateBuilder(this.state.createdAt)}</p>
              <div style={button} className="Button">
                <button>Message</button>
              </div>
            </div>
          </Content>
        );
    }

}

export default ProfileCard