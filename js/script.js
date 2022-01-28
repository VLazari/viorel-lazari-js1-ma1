const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

// -- Question 1: -->

const cat = { complain: catComplain() };

function catComplain() {
	console.log("Meow!");
}

// -- Question 2: -->

const heading = document.querySelector("h3");

heading.innerHTML = `Updated heading`;

// -- Question 3: -->

heading.style.fontSize = "2em";

// -- Question 4: -->

heading.classList.add("subheading");

// -- Question 5: -->

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "red";
}

// -- Question 6: -->

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// -- Question 7: -->

function listOfNames(list) {
	list.forEach((element) => {
		console.log(element.name);
	});
}

listOfNames(cats);

// -- Question 8: -->

const catsContainer = document.querySelector(".cat-container");

function createCats(cats) {
	html = "";

	cats.forEach((element) => {
		age = "Age unknown";
		if (element.age) age = element.age;
		html += `<div><h5>${element.name}</h5><p>${age}</p></div>`;
	});

	return html;
}

catsContainer.innerHTML = createCats(cats);
