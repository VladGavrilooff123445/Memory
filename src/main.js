const cards = [
    {
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 1,
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 2
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 3
    },
    {
        name: "jquery",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
        id: 4
    },
    {
        name: "javascript",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
        id: 5
    },
    {
        name: "node",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
        id: 6
    },
    {
        name: "photoshop",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
        id: 7
    },
    {
        name: "python",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
        id: 8
    },
    {
        name: "rails",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
        id: 9
    },
    {
        name: "sass",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
        id: 10
    },
    {
        name: "sublime",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
        id: 11
    },
    {
        name: "wordpress",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
        id: 12
    },
];

const mainEl = document.querySelector('[data-content-custom="container"]');

function getTemplate(arr){
    let result = '';
    let data = [];
    for(let i=0; i<arr.length; i++){
        data.push(arr[i]);
        data.push(arr[i]);
    }
    data.sort(() => Math.random() - 0.5);
    for(let j=0; j<data.length; j++){
        result += `
            <div class="memory_card">
              <img class="pictures" data-id="${data[j].id}" src="${data[j].img} ">
            </div>`;
    }
    return result;
}

mainEl.innerHTML = getTemplate(cards);

mainEl.onclick = (event) => {
    let memoryCard = event.target;
    while (!memoryCard.getAttribute('class').includes('memory_card')){
        memoryCard = memoryCard.parentElement;
    }

    if (memoryCard.classList.contains('first')){
        memoryCard.classList.remove("first");
    } else {
        memoryCard.classList.add("first");
    }

    console.log(memoryCard)
    // console.log(event.target.getAttribute('data-id'))
}

