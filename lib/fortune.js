var fortuneCookies = [
	"No matter where you go, there you are - Fletch.",
	"Always know where your towel is - Ford Prefect.",
	"Niezche is dead - God.",
	"Be alert - the world needs more lerts - bumpersticker.",
	"He who smiles when something's wrong has found someone to blame it on - Benny Hill.",
];

exports.getFortune = function()
{
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};
