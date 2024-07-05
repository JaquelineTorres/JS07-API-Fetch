const url = "https://reqres.in/api/users?delay=3";

const getPerson = async (url) => {

    try {
        const response = await fetch(url);
        const dataJson = await response.json();
        console.log(dataJson.data);

        const listPeople = dataJson.data.map( x => {

            return `

            <div class="card" style="width: 18rem;">
                <img src="${x.avatar}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="firstName">${x.first_name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `;

        });

        document.querySelector(".list-container").innerHTML = listPeople.join('');

        

    } catch (exception) {
        console.error("Error", exception);

    }

};

console.log(getPerson(url));
getPerson(url);