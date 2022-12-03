const quotes = [
    {
        quote: "인생은 당신에게 주어진 오직 한번 뿐인 여행이다.",
        author: "강민서",
    },
    {
        quote: "울지 말고 강해져라 그것이 네 목표다.",
        author: "김하진",
    },
    {
        quote: "당신의 실수에서 교훈을 얻어라.",
        author: "명소연",
    },
    {
        quote: "사람은 어려움 속에서 성장한다.",
        author: "손주희",
    },
    {
        quote: "노력은 배신하지 않는다.",
        author: "송지효",
    },
    {
        quote: "끝나버리기 전에는 무슨 일이든 불가능하다고 생각하지 말라.",
        author: "안하음",
    },
    {
        quote: "사람은 하고 싶은 것을 해야 행복하다.",
        author: "윤지안",
    },
    {
        quote: "우는건 약한게 아니라 그만큼 참은것이다.",
        author: "이가연",
    },
    {
        quote: "나는 좋은 선택을 할 수 있다.",
        author: "이로데",
    },
    {
        quote: "천천히 앞으로 나아가라, 하지만 뒤는 돌아보지말아라.",
        author: "이지은",
    },
    {
        quote: "우는 건 약한게 아닌 그만큼 참은 것이다.",
        author: "정시우",
    },
    {
        quote: "기분이 태도가 되지 말자.",
        author: "최민서",
    },
    {
        quote: "오늘 걷지 않으면 내일은 뛰어야 한다.",
        author: "최하은",
    },
    {
        quote: "과정보다는 결과를 보자.",
        author: "강영준",
    },
    {
        quote: "안 되면 될 때까지 하라.",
        author: "김기윤",
    },
    {
        quote: "지금 자면 꿈을 꾸지만, 공부하면 꿈을 이룬다.",
        author: "김리언",
    },
    {
        quote: "티끌모아 태산이다.",
        author: "김민성",
    },
    {
        quote: "인생을 즐겁게.",
        author: "박은율",
    },
    {
        quote: "모든 일의 시작은 인성에서 시작된다.",
        author: "박재성",
    },
    {
        quote: "남과 같이 해서는 남 이상 될 수 없다.",
        author: "서예성",
    },
    {
        quote: "행복은 돈으로 살 수 없다.",
        author: "송태희",
    },
    {
        quote: "이미 가진 것에 감사할 줄 알아야 행복이 온다.",
        author: "이상목",
    },
    {
        quote: "당신이 안 하면 아무것도 일어나지 않는다.",
        author: "이준서",
    },
    {
        quote: "피할 수 없으면 즐겨라.",
        author: "정수민",
    },
    {
        quote: "중요한 것은 속도가 아니고 방향이다.",
        author: "최원우",
    },
    {
        quote: "무엇이든 일단 시작해보아라. 누군가 기억해 줄 것이다.",
        author: "한도윤",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function makeQuotes() {
    const presentQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = presentQuote.quote;
    author.innerText = presentQuote.author;
}

makeQuotes()
setInterval(makeQuotes, 10000);
