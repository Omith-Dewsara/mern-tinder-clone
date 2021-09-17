import React from "react";
import "../styles/SwipeButtons.css";
import { IconButton } from "@material-ui/core";
import { MdReplay, MdStar, MdFavorite, MdFlashOn } from "react-icons/md";
import { CgClose } from "react-icons/cg";

function SwipeButtons() {
	return (
		<div className="swipeButtons">
			<IconButton className="swipeButton">
				<MdReplay className="swipeButtons__repeat" />
			</IconButton>
			<IconButton className="swipeButton">
				<CgClose className="swipeButtons__left" />
			</IconButton>
			<IconButton className="swipeButton">
				<MdStar className="swipeButtons__star" />
			</IconButton>
			<IconButton className="swipeButton">
				<MdFavorite className="swipeButtons__right" />
			</IconButton>
			<IconButton className="swipeButton">
				<MdFlashOn className="swipButtons__lightning" />
			</IconButton>
		</div>
	)
}

export default SwipeButtons;