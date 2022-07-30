$(document).ready(function () {
  $.get(
    "http://api.mediastack.com/v1/news?access_key=a471fdfb44902203a235d628e0a4555b&languages=en&countries=in",
    function (response, status) {
      for (let i = 0; i < response.data.length; i++) {
        let article = response.data[i];
        console.log(article.title);

        let cardImgElement = "";
        if (article.image) {
          cardImgElement =
            "<img class='card-img-top' src='" + article.image + "' />";
        }
        else
        {
          cardImgElement =
          "<img class='card-img-top' src='/image/news5.jfif'/>";
        }
        let articleElement =
          "<div class='card' style='width: 18rem;margin:2px;background-color:azure'> " +
          cardImgElement +
          "<div class='card-body'>" +
          "<h5 class='card-title'>" +
          "<a style='color: black'  target='_blank' href='" +
          article.url +
          "'>" +
          article.title +
          "</a>" +
          "</h5>" +
          "</div></div>";
        $("#newsContent").append(articleElement);
      }
    }
  );
});
