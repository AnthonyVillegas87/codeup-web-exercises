"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 1.
let languagesArray = users.filter((user) => user.languages.length >= 3);

// 2.
let eMail = users.map(user => user.email);

// 3.
let totalYears = users.reduce((total,current) => {
return total + current.yearsOfExperience
}, 0) / users.length

// 4.
let longestEmail = users.reduce((total, current) => {
    return total.email.length > current.email.length ? total : current
}).email;

// 5.
let list = users.reduce((prev,curr) =>  prev.concat(curr.name) + ',' ,'Your instructors are: ');

// BONUS // 6.
