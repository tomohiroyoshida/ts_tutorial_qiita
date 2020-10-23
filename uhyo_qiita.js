"use strict";
var a = undefined;
// エラー: Type 'void' is not assignable to type 'undefined'.
function func(obj) { }
func(3);
var f = func;
func('hoge');
var t1 = ['foo'];
var t2 = ['foo', 4];
var obj = {
    foo: 'hello',
    bar: 0,
    baz: false,
};
function useHogePiyo(obj) {
    // ここではobjはHoge | Piyo型
    if ('bar' in obj) {
        // barプロパティがあるのはHoge型なのでここではobjはHoge型
        console.log('Hoge', obj.bar, obj.bar);
    }
    else {
        // barプロパティがないのでここではobjはPiyo型
        console.log('Piyo', obj.baz);
    }
}
var obj1 = {
    foo: 123,
    bar: 3,
    baz: true,
};
useHogePiyo(obj1);
function func1(value) {
    if ('string' === typeof value) {
        // valueはstring型なのでlengthプロパティを見ることができる
        return value.length;
    }
    else {
        // valueはnumber型
        return value;
    }
}
var arr = [];
// string[] | number[] 型の配列の要素は string | number 型
var elm = arr[0];
