let memory = [0,0,0,0,0,0,0,0]; // 8 memory blocks

function showMemory(){
    document.getElementById("memory").innerHTML = 
    "Memory Blocks: " + memory.join(" | ");
}

function allocate(){
    for(let i=0;i<memory.length;i++){
        if(memory[i] === 0){
            memory[i] = 1; // allocate block
            showMemory();
            return;
        }
    }
    alert("Memory Full!");
}

function deallocate(){
    for(let i=memory.length-1;i>=0;i--){
        if(memory[i] === 1){
            memory[i] = 0; // free block
            showMemory();
            return;
        }
    }
    alert("No Memory Allocated!");
}

showMemory();
