'use strict';

class Slider {
    constructor(className) {
        this._elements = document.querySelectorAll('.' + className + ' li');
        this._min      = 0;
        this._max      = this._elements.length - 1 || 0;
        this._current  = this._min;
    }

    forward() {
        if(this._current == this._max) 
            this._current = this._min;
        else 
            this._current++;

        this._setVisible(this._current);
    }

    backward() {
        if(this._min == this._current) 
            this._current = this._max;
        else 
            this._current--;

        this._setVisible(this._current);
    }

    _setVisible(idx) {
        for (let i = 0; i < this._elements.length; i++) {
            this._elements[i].className = (i == idx) ? "active" : "";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.mySlider = new Slider('slider');
}, false);