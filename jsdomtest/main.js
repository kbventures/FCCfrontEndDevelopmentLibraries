let data = {count:0};

const incrementCount = ()=>{
    // console.log(data)
    data.count++;
    window.document.getElementById('count').innerHTML = data.count;
    // console.log(window.document.getElementById('count').innerHTML)
}

const incrementButton = window.document.getElementById("increment-button");
incrementButton.addEventListener("click", incrementCount);


module.exports = { incrementCount, data};