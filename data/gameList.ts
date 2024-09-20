import { Platform } from "../enums/platform";

let gameList: Game[] = [
    {
        id: 1,
        name: "EA Sports FC 24",
        desciption: "Football game",
        platforms: [Platform.Playstation5, Platform.XboxSeries, Platform.PC],
        releaseDate: new Date(2023, 9, 20),
        screenshotUrl: "https://www.dsogaming.com/wp-content/uploads/2022/10/Fifa-23-Screenshot-2022.10.09-20.42.23.28-768x432.jpg"
    },
    {
        id: 2,
        name: "Cyberpunk 2077",
        desciption: "RPG game in major city",
        platforms: [Platform.Playstation5, Platform.XboxSeries, Platform.PC, Platform.Playstation4, Platform.XboxOne],
        releaseDate: new Date(2020, 10, 9),
        screenshotUrl: "https://cdn.wccftech.com/wp-content/uploads/2020/06/Cyberpunk-2077-Jun-25th-Screenshots-9.jpg"
    },
    {
        id: 3,
        name: "The Witcher 3 Wild Hunt",
        desciption: "Fantasy RPG game where you kill monsters",
        platforms: [Platform.Playstation5, Platform.XboxSeries, Platform.PC, Platform.Playstation4, Platform.XboxOne],
        releaseDate: new Date(2015, 11, 25),
        screenshotUrl: "https://cdn.wccftech.com/wp-content/uploads/2015/05/Witcher-3-2-1030x579.jpg"
    },
    {
        id: 4,
        name: "Forza Motorsport",
        desciption: "Racing simulation game",
        platforms: [Platform.XboxSeries, Platform.PC],
        releaseDate: new Date(2023, 12, 7),
        screenshotUrl: "https://global.discourse-cdn.com/forza/original/4X/a/0/c/a0c98fc105972c9adf837dca3a03dcccb04ef6e2.jpeg"
    },
    {
        id: 5,
        name: "Astro Bot",
        desciption: "Platformer game with a cute protagonist",
        platforms: [Platform.Playstation5],
        releaseDate: new Date(2023, 9, 25),
        screenshotUrl: "https://platform.polygon.com/wp-content/uploads/sites/2/2024/09/ASTRO-BOT_20240901200249-1.jpg"
    },
    {
        id: 6,
        name: "Grand Theft Auto 4",
        desciption: "Action adventure game taking place in the fictional Liberty City",
        platforms: [Platform.Playstation3, Platform.PC, Platform.Xbox360],
        releaseDate: new Date(2008, 10, 10),
        screenshotUrl: "https://cdn.mos.cms.futurecdn.net/KbArf7BEepcAwXpot5Mgug-320-80.jpg"
    },
    {
        id: 7,
        name: "Need For Speed Underground 2",
        desciption: "Open world racing game with a big emhpasis on car modification",
        platforms: [Platform.Playstation2, Platform.Xbox, Platform.PC],
        releaseDate: new Date(2002, 8, 25),
        screenshotUrl: "https://preview.redd.it/81vwjq0bxpa91.png"
    },
    {
        id: 8,
        name: "007 Nightfire",
        desciption: "Game following a famous spy undertaking dangerous missions",
        platforms: [Platform.Playstation5],
        releaseDate: new Date(2000, 15, 6),
        screenshotUrl: "https://infinitemirai.wordpress.com/wp-content/uploads/2016/11/go7e69-10.png"
    },
    {
        id: 9,
        name: "Mirrors Edge",
        desciption: "First person action adventure game taking place in a futuristic city where life is comfortable and crime is almost non-existent. Or is it?",
        platforms: [Platform.Playstation3, Platform.Xbox360],
        releaseDate: new Date(2008, 12, 16),
        screenshotUrl: "https://preview.redd.it/nrq3zq6xlfx71.png"
    },
    {
        id: 10,
        name: "The Last of Us",
        desciption: "Action adventure game taking place in a post apocalyptic world following the story of its two main characters",
        platforms: [Platform.Playstation3, Platform.Playstation4, Platform.Playstation5],
        releaseDate: new Date(2013, 20, 6),
        screenshotUrl: "https://assetsio.gnwcdn.com/137528048362.jpg"
    }
];

export function GetGames(): Game[] {
    return gameList;
}