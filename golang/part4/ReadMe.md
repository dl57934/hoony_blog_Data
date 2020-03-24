# part4

## Method

Go는 class를 갖고 있지 않습니다. 그러나 타입과 위에 method를 정의할 수 있습니다.
method는 특별한 receiver arguments를 갖고 있는 함수입니다.

receiver는 자신의 arguments를 func와 method keyword 사이에 작성된다.

```go
package main

import (
 "fmt"
 "math"
)

type Vertex struct {
 X, Y float64
}

func (v Vertex) Abs() float64 {
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
 v := Vertex{3, 4}
 fmt.Println(v.Abs())
}
```

일반적인 함수 선언, 호출과의 차이점은 `v.Abs()`를 사용하여 마치 객체에 있는 메소드를 사용하고 있다.

Method는 단지 receiver arguments를 받는 함수입니다.

## Method continued

위와 다르게 구조체가 아닌 타입을 사용해도 됩니다.

아래 예제와 같이 method `Abs` method와 함께 `MyFloat` numeric type을 사용했습니다.

receiver의 타입은 메소드와 동일한 패키지안에 정의된 타입을 사용하여 method를 만들 수 잇다.

```go
package main

import (
 "fmt"
 "math"
)

type MyFloat float64

func (f MyFloat) Abs() float64 {
 if f < 0 {
  return float64(-f)
 }
 return float64(f)
}

func main() {
 f := MyFloat(-math.Sqrt2)
 fmt.Println(f.Abs())
}
```

## Pointer Receivers

Receiver에 Pointer를 사용하여 method를 만들 수 있다. 즉 `*T`와 같이 사용할 수 있다.

pointer receiver는 receiver points를 변경할 수 있다. method가 그들의 Receiver를 많이 변경시킬 필요가 있다면 value receiver 보다는 pointer receiver를 더 많이 사용해야한다.

Scale 메소드의 \*를 지워보면 v의 값이 변경되지 않은채 다른 결과가 나오는 것을 볼 수 있다.

```go
package main

import (
 "fmt"
 "math"
)

type Vertex struct {
 X, Y float64
}

func (v Vertex) Abs() float64 {
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
 v.X = v.X * f
 v.Y = v.Y * f
}

func main() {
 v := Vertex{3, 4}
 v.Scale(10)
 fmt.Println(v.Abs())
}
```

## Pointers and functions

위 예제의 `Abs()`와 `Scale()`을 함수로 작성 해보겠습니다.

```go
package main

import (
 "fmt"
 "math"
)

type Vertex struct {
 X, Y float64
}

func Abs(v Vertex) float64 {
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func Scale(v *Vertex, f float64) {
 v.X = v.X * f
 v.Y = v.Y * f
}

func main() {
 v := Vertex{3, 4}
 Scale(&v, 10)
 fmt.Println(Abs(v))
}
```

## Methods and pointer indirection

위의 비슷한 두 예제를 비교해보면 당연히 pointer가 arguments에 포함되어야 한다는 것을 알았을 것이다.

```go
var v Vertex
ScaleFunc(v, 5) // Compile Error
ScaleFunc(&v, 5)
```

pointer receiver과 함께있는 method를 호출할 때 receiver로 value 또는 pointer 중 하나를 가져온다.

```go
var v Vertex
v.Scale(5)
p := &v
p.Scale(10)
```

## Methods and pointer indirection(2)

함수들은 정확한 타입과 함께 value argument를 가져와야 한다.

```go
var v Vertex
fmt.Println(AbsFunc(v)) ok
fmt.Println(AbsFunc(&v))
```

value receiver와 함께있는 method가 호출될 때 receiver는 value 또는 pointer를 가져와야 한다.

```go
var v Vertex
fmt.Println(v.Abs())
p:=&v
fmt.Println(p.Abs())
```

이같은 경우에는 p.Abs()는 (\*p).Abs()와 동일하다.

```go
package main

import (
 "fmt"
 "math"
)

type Vertex struct {
 X, Y float64
}

func (v *Vertex) Abs() float64 {
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func AbsFunc(v Vertex) float64 {
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
 v := Vertex{3, 4}
 fmt.Println(v.Abs())
 fmt.Println(AbsFunc(v))

 p := &Vertex{4, 3}
 fmt.Println(p.Abs())
 fmt.Println(AbsFunc(*p))
}
```

