"use strict";
// export class Item {
//   constructor(private name:string, private price:number) {}
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
//   public say(elem: HTMLElement | null) : void {
//     if (elem) {
//       elem.innerHTML = '書名：' + this.name +   '価格' + this.price + '円'
//     }
//   }
// }
var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    Item.prototype.say = function (elem) {
        if (elem) { // 引数がnullでない場合
            elem.innerHTML = '書名：' + this.name + '  価格: ' + this.price + '円';
        }
    };
    return Item;
}());
exports.Item = Item;
