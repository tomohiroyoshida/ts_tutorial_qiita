const a: void = undefined
// エラー: Type 'void' is not assignable to type 'undefined'.

function func<T>(obj: T): void {}

func<number>(3)
const f: <T>(obj: T) => void = func

func('hoge')

type T = [string, number?]

const t1: T = ['foo']
const t2: T = ['foo', 4]

interface Hoge {
  foo: string
  bar: number
}
interface Piyo {
  foo: number
  baz: boolean
}

type HogePiyo = Hoge | Piyo

const obj: HogePiyo = {
  foo: 'hello',
  bar: 0,
  baz: false,
}

function useHogePiyo(obj: Hoge | Piyo): void {
  // ここではobjはHoge | Piyo型
  if ('bar' in obj) {
    // barプロパティがあるのはHoge型なのでここではobjはHoge型
    console.log('Hoge', obj.bar, obj.bar)
  } else {
    // barプロパティがないのでここではobjはPiyo型
    console.log('Piyo', obj.baz)
  }
}
const obj1: Hoge | Piyo = {
  foo: 123,
  bar: 3,
  baz: true,
}

useHogePiyo(obj1)

function func1(value: string | number): number {
  if ('string' === typeof value) {
    // valueはstring型なのでlengthプロパティを見ることができる
    return value.length
  } else {
    // valueはnumber型
    return value
  }
}

const arr: string[] | number[] = []

// string[] | number[] 型の配列の要素は string | number 型
const elm = arr[0]

type StrFunc = (arg: string) => string
type NumFunc = (arg: number) => string

declare const dog: StrFunc | NumFunc
// エラー: Argument of type '123' is not assignable to parameter of type 'string & number'.
//        Type '123' is not assignable to type 'string'.
// dog(123)

const value = rand()

const str = value as number
console.log(str * 10)

function rand(): string | number {
  if (Math.random() < 0.5) {
    return 'hello'
  } else {
    return 123
  }
}
const foo: string = 'foo'

const arr1: readonly number[] = [1, 2, 3]
// readonly配列型にはpushなどの書き換えメソッドは存在しない
// エラー: Property 'push' does not exist on type 'readonly number[]'
// arr1.replace() <-  error
// obj は { foo: string; bar: number[] } 型
const obj = {
  foo: '123',
  bar: [1, 2, 3],
}

/*
obj2 は
{
   readonly foo: "123";
   readonly bar: readonly [1, 2, 3];
}
型
*/
const obj2 = {
  foo: '123',
  bar: [1, 2, 3],
} as const

interface Length {
  length: number
}

const o: Length = {
  length: 3,
}

const hh: Length = 'ggg'

interface NEKO {
  foo?: string
  bar?: number
}

const neko1 = { hoge: 3 }
// エラー: Type '{ hoge: number; }' has no properties in common with type 'Options'
const neko2: NEKO = neko1
// エラー: Type '5' has no properties in common with type 'Options'.
const neko3: NEKO = 5
