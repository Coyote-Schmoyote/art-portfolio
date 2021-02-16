const myName = document.getElementById("myName");
const myOccupation = document.getElementById("artist");
const greetings = [ "Labas! Aš Nina Ždanovič.","Hey! I am Nina Zdanovic.","こんにちは！ニーナジダノビチです。","Привет! Я Нина Жданович.", ".'היי! אני נינה זדנוביץ "];
const length = greetings.length;
const occupation = ["Menininkė & Tyrėja", "Artist & Researcher", "アーティスト & 研究者", "Художник & Исследователь", "אמן & חוקר "]
const length2 = occupation.length;
const dotsButton = document.querySelector(".dots");
const hiddenDots = document.querySelector(".hidden-dots");
const myList = document.querySelector(".my-list");
const moreList = document.querySelector(".moreList");
const dotsButtonConf = document.querySelector(".dots-conf");
const hiddenDotsConf = document.querySelector(".hidden-dots-conf");
const myListConf = document.querySelector(".my-list-conf");
const moreListConf = document.querySelector(".moreList-conf");

//read more//
dotsButton.addEventListener("click", (e)=>{
	myList.classList.toggle("show-more");
	if (myList.className ="show-more") {
		moreList.style.display = "inline";
		dotsButton.style.display = "none";
		hiddenDots.style.display = "block";
	};
})

dotsButtonConf.addEventListener("click", (e)=>{
	myListConf.classList.toggle("show-more");
	if (myListConf.className ="show-more") {
		moreListConf.style.display = "inline";
		dotsButtonConf.style.display = "none";
		hiddenDotsConf.style.display = "block";
	};
})

//read less//

hiddenDots.addEventListener("click", (e)=> {
	if (moreList.style.display= "inline") {
		moreList.style.display = "none";
		dotsButton.style.display = "block";
		hiddenDots.style.display = "none";
	};
})


hiddenDotsConf.addEventListener("click", (e)=> {
	if (moreListConf.style.display= "inline") {
		moreListConf.style.display = "none";
		dotsButtonConf.style.display = "block";
		hiddenDotsConf.style.display = "none";
	};
})


//change languages //
const getNextId = (idx = 0, length) => {
	return (idx+1) % length;
};
let idx;

const changeName = () => {
	idx = getNextId(idx, length);
	myName.innerHTML = greetings[idx];
}

const changeOccupationLanguage = () => {
	idx = getNextId (idx, length2);
	myOccupation.innerHTML = occupation[idx];
}
myName.addEventListener("click", changeName);
myOccupation.addEventListener("click", changeOccupationLanguage);

