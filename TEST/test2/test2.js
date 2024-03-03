function Apple(type) {
    this.type = type;
    this.color = "red";
}
Apple.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};


console.log(Apple.prototype.getInfo);