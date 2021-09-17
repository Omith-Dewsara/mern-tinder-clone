import React from "react";
import "../styles/Header.css";
import { IconButton } from "@material-ui/core";
import { BsFillPersonFill } from "react-icons/bs";
import { MdForum } from "react-icons/md";

function Header() {
	return (
		<div className="header">
			<IconButton>
				<BsFillPersonFill className="header__icon" />
			</IconButton>
			<img 
				src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
				alt=""
				className="header__logo"
			/>
			<IconButton>
				<MdForum className="header__icon" />
			</IconButton>
		</div>
	)
}

export default Header	