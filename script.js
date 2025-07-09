const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGUyNDMwODgyODIzNDMxZTVmNDE1MjI5YzU2MTk0ZiIsIm5iZiI6MTc1MjAxODc2OC44NTYsInN1YiI6IjY4NmRhZjUwNTExZDU4OWU0ZTcwM2E2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aPa5ZXLQx5kRK59OM3x09ILB6_YQOAEpCcAVRSBUuN4'
    }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(erro));


    