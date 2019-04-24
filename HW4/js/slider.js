'use strict';

class Slider {
    constructor() {
        this._elements = document.querySelectorAll('.slider li');
        this._min      = 0;
        this._max      = this._elements.length - 1;
        this._current  = this._min;
    }

    forward() {
        this._current = (this._current == this._max) ? 
            this._min : this._current + 1;
        this._setVisible(this._current);
    }

    backward() {
        this._current = (this._min == this._current) ? 
            this._max : this._current - 1;
        this._setVisible(this._current);
    }

    _setVisible(idx) {
        for (let i = 0; i < this._elements.length; i++) {
            this._elements[i].className = (i == idx) ? "active" : "";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.mySlider = new Slider();
}, false);