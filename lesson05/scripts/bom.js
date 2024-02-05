const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
    if (input.value !== ""){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.appendChild(li);
        

        //remove the li elements
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        document.querySelector("input").focus();
        input.value = " ";

        // let currentTime = document.getElementById("#time");
        // setInterval(() => {
        //     let list = new Date().getTime();
        //     currentTime = new Date('#time').toLocaleTimeString()
        // });

        const newTime = new Date(document.list);
        document.querySelector('#time').textContent = newTime;
        
        const choice = {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        };
        
        document.querySelector("#time").innerHTML = new Date().toLocaleDateString("en-US", choice);
        newTime.append(choice);
    }
});