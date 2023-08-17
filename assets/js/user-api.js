const posts = document.querySelector(".posts");
const rightSide = document.querySelector(".rightSide");
const modal = document.querySelector(".modal");


// const userName = document.querySelector(".userName");
// const mailInfo = document.querySelector(".mailInfo");
// const phoneInfo = document.querySelector(".phoneInfo");
// const userComment = document.querySelector(".comments");



fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
            posts.innerHTML += `<div class="post">
                <div class="title">
                    ${element.title}
                </div>
                <div class="userId">
                    ${element.userId}
                </div>
                <button id="${element.userId}" class="btn">
                    Detay Göster
                </button>
            </div>`
        });
        bindClick();
      })

    

function getDetails(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(result => showModal(result))

    //   {
    //     console.log(json);
    //     modal.innerHTML += `
    //     <h3>${json.name}</h3>
    //     <p>${json.email}</p>
    //     <p>${json.phone}</p>`
    // }

    // fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    // .then(response => response.json())
    // .then(json => {
    //     k
    // })

}

function bindClick() {
    for (const btn of document.querySelectorAll(".btn")) {
        btn.addEventListener("click", (e) => {
            getDetails(e.target.id)
            modal.style.display = "block";
        })
    }
}

window.addEventListener("click", (e) =>{
    if(e.target === modal){
        // debugger;
        modal.style.display = "none"
    }
})

function showModal(result) {
    modal.innerHTML = ''
    modal.innerHTML += `
    <p class="name">Name: ${result.name}</p>
    <p class="email">Email: ${result.email}</p>
    <p class="phone">Phone: ${result.phone}</p>
    `

}

// posts.addEventListener("click", getDetails)


// function getDetails(e) {
//     if(e.target.className === "btn") {
//         let getId = e.target.parentElement.children[1].textContent.trim()
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => {
//             createUser = json.find(x => x.id === getId)
//         })
//         fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(response => response.json())
//         .then(json => {
//             // debugger;
//             createBtn = json.find(x => x.id === getId)
//             detail(createUser.name, createUser.email, createUser.phone, createBtn.body)
//         })
//     }
//     const detail = (name, email, phone, body) => {
//         rightSide.innerHTML = `<div class="userBox">
//             <div class="userName">Name: ${name}</div>
//             <div class="userDetail">
//                 <div class="mailInfo">E-Mail: ${email}</div>
//                 <div class="phoneInfo">Phone Number: ${phone}</div>
//                 <div class="comments">
//                     User Comments
//                     ${body}
//                 </div>
//             </div>
//         </div>`
//     }
// }
