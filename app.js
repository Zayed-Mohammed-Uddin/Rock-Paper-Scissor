"use strict";

const rockImage = document.querySelector(".rock_img");
const paperImage = document.querySelector(".paper_img");
const scissorImage = document.querySelector(".scissor_img");
const poppedContent = document.querySelector(".popped_content");
const resetBtn = document.querySelector(".btn_reset");

let num_of_wins = parseInt(document.querySelector(".number_of_wins").innerText);
let num_of_losses = parseInt(
	document.querySelector(".number_of_losses").innerText
);
let num_of_ties = parseInt(document.querySelector(".number_of_ties").innerText);

const spanPopUp = document.createElement("span");
const displayImg = document.createElement("img");
const duplicateImg = document.createElement("img");

let number_of_image = 0;

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

rockImage.addEventListener("click", () => {
	number_of_image = Math.trunc(Math.random() * 3) + 1;

	if (number_of_image == 2) {
		tiePopUp(2, number_of_image);
		num_of_ties++;
		document.querySelector(".number_of_ties").innerText = num_of_ties;
	} else if (number_of_image == 1) {
		loserPopUp(2, number_of_image);
		num_of_losses++;
		document.querySelector(".number_of_losses").innerText = num_of_losses;
	} else if (number_of_image == 3) {
		winnerPopUp(2, number_of_image);
		num_of_wins++;
		document.querySelector(".number_of_wins").innerText = num_of_wins;
	}
});

paperImage.addEventListener("click", () => {
	number_of_image = Math.trunc(Math.random() * 3) + 1;

	if (number_of_image == 1) {
		num_of_ties++;
		tiePopUp(1, number_of_image);
		document.querySelector(".number_of_ties").innerText = num_of_ties;
	} else if (number_of_image == 2) {
		winnerPopUp(1, number_of_image);
		num_of_wins++;
		document.querySelector(".number_of_wins").innerText = num_of_wins;
	} else if (number_of_image == 3) {
		loserPopUp(1, number_of_image);
		num_of_losses++;
		document.querySelector(".number_of_losses").innerText = num_of_losses;
	}
});

scissorImage.addEventListener("click", () => {
	number_of_image = Math.trunc(Math.random() * 3) + 1;

	if (number_of_image == 3) {
		num_of_ties++;
		tiePopUp(3, number_of_image);
		document.querySelector(".number_of_ties").innerText = num_of_ties;
	} else if (number_of_image == 2) {
		loserPopUp(3, number_of_image);
		num_of_losses++;
		document.querySelector(".number_of_losses").innerText = num_of_losses;
	} else if (number_of_image == 1) {
		winnerPopUp(3, number_of_image);
		num_of_wins++;
		document.querySelector(".number_of_wins").innerText = num_of_wins;
	}
});

resetBtn.addEventListener("click", resetGame);
