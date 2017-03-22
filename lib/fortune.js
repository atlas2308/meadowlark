var fortuneCookies = [
	"No matter where you go, there you are - Fletch.",
	"Always know where your towel is - Ford Prefect.",
	"Niezche is dead - God.",
	"Be alert - the world needs more lerts.",
	"Whenever possible, keep it simple.",
];

exports.getFortune = function()
{
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};
