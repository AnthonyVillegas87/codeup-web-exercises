"use strict";

// fetch('  https://api.github.com/users/AnthonyVillegas87/events', {
//     headers: {
//         'Authorization': GITHUB_API_TOKEN
//     }
// }).then(response =>
//     response.json()).then(response => {
//         console.log(response[0])
// })
//         .catch(console.error)


// const gitPromise = fetch(' data/blog.json')
//         gitPromise.then(result => {
//             result.json().then(result => {
//                 solutions(result)
//             })
//         });
$(document).ready(() => {

    const gitPromise = fetch(' data/blog.json')
        gitPromise.then(result => {
            result.json().then(result => {
                solutions(result)
            })
    });

    function solutions(result) {
        return result
    }












})


