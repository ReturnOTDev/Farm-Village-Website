const carousel = () => {
	const carouselSlide = document.querySelector(".carousel-slide");
	const carouselImages = document.querySelectorAll(".carousel-slide img");
	const carouselContainer = document.querySelector(".carousel-container");

	// Buttons
	const prevBtn = document.querySelector("#prevBtn");
	const nextBtn = document.querySelector("#nextBtn");

	// Counter

	let counter = 1;

	const size = carouselImages[0].clientWidth;

	carouselContainer.style.width = `${size}px`;
	carouselSlide.style.transform = `translateX(${-size * counter}px)`;

	// Button Listeners

	nextBtn.addEventListener("click", () => {
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter++;
		carouselSlide.style.transform = `translateX(${-size * counter}px)`;
		console.log(counter);
	});

	prevBtn.addEventListener("click", () => {
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter--;
		carouselSlide.style.transform = `translateX(${-size * counter}px)`;
		console.log(counter);
	});

	carouselSlide.addEventListener("transitionend", () => {
		if (counter >= carouselImages.length - 2) {
			counter = 0;
			carouselSlide.style.transition = "none";
			carouselSlide.style.transform = `translateX(${-size * counter}px)`;
		} else if (counter <= 0) {
			counter = 5;
			carouselSlide.style.transition = "none";
			carouselSlide.style.transform = `translateX(${-size * counter}px)`;
		}
	});
};

carousel();

const carouselRoom = () => {
	const roomOptions = document.querySelectorAll(".room-option");
	const roomCarousel = document.querySelector(".room-carousel");
	const roomCarouselContainer = document.querySelector(
		".room-carousel-container"
	);

	// Buttons
	const next = document.querySelector("#roomNext");
	const prev = document.querySelector("#roomPrev");
	const size = roomOptions[0].clientWidth;

	// Counter
	let counter = 1;

	roomCarouselContainer.style.width = `${size}px`;
	roomCarousel.style.transform = `translateX(-${size}px)`;

	// function to move the slider
	const move = num => {
		roomCarousel.style.transition = "transform 0.8s ease-in-out";
		roomOptions[counter].style.animation = "fadeOut 0.8s ease-in-out";
		counter += num;
		roomCarousel.style.transform = `translateX(-${size * counter}px)`;
		roomOptions[counter].style.animation = "none";
	};

	// Event Listeners
	next.addEventListener("click", () => {
		move(1);
	});
	prev.addEventListener("click", () => {
		move(-1);
	});

	// Resetting of slider when reaching end
	roomCarousel.addEventListener("transitionend", () => {
		if (counter > roomOptions.length - 2) {
			roomCarousel.style.transition = "none";
			counter = 1;
			roomOptions[counter].style.animation = "none";
			roomCarousel.style.transform = `translateX(-${size * counter}px)`;
		}
		if (counter <= 0) {
			roomCarousel.style.transition = "none";
			counter = roomOptions.length - 2;
			roomOptions[counter].style.animation = "none";
			roomCarousel.style.transform = `translateX(-${size * counter}px)`;
		}
	});
};

carouselRoom();
