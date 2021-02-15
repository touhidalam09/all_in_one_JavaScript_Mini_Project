function add() {

    var input = document.getElementById('input');
    var btn = document.getElementById('btn');
    var lists = {
        todo: document.getElementById('todo'),
        done: document.getElementById('done')
    };

    var makeTaskHtml = function(str, onCheck){
        var el = document.createElement('li');
        var checkbox = document.createElement('input');
        var label = document.createElement('span');

        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', onCheck);
        label.textContent = str;

        el.appendChild(checkbox);
        el.appendChild(label);
        //el.textContent = str;
    
        return el;
    }

    var addtask = function(list, task){
        list.appendChild(task);
    }

    var onCheck = function (event) {
        var task = event.target.parentElement;
        //console.log(task);
        var list =task.parentElement.id;

        lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
        //console.log(list);
        
    }

    addtask(lists.todo, makeTaskHtml(input.value,onCheck));
    addtask(lists.done, makeTaskHtml(input.value, onCheck));
   // todo.appendChild(makeTaskHtml('test task'));
};