## Choosing a value or pointer receiver

pointer receiver를 사용하는 방법은 두가지가 있습니다.

첫번째는 receiver pointer의 value를 변경할 수 있기 때문입니다.

두번째는 method가 호출될 때마다 value가 복사되는 것일 피하기 위해서 입니다.
이 같은 경우에는 구조체가 클수록 더 효율적이게 됩니다.

```go
package main

import (
 "fmt"
 "math"
)

type Vertex struct {
 X, Y float64
}

func (v *Vertex) Abs() float64 {
 return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
 v.X = v.X * f
 v.Y = v.Y * f
}

func main() {
 v := &Vertex{3, 4}
 fmt.Printf("Before scaling: %+v, Abs: %v\n", v, v.Abs())
 v.Scale(5)
 fmt.Printf("After scaling: %+v, Abs: %v\n", v, v.Abs())
}
```

위 예제에서 Scale과 Abs 둘다 receiver type이 &Vertex입니다. 비록 Abs method는 receiver가 변경되지 않아도 된다.

일반적으로 모든 method는 value 또는 pointer receivers를 주고있다. 그러나 둘다 혼합해서 사용하지 않는다.

## Interfaces

Interface의 경우 method의 선언의 모음으로 정의된다.

interface 타입의 value는 해당 메소드들을 구현하면 어떤 값이든 정할 수 있다.

```go
package main

import (
 "fmt"
 "math"
)

type Abser interface {
 Abs() float64
}

func main() {
 var a Abser
 f := MyFloat(-math.Sqrt2)
 v := Vertex{3, 4}

 a = f
 a = &v

 a = v //error value type v는 Abs() 구현하지 않음

 fmt.Println(a.Abs())
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
 if f < 0 {
  return float64(-f)
 }
 return float64(f)
}

type Vertex struct {
 X, Y float64
}

func (v *Vertex) Abs() float64 {
 return math.Sqrt(v.X*v.X + v.Y + v.Y)
}
```

## Interfaces are implemented implicitly

인터페이스 타입은 메소드를 구현함으로써 구현할 수 있다.
명백한 인터페이스는 정의와 구현을 떼어내어 재정렬 없이 어떤 패키지든 드러날 수 있다.

```go
package main

import "fmt"

type I interface {
 M()
}

type T struct {
 S string
}

func (t T) M() {
 fmt.Println(t.S)
}

func main() {
 var i I = T{"hello"}
 i.M()
}
```

## Interface values

interface values는 value와 정확한 타입의 tuple이라고 생각할 수 있습니다.

`(value, type)`

interface value는 구체적인 기본이되는 정확한 타입의 value를 고정한다.

```go
package main

import (
 "fmt"
 "math"
)

type I interface {
 M()
}

type T struct {
 S string
}

func (t *T) M() {
 fmt.Println(t.S)
}

type F float64

func (f F) M() {
 fmt.Println(f)
}

func main() {
 var i I

 i = &T{"Hello"}
 describe(i)
 i.M()

 i = F(math.Pi)
 describe(i)
 i.M()
}

func describe(i I) {
 fmt.Printf("(%v, %T)\n", i, i)
}
```

## Interface values with nil underlying values

인터페이스안에 정확한 값이 nil 이라면 그 메소드는 nil receiver라고 불린다.

몇몇 언어에서는 이러한 오류를 null pointer exception이라고하지만 go에서는 nil receiver라고 불리며 사용된다.

```go
package main

import (
 "fmt"
)

type I interface {
 M()
}

type T struct {
 S string
}

func (t *T) M() {
 if t == nil {
  fmt.Println("<nil>")
  return
 }
 fmt.Println(t.S)
}

func main() {
 var i I
 var t *T
 i = t
 describe(i)
 i.M()
}

func describe(i I) {
 fmt.Printf("(%v, %T)\n", i, i)
}
```

## Nil interface values

nil interface value는 value와 type 둘다 없다.

nil interface를 호출하는 것은 run-time error를 발생시킵니다.

```go
package main

import "fmt"

type I interface {
 M()
}

func main() {
 var i I
 describe(i)
 i.M()
}

func describe(i I) {
 fmt.Printf("(%v, %T)\n", i, i)
}
```

## The empty interface

interface 타입이 정확히 0개의 method를 갖고있으면 이는 empty interface라고 합니다.

`interface{}`

