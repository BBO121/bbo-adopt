// 캐릭터 데이터 관리 파일
// 새 캐릭터를 추가하려면 이 배열에 객체만 추가하면 됩니다.
// status: "available" (판매중) / "sold" (판매완료)

const characters = [
  {
    id: 7,
    name: "초코도넛뽀기🍩",
    species: "뜨개뽀기",
    s: "뽀",
    d: "뽀",
    a: "뽀 / msmk",
    description: "1차 아티스트 콜라보 (콜라보 아티스트 : msmk 님)\n그림+뜨개 한번에 분양하며 따로는 불가합니다!",
    price: "40,000원",
    status: "available",
    images: [
      { type: "뜨개", src: "./images/1778-knit.jpg" },
      { type: "아트", src: "./images/1778-art.jpg" }
    ],
    link: "https://thespecieslab.com/pages/character.html?id=1778"
  },
  {
    id: 8,
    name: "밀크버블티뽀기🧋",
    species: "뜨개뽀기",
    s: "뽀",
    d: "뽀",
    a: "뽀 / 엠제이",
    description: "1차 아티스트 콜라보 (콜라보 아티스트 : 엠제이 님)\n그림+뜨개 한번에 분양하며 따로는 불가합니다!",
    price: "40,000원",
    status: "available",
    images: [
      { type: "뜨개", src: "./images/5361-knit.jpg" },
      { type: "아트", src: "./images/5361-art.jpg" }
    ],
    link: "https://thespecieslab.com/pages/character.html?id=5361"
  },
  {
    id: 9,
    name: "타로버블티뽀기🧋",
    species: "뜨개뽀기",
    s: "뽀",
    d: "뽀",
    a: "뽀 / 엠제이",
    description: "1차 아티스트 콜라보 (콜라보 아티스트 : 엠제이 님)\n그림+뜨개 한번에 분양하며 따로는 불가합니다!",
    price: "40,000원",
    status: "available",
    images: [
      { type: "뜨개", src: "./images/5362-knit.jpg" },
      { type: "아트", src: "./images/5362-art.jpg" }
    ],
    link: "https://thespecieslab.com/pages/character.html?id=5362"
  },
  {
    id: 1,
    name: "NBR-018 꿈재단사",
    species: "누비루",
    s: "뽀",
    d: "모로",
    a: "모로",
    description: "모로님과의 아티스트 콜라보 개체입니다!",
    price: "20,000원",
    status: "available",
    image: "./images/nbr-018.jpg",
    link: "https://thespecieslab.com/pages/character.html?id=974"
  },
  {
    id: 2,
    name: "NBR-030 마법소녀",
    species: "누비루",
    s: "뽀",
    d: "뽀",
    a: "뽀",
    description: "",
    price: "7,000원",
    status: "sold",
    image: "./images/nbr-030.jpg",
    link: "https://thespecieslab.com/pages/character.html?id=5542"
  },
  {
    id: 3,
    name: "NBR-031 용용이",
    species: "누비루",
    s: "뽀",
    d: "뽀",
    a: "뽀",
    description: "러프상태입니다! 문의 주시면 완성해서 보내드립니다!",
    price: ["6,000원", "종족연구소 300 연구기록"],
    status: "available",
    image: "./images/nbr-031.jpg",
    link: "https://thespecieslab.com/pages/character.html?id=6026"
  },
  {
    id: 4,
    name: "NBR-032 짹짹",
    species: "누비루",
    s: "뽀",
    d: "뽀",
    a: "뽀",
    description: "러프상태입니다! 문의 주시면 완성해서 보내드립니다!",
    price: ["6,000원", "종족연구소 300 연구기록"],
    status: "available",
    image: "./images/nbr-032.jpg",
    link: "https://thespecieslab.com/pages/character.html?id=6027"
  },
  {
    id: 5,
    name: "NBR-033 녹은 생크림",
    species: "누비루",
    s: "뽀",
    d: "뽀",
    a: "뽀",
    description: "러프상태입니다! 문의 주시면 완성해서 보내드립니다!",
    price: ["6,000원", "종족연구소 300 연구기록"],
    status: "available",
    image: "./images/nbr-033.jpg",
    link: "https://thespecieslab.com/pages/character.html?id=6028"
  },
  {
    id: 6,
    name: "NBR-035 녹은 독극물",
    species: "누비루",
    s: "뽀",
    d: "뽀",
    a: "뽀",
    description: "러프상태입니다! 문의 주시면 완성해서 보내드립니다!",
    price: ["6,000원", "종족연구소 300 연구기록"],
    status: "available",
    image: "./images/nbr-035.jpg",
    link: "https://thespecieslab.com/pages/character.html?id=6030"
  },
  {
    id: 10,
    name: "NBR-020",
    species: "누비루",
    s: "뽀",
    d: "킴컁",
    a: "킴컁",
    description: "킴컁님과의 아티스트 콜라보 개체입니다!",
    price: "20,000원",
    status: "available",
    image: "./images/nbr-020.jpg",
    link: "https://thespecieslab.com/pages/character.html?id=2014"
  }
];
