/* ---------------------------------------- FRAMEWORK ---------------------------------- */
var WrapperElement = function (element) {
    // a wrapper element allow us to extend html dom functionality
    // without changing the behaviour of built-in elements

    // this contains the actual selection
    this.element = element;

    // this allows us to see if a selection contains one or more elements
    if (element.length > 1) {
        this.isArray = true;
    } else {
        this.isArray = false;
    }
};

WrapperElement.prototype.toggleClass = function (className) {
    //Loop if multiple otherwhise just make toggable
    if (this.isArray) {
        for (var i = 0; i < this.element.length; i++) {
            this.element[i].classList.toggle(className);
        }
    } else {
        this.element.classList.toggle(className);
    }
    return this;
};

WrapperElement.prototype.addClass = function (className) {
    if(this.isArray) {
        //Loop if multiple otherwhise just add class
        for (var i = 0; i < this.element.length; i++) {
            this.element[i].className += '' + className;
        }
    } else {
        this.element.className = className;
    }
    // return Orignal wrapper to use in other functions like addclass or toggleclass and $
    return this;
};

WrapperElement.prototype.prepend = function (itemTodo) {
    this.element.insertBefore(itemTodo, this.element.firstChild);
};

WrapperElement.prototype.keyup = function (action){
    if(this.isArray) {
        // multiple elements, we'll need to loop
        for(var i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener('keyup', action);
        }
    } else {
        // just one element, let's go nuts
        this.element[0].addEventListener('keyup', action);
    }
    return this;
WrapperElement.prototype.keyup = function (action) {
	if (this.isArray) {
		for (var i = 0 ; i<this.element.length ; i++) {
			this.element[i].addEventListener('keyup' , action);
		}
	} else {
		this.element.addEventListener('keyup' , action);
	}
	return this;
};

WrapperElement.prototype.click = function (action){
    if (this.isArray) {
        for ( var i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener('click', action);
WrapperElement.prototype.click = function (action) {
    if ( this.isArray) {
        for (var i = 0 ; i<this.element.length ; i++) {
            this.element[i].addEventListener("click" , action);
        }
    } else {
        this.element.addEventListener('click', action);
    }
    //returning original wrapper element to us it in other functions
        this.element.addEventListener("click" , action);
    }	
};

WrapperElement.prototype.val = function (value) {
    var current = this.element.value;
    document.getElementById("add-item-text").value = "";
    return current;
};

var $ = function (selector) {
	// check if selector is an object already e.g. by passing 'this' on clicks
	if (typeof(selector) == "object") {
		return new WrapperElement(selector);
	}
	// get the first character to know if we want an element, id or class
	var firstCharacter = selector.charAt(0);
	var selectedItems;
	switch (firstCharacter) {
		case '#':
		var elementid =	selector.substr(1);
		selectedItems = document.getElementById(elementid);
		break;

		case '.':
        var elementclas =	selector.substr(1);
		return new WrapperElement(document.getElementsByClassName(selector));
        break;
		
		default:
		selectedItems = document.getElementsByTagName(selector);
        break;
	}
	var newElement = new WrapperElement(selectedItems);
	return newElement;
};