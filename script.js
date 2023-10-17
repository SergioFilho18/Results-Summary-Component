fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        const CatReac = document.querySelector(".rightside-into");

        const Sum = document.createElement("div");
        Sum.innerHTML += '<h1>Summary</h1>';
        Sum.classList.add("summ");
        CatReac.appendChild(Sum);

        data.dados.map((dados, index) => {
            const divM = document.createElement("div");
            divM.classList.add(`reac-${index + 1}`);

            const divI = document.createElement("div");
            divI.classList.add(`reacInto-${index + 1}`);

            const icon = document.createElement("div");
            icon.classList.add("icon");

            const img = document.createElement("img");
            img.src = dados.icon;

            const text = document.createElement("p");
            text.innerHTML = dados.category;

            const score = document.createElement("div");
            score.innerHTML += dados.score;
            score.classList.add('scoremin');

            const cem = document.createElement("div");
            cem.innerHTML = '/100';
            cem.classList.add('cem');



            icon.appendChild(img);
            divI.appendChild(icon);
            divI.appendChild(text);
            divM.appendChild(divI);
            divM.appendChild(score);
            divM.appendChild(cem);
            CatReac.appendChild(divM);
        });

        const But = document.createElement("button");
        But.innerHTML = "Continue";
        CatReac.appendChild(But);
    });
