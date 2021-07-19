(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');
     console.log(planetsArray);

    // var tags = planetsArray.join('<li>')
    // console.log(tags)


    // console.log(planetsString.split("|"))
    // var planetsArray = planetsString.join("<li>");
    // console.log(planetsArray)



   //planetsString.join('<li>');
    // planetsString.push('<ul>');
    // planetsString.unshift('<ul>');
    // console.log(planetsString)

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsWithBrs = planetsArray.join('<br>');

    var planetsHTML = '<ul><li>' + planetsArray.join('</li><li>')  + '</li></ul>';
    console.log(planetsHTML);





    // var newString = tags.split('<li>')

    // var newTag = newString.join('<li>')
    // newTag.push("<ul>")
    // console.log(newTag.unshift("<ul>"))
    // console.log(newString)




})();

