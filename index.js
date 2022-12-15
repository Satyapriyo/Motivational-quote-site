const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const tweetKaro =document.getElementById("tweetKaro");
let realData = "";
let quotesData="";
let quotesAuthor="";
const tweetNow =()=>{
    let twtPost =`https://twitter.com/intent/tweet?text=${realData[randN].text}`;
    window.open(twtPost);
}
const getNewQuotes = () => {
  let randN = Math.floor(Math.random() * 1000);
  console.log(randN);
  realData[randN].author
  quotes.innerText = `${realData[randN].text}`;
  if(realData[randN].author ==null){
    author.innerText = `unknown`;
  }
  else{
    author.innerText = `By   ${realData[randN].author}`;
  }
};
const getQuotes = async () => {
  console.log("hello");
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (err) {
    console.log(err);
  }
};
getQuotes();
const refreshQuotes = document.getElementById("btn");
refreshQuotes.addEventListener("click", getNewQuotes);

tweetKaro.addEventListener("click",()=>{
    tweetNow();
})
