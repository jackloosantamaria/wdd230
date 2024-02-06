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
        

        
        
        
        
        // let currentTime = document.getElementById("#time");
        // setInterval(() => {
            //     let list = new Date().getTime();
            //     currentTime = new Date('#time').toLocaleTimeString()
            // });
            
            let newTime = new Date();
            
            //document.querySelector('#time').textContent = newTime;
            
            const choice = {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            };
            
            //document.querySelector("#time").innerHTML = new Date().toLocaleDateString("en-US", choice);
            li.append(newTime.toLocaleString());
            //input.focus();
            
            //remove the li elements
            deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        document.querySelector("input").focus();
        input.value = " ";
      
    }
});