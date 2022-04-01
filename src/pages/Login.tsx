import React, {FC} from 'react';
import {Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";

const Login:FC = () => {
    return (
        <div>
            <Layout>
                <Row justify="center" align="middle" className="h100">
                    <LoginForm/>
                </Row>
            </Layout>
        </div>
    );
};

export default Login;