empty interface는 어떤 타입의 value라고 할당할 수있다.

empty interface는 정해진 타입이 없는 value를 다룰 때 유용하게 사용됩니다.

```go
package main

import "fmt"

func main() {
 var i interface{}
 describe(i)

 i = 42
 describe(i)

 i = "Hello"
 describe(i)
}

func describe(i I) {
 fmt.Printf("(%v, %T)\n", i, i)
}
```

## Type Assertions

Type Assertion은 interface value의 근본이 되는 value에 접근하도록 제공합니다.

`t := i.(T)`

이러한 코드는 i가 type T라고 주장하고 type T의 값을 t에 할당한다.

만약 i가 타입 T의 값이 아니라면 에러를 발생시킨다.

만약 i가 type T의 값이라는 것을 확인하기 위해 두개의 변수를 할당하면 두개의 값을 반환합니다.

`t, ok := i.(T)`

t는 i의 값이고 ok는 i의 타입이 T인지 boolean형을 반환한다.

```go
package main

import "fmt"

func main() {
 var i interface{} = "hello"

 s := i.(string)
 fmt.Println(s)

 s, ok := i.(string)
 fmt.Println(s, ok)

 f, ok := i.(float64)
 fmt.Println(f, ok)

 f = i.(float64)
 fmt.Println(f)
}
```

## Type Switch

A type switch는 몇몇의 type assertion을 할 수 있다.

type Switch는 기존 switch랑 사용법이 비슷하다. type switch 안에 있는 case는 정확한 타입을 작성하고 i의 type과 case 옆에 type이 동일한지 비교한다.

```go
switch v := i.(type){
 case T:
  //here v has type T
 case S:
  // here v has type S
 default:
 // 아무 타입도 매치하지 않는다.
}
```

이전에 assertion을 사용할때와 다르게 i.(T)가 이나라 i.(type)으로 사용한다.

```go
package main

import "fmt"

func main() {
 do(21)
 do("hello")
 do(true) // 일치하지 않음
}

func do(i interface{}) {
 switch v := i.(type) {
 case int:
  fmt.Printf("Twice %v is %v\n", v, v*2)
 case string:
  fmt.Printf("%q is %v bytes long\n", v, len(v))
 default:
  fmt.Printf("I don;t know about type %T\n", v)
 }
}
```

## Stringers

가장 흔히 사용되는 interface 중 하나는 fmt package로 이루어진 Stringer입니다.

```go
type Stringer interface{
    String() string
}
```

Stringer는 string 타입으로 작성할 수 있는 타입이다. fmt package는 value를 출력하는 것으로 보인다.

```go
package main

import "fmt"

type Person struct {
 Name string
 Age  int
}

func (p Person) String() string {
 return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
}

func main() {
 a := Person{"Arthur Dent", 42}
 z := Person{"Zaphod Beeblebrox", 9001}
 fmt.Println(a, z)
}
```

## Error

Go Programs는 erroe value와 함께 error 상태를 표현한다.

error는 fmt.Stringer와 비슷하게 만든다.

```go
type error interface {
    Error() string
}
```

함수들은 흔히 error value를 반환한다. 그리고 코드를 호출해 nil이랑 error랑 동일한지 테스팅함으로써 에러를 다룬다.

```go
i, err := strconv.Atoi("42")
if err != nil{
    fmt.Printf("couldn't convert number: %v\n", err)
    return
}
fmt.Println("Converted integer:", i)
```

nil error가 지적되면 성공이고, non-nil error로 지적되면 실패이다.

## Readers

io package는 정확히 io.Reader interface이다. 데이터의 stream 끝까지 읽고 나타낸다.

io.Reader는 아래와 같이 사용한다.

`func (T) Read(b []byte) (n int, err error)`

`Read`는 항상 byte slice 데이터를 받으며. 그리고 항상 byte의 수 그리고 error value를 반환한다.
또한 stream의 끝에 도달하면 io.EOF를 반환한다.

```go
package main

import (
 "fmt"
 "io"
 "strings"
)

func main() {
 r := strings.NewReader("Hello, Reader!")

 b := make([]byte, 8)
 for {
  n, err := r.Read(b)
  fmt.Printf("n = %v err = %v b = %v\n", n, err, b)
  fmt.Printf("b[:n] = %q\n", b[:n])
  if err == io.EOF {
   break
  }
 }
}
```
