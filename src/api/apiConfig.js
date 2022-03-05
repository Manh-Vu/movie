const apiConfig = {
    baseUrl: 'http://api.themoviedb.org/3/',
    apiKey: 'cc001b28933015995f0ca76e012a9c83',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default apiConfig;