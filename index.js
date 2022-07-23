const input = document.getElementById("noOfWords");
const container = document.querySelector(".container");

const generateWord = (n)=> {
    const letters = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
    let text = "";

    for(let i=0;i<n;i++) {
        const random = (Math.random()*25).toFixed(0);
        text += letters[random];
    }

    return text;
};

const generatePara = ()=> {
    let noOfWords = Number(input.value);
    let data = '';
    const para = document.createElement("p");

    for(let i=0;i<noOfWords;i++) {
        const random = (Math.random()*10).toFixed(0);
        data += (generateWord(random));
        data += " ";
    }

    para.innerText = data;

    para.setAttribute("class", "paras");

    container.append(para);
};
