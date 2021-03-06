let autocomplete = (function () {

    let _inp = null;

    let _arr = []; 
    
    let _currentFocus; 
    
    let _setAutocomplete = function (inp, arr) {
        
        _arr = arr; 
        
        if (_inp === inp) { 
            return; 
        }  
        
        _removeListener(); 
        
        _inp = inp; 
        _inp.addEventListener("input", inputEvent); 
        _inp.addEventListener("keydown", keydownEvent); 
    } 

    let inputEvent = function (e) { 
        var a, b, i, val = this.value; 

        closeAllLists(); 
        
        if (!val) { 
            return false; 
        }  
        
        _currentFocus = -1;  
        
        a = document.createElement("DIV");  
        
        a.setAttribute("id", this.id + "searchHotel-list");   
        
        a.setAttribute("class", "searchHotel-items");  
        
        this.parentNode.appendChild(a);  
        
        for (i = 0; i < _arr.length; i++) {  
            
            if (_arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                
                b = document.createElement("DIV");  
                b.innerHTML = "<strong>" + _arr[i].substr(0, val.length) + "</strong>"; 
                b.innerHTML += _arr[i].substr(val.length); 
                b.innerHTML += "<input type='hidden' value='" + _arr[i] + "'>";   
                
                b.addEventListener("click", function (e) { 
                    _inp.value = this.getElementsByTagName("input")[0].value; 
                    closeAllLists(); 
                });  
                
                a.appendChild(b); 
            } 
        } 
    } 

    let keydownEvent = function (e) {  
        var x = document.getElementById(this.id + "searchHotel-list"); 
        
        if (x) { 
            x = x.getElementsByTagName("div"); 
        } 
        
        if (e.keyCode == 40) { 
            _currentFocus++; 
            addActive(x); 
        } else if (e.keyCode == 38) { 
            _currentFocus--; 
            addActive(x); 
        } else if (e.keyCode == 13) { 
            e.preventDefault();  
            if (_currentFocus > -1) {  
                if (x) x[_currentFocus].click(); 
            } 
        } 
    } 

    let addActive = function (x) { 
        if (!x) return false;
        removeActive(x); 
        if (_currentFocus >= x.length) _currentFocus = 0; 
        if (_currentFocus < 0) _currentFocus = (x.length - 1); 
        x[_currentFocus].classList.add("searchHotel-active"); 
    } 

    let removeActive = function (x) { 
        for (var i = 0; i < x.length; i++) { 
            x[i].classList.remove("searchHotel-active"); 
        } 
    } 

    let closeAllLists = function (elmnt) { 
        var x = document.getElementsByClassName("searchHotel-items"); 
        for (var i = 0; i < x.length; i++) { 
            if (elmnt != x[i] && elmnt != _inp) { 
                x[i].parentNode.removeChild(x[i]); 
            } 
        } 
    } 

    let _removeListener = function () { 
        if (_inp !== null) { 
            console.log(_inp) 
            _inp.removeEventListener("input", inputEvent, false); 
            _inp.removeEventListener("keydown", keydownEvent, false); 
        } 
    } 
    return { 
        
        setAutocomplete: function (inp, arr) { 
            _setAutocomplete(inp, arr); 
        }, 
    }

})();