const url = "https://reqres.in/api/users?delay=3";

const getPerson = async (url) => {
    const loader = document.getElementById('loader');
    try {
        loader.style.display = 'flex'; // Show loader
        const response = await fetch(url);
        const dataJson = await response.json();

        const listPeople = dataJson.data.map(x => {
            return `
                <div class="col-lg-3 col-md-4 col-sm-5">
                    <div class="card m-2 rounded shadow-sm">
                        <div class="card-body"><strong>${x.first_name} ${x.last_name}</strong></div>
                        <img src="${x.avatar}" class="card-img-top" alt="${x.first_name}">
                        <div class="card-body">${x.id}</div>
                        <div class="card-body">${x.email}</div>
                    </div>                
                </div>
            `;
        });

        document.querySelector("#list-container").innerHTML = listPeople.join("");

    } catch (exception) {
        console.error("Error", exception);

    } finally {
        loader.style.display = 'none'; // Hide loader
    }
};

console.log(getPerson(url));
getPerson(url);
