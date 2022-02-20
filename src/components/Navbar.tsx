import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from 'react-router-dom'
import {RoteNames} from "../router";
import {log} from "util";

const Navbar: FC = () => {
    const router = useHistory()
    const auth = false
    return (
        <Layout.Header>
            <Row justify="end">
                {auth
                    ?
                    <>
                    <div style={{color: 'white'}}>
                        juracucumber
                    </div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            onClick={() => console.log('Выйти')}
                            key={1}
                        >
                            Выйти
                        </Menu.Item>
                    </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            onClick={() => router.push(RoteNames.LOGIN)}
                            key={1}
                        >
                            Логин
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;