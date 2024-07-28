document.addEventListener('DOMContentLoaded', () => {

    const medalRankings = [
        { country: 'Australia', gold: 6, silver: 2, bronze: 1 },
        { country: 'South Korea', gold: 5, silver: 3, bronze: 2 },
        { country: 'China', gold: 4, silver: 3, bronze: 2 },
        { country: 'Japan', gold: 3, silver: 2, bronze: 4 },
        { country: 'United States', gold: 0, silver: 13, bronze: 1 },
        { country: 'Kazakhstan', gold: 2, silver: 1, bronze: 0 },
        { country: 'Belgium', gold: 1, silver: 3, bronze: 3 },
        { country: 'Germany', gold: 0, silver: 2, bronze: 1 },
        { country: 'Uzbekistan', gold: 1, silver: 0, bronze: 0 },
    ];


    const sports = [
        { name: 'Basketball', schedule: `Preliminary Round
Quarterfinals
Semifinals
Finals
Today·Group C
Q4
	
Serbia
76
	
United States
91
 
Today·Group C
Completed
	
South Sudan
90	
	
Puerto Rico
79	
 
Yesterday·Group A
Completed
	
Canada
86	
	
Greece
79	
 
Yesterday·Group B
Completed
	
France
78	
	
Brazil
66	
 ` },
        { name: 'Fencing', schedule: `Full schedule
Women's Individual Foil
Multiple rounds
Next: Today, 1:00 PM
Men's Individual Épée
Multiple rounds
Next: Today, 2:00 PM
Women's Individual Foil

Finals
Today, 2:50 PM
Men's Individual Épée

Finals
Today, 3:20 PM` },
        { name: 'Cycling', schedule: `Featured events
Road cycling

Final
Men's Road Race
Aug 3, 5:00 AM

Full schedule
Men's Road Race

Final
Sat, Aug 3, 5:00 AM` },
        { name: 'Long Jumping', schedule: `Qualification
Final
Sun, Aug 4·Group A
5:00 AM
Participants will be available before the event begins
Sun, Aug 4·Group B
5:00 AM
Participants will be available before the event begins` },
        {
            name: 'Smimming', schedule: `Full schedule
Men's 400m Individual Medley

Final
Today, 2:30 PM
Women's 100m Butterfly

Final
Today, 2:40 PM
Men's 200m Freestyle
Multiple rounds
Next: Today, 2:46 PM
Women's 100m Breaststroke
Multiple rounds
Next: Today, 3:10 PM
Men's 100m Backstroke
Multiple rounds
Next: Today, 3:32 PM` },
    ];

    const newsUpdates = [
        { headline: 'Gymnastics: Shaking off sore calf, Simone Biles dazzles in Olympic return', image: "Images/1.webp" },
        { headline: 'Simone Biles hurts her leg in Olympic gymnastics qualifying but finishes 1st', image: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6576x4384+0+0/resize/800/quality/85/format/webp/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F69%2F90%2F9138522a45f3a60bf8620f5c7df2%2Fgettyimages-2163487744.jpg" },
        { headline: 'Olympics live updates: U.S. men’s basketball leads Serbia 58-49 at halftime', image: "https://dims.apnews.com/dims4/default/1321104/2147483647/strip/true/crop/8640x5760+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2F12%2F373b33944e669e0b72df13e94519%2Fap24210572630157.jpg" },
        { headline: 'EN GARDE! USA Fencing brings the Olympic sport to NYC with free demos', image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1qJZt9.img?w=768&h=489&m=6" },
        { headline: '2024 Olympics: Which states have the most U.S. Olympians? Where does New York rank?', image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1qJZt9.img?w=768&h=489&m=6" },
    ];

    const rankingsList = document.getElementById('rankings');
    medalRankings.forEach(rank => {
        const listItem = document.createElement('li');
        listItem.textContent = `${rank.country} - Gold: ${rank.gold}, Silver: ${rank.silver}, Bronze: ${rank.bronze}`;
        rankingsList.appendChild(listItem);
    });

    const sportsList = document.getElementById('sports-list');
    sports.forEach(sport => {
        const listItem = document.createElement('li');
        listItem.textContent = sport.name;
        listItem.addEventListener('click', () => {
            alert(sport.schedule);
        });
        sportsList.appendChild(listItem);
    });

    const newsList = document.getElementById('news-updates');
    newsUpdates.forEach(news => {
        const imgItem = document.createElement('img');
        imgItem.setAttribute("url", news.image);
        const listItem = document.createElement('li');
        listItem.textContent = news.headline;
        listItem.appendChild(imgItem);
        newsList.appendChild(listItem);
    });
});
