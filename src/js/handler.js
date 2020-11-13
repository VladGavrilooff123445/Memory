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
              <div class="pictures">
                <img class="" data-id="${data[j].id}" src="${data[j].img} ">
              </div>
              <div class="pictures2">
                <img class="" src="data:image/jpeg;base64,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">
              </div>
            </div>`;
    }
    return result;
}

mainEl.innerHTML = getTemplate(cards);

mainEl.onclick = (event) => {
    let memoryCard = event.target;
    // debugger;
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

