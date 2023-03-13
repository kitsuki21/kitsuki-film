const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "06a3cce60087a09312c6bd1f7609abf2",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
