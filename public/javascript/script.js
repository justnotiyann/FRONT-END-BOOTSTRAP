const bodyCardLooping = document.querySelector("#card_looping");

const dataCard = [
  {
    name: "Javascript",
    title: "Pengenalan Javascript",
    body: "Mari Belajar Javascript",
  },
  {
    name: "Bootstrap",
    title: "Pengenalan Bootstrap",
    body: "Mari Belajar Bootstrap",
  },
  {
    name: "Sass",
    title: "Pengenalan Sass",
    body: "Mari Belajar Sass",
  },
];

const displayData = (a, b, c) => {
  const result = `
      <div class="col-3">
          <div class="card">
              <div class="card title">${a}</div>
              <div class="card body">${b}</div>
              <div class="card footer">${c}</div>
          </div>
      </div>
          `;
  bodyCardLooping.insertAdjacentHTML("afterbegin", result);
};

dataCard.forEach((datas) => {
  displayData(datas.name, datas.title, datas.body);
});
