const myName = document.getElementById("myName");
const myOccupation = document.getElementById("artist");
const greetings = [ "Labas! Aš Nina Ždanovič.","Hey! I am Nina Zdanovic.","こんにちは！ニーナジダノビチです。","Привет! Я Нина Жданович.", ".'היי! אני נינה זדנוביץ "];
const length = greetings.length;
const occupation = ["Menininkė & Tyrėja", "Artist & Researcher", "アーティスト & 研究者", "Художник & Исследователь", "אמן & חוקר "]
const length2 = occupation.length;
const hiddenGroup = documents.getElementById("hiddenGroup");
const dots = documents.getElementById("dots");

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

