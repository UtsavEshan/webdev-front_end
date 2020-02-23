var movies = [
	{
		title: 'in Brugues',
		haswatched: false,
		rating: 2
	},
	{
		title: 'Frozen',
		haswatched: true,
		rating: 4.5
	}
];

movies.forEach(function(movie) {
	var result = 'you have';
	if (movie.watched) {
		result += 'watched';
	} else {
		result += ' not seen';
	}
	result += '"' + movie.title + '"-';
	result += movie.rating + ' stars';
	console.log(result);
});
