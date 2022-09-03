import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Drawer, Button, Menu, Grid } from 'antd';

import {
	UserOutlined,
	HomeOutlined,
	CodeOutlined,
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	FileTextOutlined
} from '@ant-design/icons';

import { createFromIconfontCN } from '@ant-design/icons';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './NavBar.scss';

const IconFont = createFromIconfontCN({
	scriptUrl: [
		'//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
		'//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
	],
});


const SubMenu = Menu.SubMenu;
const { useBreakpoint } = Grid;

const Navbar = props => {
	const [currentKey, setCurrentKey] = useState(useLocation().pathname.split('/')[1]);
	const [visible, setVisible] = useState(false);
	const { md } = useBreakpoint();

	const handleMenuSelection = (e) => {
		setCurrentKey(e.key);
	};


	let leftMenu = (
		<Menu mode={md ? "horizontal" : "inline"} onClick={handleMenuSelection} selectedKeys={[currentKey]} disabledOverflow={true}>
			<Menu.Item key="home" icon={<HomeOutlined />}>
				<Link to="/">
					Home
				</Link>
			</Menu.Item>
			<Menu.Item key="cv" icon={<UserOutlined />} disabled={true}>
				{/* disabled={true} */}
				<Link to="/cv">
					CV
				</Link>
			</Menu.Item>
			<SubMenu key="sub1" icon={<CodeOutlined />} title="CheatSheet">
				<Menu.ItemGroup title={"Python"}> {/*<span><IconFont type="icon-python" /> Python </span>*/}
					<Menu.Item key="2">
						<Link to="/python/general">General</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/python/dataframe"> Dataframe </Link>
					</Menu.Item>
					<Menu.Item key="4">
						<Link to="/python/database"> Database </Link>
					</Menu.Item>
					<Menu.Item key="5" disabled={true}>
						<Link to="/python/plotly"> Plotly </Link>
					</Menu.Item>
					<SubMenu key="sub2" title="Scraping" disabled={true}>
						<Menu.Item key="6">BeautifulSoup</Menu.Item>
						<Menu.Item key="7">Selenium</Menu.Item>
					</SubMenu>
				</Menu.ItemGroup>
			</SubMenu>
		</Menu>
	);


	return (
		<nav className="menuBar">
			<div className="logo">
				<a href="">LJPR.APP</a>
			</div>
			<div className="menuCon">
				<div className="leftMenu">
					{leftMenu}
				</div>

				<Button className="barsMenu" onClick={() => setVisible(true)}>
					<span className="barsBtn">
						<ion-icon name="menu-outline"></ion-icon>
					</span>
				</Button>
				<Drawer
					title="Menu"
					placement="top"
					closable={true}
					onClose={() => setVisible(false)}
					visible={visible}
					size='default'
				>
					{leftMenu}
				</Drawer>

			</div>
		</nav>
	);

}

export default Navbar;
