const items = [
  {
    title: "Isfahan",
    description:
      "Isfahan is a city in central Iran, known for its Persian architecture.",
    img: "images/isfahan.jpg",
  },
  {
    title: "Kermanshah",
    description:
      "Kermanshah is a city in western Iran, known for its Kurdish culture.",
    img: "images/kermanshah.jpg",
  },
  {
    title: "Tehran",
    description:
      "Tehran is the capital of Iran, known for its modern architecture.",
    img: "images/tehran.jpg",
  },
  {
    title: "Shiraz",
    description:
      "Shiraz is a city in southern Iran, known for its Persian architecture.",
    img: "images/shiraz.jpg",
  },
];
$(document).ready(function () {
  $("#noResult").hide();
  $("#clear_btn").attr("disabled", true);

  $("#clear_btn").click(function () {
    $("#search").val("");
    $("#result").empty();
    $("#clear_btn").attr("disabled", true);
  });

  $("#search_btn").click(function () {
    try {
      let search = $("#search").val();
      if (search.length === 0) throw new Error("Search is empty");
      let result = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      if (result.length > 0) {
        $("#noResult").hide();
        $("#result").empty();
        result.forEach((item) => {
          $("#result").append(`
                <div class="col-3 my-1">
                    <div class="card w-100" style="width: 18rem;">
                        <img src="${item.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title
                            ">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                        </div>
                    </div>
                </div>
                `);
        });
        $("#clear_btn").attr("disabled", false);
      } else {
        $("#noResult").show(500);
        $("#result").empty();
        $("#clear_btn").attr("disabled", true);
      }
    } catch (e) {
      alert(e.message);
    }
  });
});
