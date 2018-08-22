var files=[];

var input=document.getElementById('file');
input.style.opacity = 0;
input.onchange= function (event) {
    for (let i = 0; i < input.files.length; i++) {
        const element = input.files[i];
        files.push(element);       
    }
}

function dropHandler(ev) {
    console.log('File(s) dropped');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          files.push(file);
          alert('... file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        alert('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    } 
    
    // Pass event to removeDragData for cleanup
    removeDragData(ev)
  }

  function dragOverHandler(ev){
      ev.preventDefault();
  }

  function selectData() {
      alert("Select Data!!");
    }

    function removeDragData(ev) {
        console.log('Removing drag data')
      
        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to remove the drag data
          ev.dataTransfer.items.clear();
        } else {
          // Use DataTransfer interface to remove the drag data
          ev.dataTransfer.clearData();
        }
      }