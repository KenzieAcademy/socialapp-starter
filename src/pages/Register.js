import React from "react";
import Menu from "../components/menu/Menu";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Layout } from "antd";
import { Link } from "react-router-dom";

class Register extends React.Component {
    render() {
        const { Header, Content, Footer } = Layout;

        return (
            <div className="Home">
                <Menu />
                <RegistrationForm />
                <Link to="/">Close</Link>
                <Footer style={{ textAlign: "center" }}>
                    Mix&Mingle
                </Footer>
            </div>
        );
    }
}

export default Register;
