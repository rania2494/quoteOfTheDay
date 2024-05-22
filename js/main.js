var quote = document.getElementById('quote')
var auther = document.getElementById('auther')
var autherImg = document.getElementById('autherImg')

var quotes =[
{
    quote:"“Be yourself; everyone else is already taken.”",
    auther: "― Oscar Wilde",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg"
} ,
{
    quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    auther: "― Marilyn Monroe",
    src:"https://images.gr-assets.com/quotes/1511992603p2/8630.jpg"
} ,
{
    quote:"“So many books, so little time.”",
    auther: "― Frank Zappa",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1696236573i/22302._UX200_CR0,0,200,200_.jpg"
} ,
{
    quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "― Albert Einstein",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg"
} ,
{
    quote:"“A room without books is like a body without a soul.”",
    auther: "― Marcus Tullius Cicero",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg"
} ,
{
    quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther: "― Bernard M. Baruch",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1331977133i/5768330._UX200_CR0,30,200,200_.jpg"
} ,
{
    quote:"“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    auther: "― William W. Purkey",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1282396130i/1744830._UX200_CR0,47,200,200_.jpg"
} ,
{
    quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    auther: "― Mae West",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg"
    
} ,
{
    quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
    auther: "― Robert Frost",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1605640483i/7715._UX200_CR0,33,200,200_.jpg"
} ,
{
    quote:" “A friend is someone who knows all about you and still loves you.”",
    auther: "― Elbert Hubbard",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1216826209i/114059._CR0,24,200,200_.jpg"
} ,
{
    quote:"“Always forgive your enemies; nothing annoys them so much.”",
    auther: "― Oscar Wilde ",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg"
} ,
{
    quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    auther: "― Mahatma Gandhi",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg"
} ,
{
    quote:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    auther: "― Oscar Wilde",
    src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg"
} ,

]

var quoteNum;
var oldQuoteNum 
quoteChange();

function quoteChange(){
//  quoteNum = Math.round(Math.random()*quotes.length-1)
 quoteNum = Math.floor(Math.random()*quotes.length)
checkQuote ()
}


function checkQuote (){
    if(quoteNum!==oldQuoteNum){

quote.innerHTML=quotes[quoteNum].quote;
auther.innerHTML=quotes[quoteNum].auther;
autherImg.src=quotes[quoteNum].src;


        oldQuoteNum=quoteNum

        } else {
            quoteNum = Math.floor(Math.random()*quotes.length)
            checkQuote();
        
        }
}






