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
          <div class="card" data-content-pictures="${data[j].id}">
           <div class="card_front"  width="50%" color="aqua">
              <img class="pictures" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/NC_150.svg/900px-NC_150.svg.png" width="50%">
           </div>
            <div class="card_back" width="50%">
              <img class="pictures" src="${data[j].img}" width="50%">
            </div>
          </div>`;
    }
    return result;
}
//debugger;
mainEl.innerHTML = getTemplate(cards);