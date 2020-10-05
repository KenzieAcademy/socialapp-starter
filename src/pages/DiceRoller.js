import React from "react";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import { Layout } from 'antd';
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import Dice from '../components/dice/Dice'
import Foot from "../components/foot/Foot";

class DiceRoller extends React.Component {
    render() {
        const { Header, Content } = Layout;
        return (
            <div className="container">
                <Layout className="site-layout">
                    <MenuUnauthenticated />
                    <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
                    <Content style={{ width: '100%', overflow: 'initial' }} >
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            <h1>Dice Roller</h1>
                            <Dice />
                        </div>
                    </Content>
                    <Foot />

                </Layout>
            </div>

        );
    }
}

export default DiceRoller;
