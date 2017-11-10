/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function clearTextField(textField) {
    if(document.getElementById("titleTextField").value === "Search titles...") {
        textField.value = '';
        document.getElementById("titleTextField").style.color = "Black";
    }
}

window.addEventListener('click', function(e){   
  if (!document.getElementById('titleTextField').contains(e.target)){
        // Clicked in box
        // Clicked outside the box
        if(document.getElementById("titleTextField").value === "") {
            document.getElementById("titleTextField").value = 'Search titles...';
            document.getElementById("titleTextField").style.color = "grey";
        }
  }
});