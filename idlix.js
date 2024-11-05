async function idlix(query) {
  const { data } = await require("axios").get(
    "https://tv2.idlixplus.net/wp-json/dooplay/search/?keyword=" +
      query +
      "&nonce=f83beb327e"
  );
  const res = Object.keys(data);
  const result = res.map((i) => {
    return {
      title: data[i].title,
      rating_imdb: data[i].extra.imdb,
      release: data[i].extra.date,
      url: data[i].url,
      thumbnail: data[i].img,
    };
  });
  return result;
}
// idlix("Marvel");
