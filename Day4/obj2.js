//
// You have watched "Avengers" - 4.9 stars
// You have not seen "Avengers-Infinity-War" - 4.7 stars
// You have watched "Avengers-Endgame" - 5 stars
//

var movies = [
    {
        title: "Avengers",
        watched: true,
        rating: 4.9
    },
    {
        title: "Avengers-Infinity-War",
        watched: false,
        rating: 4.7
    },
    {
        title: "Avengers-Endgame",
        watched: true,
        rating: 5
    }
];

console.log(movies);

movies.forEach(function(movie){
    var result = "You have ";
    if(movie.watched){
        result += "watched ";
    } else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
})

function buildStr(movie){
    var result = "You have ";
    if(movie.watched){
        result += "watched ";
    } else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie){
    console.log(buildStr(movie));
});