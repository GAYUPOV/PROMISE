const url = "https://cc-zico.github.io/json/data.json";
const cards = document.querySelector(".cards");
fetch(url)
    .then(response => {
        if (response.ok) return response.json()
    })
    .then(data => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (i < 8) {
                // console.log(data[i]);
                let div = document.createElement("div");
                div.classList.add("card");
                div.innerHTML = `
                <a href="${data[i].url}">
                <img src="${data[i].url}"></a>
                <h3 class="title">${data[i].title} ${data[i].id}</h3>
                `
                setTimeout(() => {
                    cards.append(div);
                }, 2000);
            }
        }
    })
    .catch(e => {
        console.error(e);
    })
    .finally(() => {})