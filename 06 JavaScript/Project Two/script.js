const btnAll = document.querySelectorAll("button");
const container = document.querySelector(".container");

btnAll.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.id === "red") {
      container.style.backgroundColor = "red";
    }

    if (item.id === "blue") {
      container.style.backgroundColor = "blue";
    }

    if (item.id === "yellow") {
      container.style.backgroundColor = "yellow";
    }

    if (item.id === "green") {
      container.style.backgroundColor = "green";
    }

    if (item.id === "pink") {
      container.style.backgroundColor = "pink";
    }
  });
});
