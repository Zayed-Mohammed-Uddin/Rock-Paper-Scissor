"use strict";

const rockImage = document.querySelector(".rock_img");
const paperImage = document.querySelector(".paper_img");
const scissorImage = document.querySelector(".scissor_img");
const poppedContent = document.querySelector(".popped_content");
const resetBtn = document.querySelector(".btn_reset");
const autoPlayBtn = document.querySelector(".btn_autoplay");

let num_of_wins = parseInt(document.querySelector(".number_of_wins").innerText);
let num_of_losses = parseInt(
	document.querySelector(".number_of_losses").innerText
);
let num_of_ties = parseInt(document.querySelector(".number_of_ties").innerText);

const spanPopUp = document.createElement("span");
const displayImg = document.createElement("img");
const duplicateImg = document.createElement("img");

let number_of_image = 0;
let isAutoPlaying = false;
let intervalID;

const displayResult = function (your_selection, number_of_image) {
	displayImg.src = `./images/emoji-${your_selection}.png`;
	duplicateImg.src = `./images/emoji-${number_of_image}.png`;

	displayImg.style.width = "80px";
	duplicateImg.style.width = "80px";

	document.querySelector(".text_you").innerText = `You`;
	poppedContent.append(displayImg);
	poppedContent.append(duplicateImg);
	spanPopUp.innerText = `Computer`;
	poppedContent.append(spanPopUp);
};

const winnerPopUp = (your_selection, number_of_image) => {
	resetTextContent();
	document.querySelector(".poppedText").innerText = `You won`.toUpperCase();
	displayResult(your_selection, number_of_image);
};

const loserPopUp = (your_selection, number_of_image) => {
	resetTextContent();
	document.querySelector(".poppedText").innerText = `You lost`.toUpperCase();
	displayResult(your_selection, number_of_image);
};

const tiePopUp = (your_selection, number_of_image) => {
	resetTextContent();
	document.querySelector(".poppedText").innerText = `You tied`.toUpperCase();
	displayResult(your_selection, number_of_image);
};

const resetTextContent = () => {
	document.querySelector(".poppedText").innerText = ``;
	document.querySelector(".text_you").innerText = ``;
	spanPopUp.innerText = ``;
};

const resetGame = () => {
	num_of_wins = 0;
	num_of_losses = 0;
	num_of_ties = 0;

	resetTextContent();

	displayImg.parentNode.removeChild(displayImg);
	duplicateImg.parentNode.removeChild(duplicateImg);

	document.querySelector(".number_of_wins").innerText = num_of_wins;
	document.querySelector(".number_of_losses").innerText = num_of_losses;
	document.querySelector(".number_of_ties").innerText = num_of_ties;
};

const RockImage = function (your_selection) {
	number_of_image = Math.trunc(Math.random() * 3) + 1;

	if (number_of_image == 2) {
		tiePopUp(your_selection, number_of_image);
		num_of_ties++;
		document.querySelector(".number_of_ties").innerText = num_of_ties;
	} else if (number_of_image == 1) {
		loserPopUp(your_selection, number_of_image);
		num_of_losses++;
		document.querySelector(".number_of_losses").innerText = num_of_losses;
	} else if (number_of_image == 3) {
		winnerPopUp(your_selection, number_of_image);
		num_of_wins++;
		document.querySelector(".number_of_wins").innerText = num_of_wins;
	}
};

const PaperImage = function (your_selection) {
	number_of_image = Math.trunc(Math.random() * 3) + 1;

	if (number_of_image == 1) {
		tiePopUp(your_selection, number_of_image);
		num_of_ties++;
		document.querySelector(".number_of_ties").innerText = num_of_ties;
	} else if (number_of_image == 2) {
		winnerPopUp(your_selection, number_of_image);
		num_of_wins++;
		document.querySelector(".number_of_wins").innerText = num_of_wins;
	} else if (number_of_image == 3) {
		loserPopUp(your_selection, number_of_image);
		num_of_losses++;
		document.querySelector(".number_of_losses").innerText = num_of_losses;
	}
};

const ScissorImage = function (your_selection) {
	number_of_image = Math.trunc(Math.random() * 3) + 1;

	if (number_of_image == 3) {
		tiePopUp(your_selection, number_of_image);
		num_of_ties++;
		document.querySelector(".number_of_ties").innerText = num_of_ties;
	} else if (number_of_image == 2) {
		loserPopUp(your_selection, number_of_image);
		num_of_losses++;
		document.querySelector(".number_of_losses").innerText = num_of_losses;
	} else if (number_of_image == 1) {
		winnerPopUp(your_selection, number_of_image);
		num_of_wins++;
		document.querySelector(".number_of_wins").innerText = num_of_wins;
	}
};

const initGame = () => {
	const your_selection = Math.trunc(Math.random() * 3) + 1;
	if (your_selection == 3) {
		ScissorImage(your_selection);
	} else if (your_selection == 2) {
		RockImage(your_selection);
	} else if (your_selection == 1) {
		PaperImage(your_selection);
	}
};

const autoplay = function () {
	initGame();
};

scissorImage.addEventListener("click", ScissorImage);
rockImage.addEventListener("click", RockImage);
paperImage.addEventListener("click", PaperImage);

autoPlayBtn.addEventListener("click", function () {
	if (!isAutoPlaying) {
		autoPlayBtn.innerText = "Stop Auto Play";
		intervalID = setInterval(autoplay, 1000);
		isAutoPlaying = true;
	} else {
		autoPlayBtn.innerText = "Start Auto Play";
		clearInterval(intervalID);
		isAutoPlaying = false;
	}
});

resetBtn.addEventListener("click", resetGame);