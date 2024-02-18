const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function(){
    if (input.value !== ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
                
        
        // let currentTime = document.getElementById("#time");
        // setInterval(() => {
            //     let list = new Date().getTime();
            //     currentTime = new Date('#time').toLocaleTimeString()
            // });
            
        //     let newTime = new Date();
            
        //     //document.querySelector('#time').textContent = newTime;
            
        //     const choice = {
        //         year: "numeric",
        //         month: "long",
        //         day: "numeric",
        //         weekday: "long",
        //         hour: "numeric",
        //         minute: "numeric",
        //         second: "numeric"
        //     };
            
        //     //document.querySelector("#time").innerHTML = new Date().toLocaleDateString("en-US", choice);
        //     li.append(newTime.toLocaleString());
        //     //input.focus();
            
        //     //remove the li elements
        //     deleteButton.addEventListener('click', function() {
        //     list.removeChild(li);
        //     input.focus();
        // });

        // document.querySelector("input").focus();
        // input.value = " ";
      
    }
});

function displayList(item){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener("click", function (){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

