
let AllLis = document.querySelectorAll("#ul li a");


console.log(AllLis);
AllLis.forEach(function (ele) {
  ele.onmouseenter = function () {
    AllLis.forEach(function (ele) {
      ele.classList.remove("lin-bottom");
    });
    this.classList.add("lin-bottom");
  };
});
