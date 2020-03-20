# part3

## Pointer

Go는 C언어에 있는 Pointer를 사용할 수 있다. 이러한 표기법으로 사용할 수 있다. `*T` T는 value이다.
선언만 한 변수에 들어있는 값은 `nil`이다.

```go
var p *int
```

&연산자를 사용하면 위와 같이 변수를 만들지 않고도 pointer 변수를 선언할 수 있다.

```go
i:=42
p:=&i
```

연산자 표시는 포인터가 가리키는 값을 가져온다.

```go
fmt.Println(*p)
*p = 21
```

```go
package main

import "fmt"

func main() {
 i, j := 42, 2701

 p := &i
 fmt.Println(*p)
 *p = 21
 fmt.Println(i)

 p = &j
 *p = *p / 37
 fmt.Println(j)
}
```

## structs

struct는 필드들의 모음입니다.

```go
package main

import "fmt"

type Vertex struct {
 x int
 y int
}

func main() {

 fmt.Println(Vertex{1, 2})
}
```

struct에 각 필드는 .을 통해서 접근할 수 있습니다.

```go
package main

import "fmt"

type Vertex struct {
 x int
 y int
}

func main() {
 v := Vertex{1, 2}
 v.x = 4
 fmt.Println(v.x, v.y)
}
```

## Struct with Pointer

struct를 사용하며 pointer 또한 사용할 수 있습니다. go에서는 (*p)에서 *를 계속 사용하기 불편해서 p.X와 같이 사용할 수 있습니다.

```go
package main

import "fmt"

type Vertex struct {
 x int
 y int
}

func main() {
 v := Vertex{1, 2}
 p := &v
 p.x = 1e9
 fmt.Println(v) // {1000000000 2}
}
```

struct 리터럴은 필드의 값들을 줄세워 새롭게 할당할 수 있다.
또한 Name: value 표현식으로 직접 대입하려는 변수를 선택하여 넣을 수 있다.

```go
package main

import "fmt"

type Vertex struct {
 x int
 y int
}

var (
 v1 = Vertex{1, 2}
 v2 = Vertex{x: 1}
 v3 = Vertex{}
 p  = &Vertex{1, 2}
)

func main() {
 fmt.Println(v1, p, v2, v3)
 // {1 2} &{1 2} {1 0} {0 0}
}
```

## Arrays

`[n]T` 여기서 n은 사이즈이고 T는 type입니다.

```go
var a [10]int
```

위의 코드는 int 변수를 10개 선언한 것과 같습니다. 배열의 크기는 바꾸지 못하고 제한도 있지만 go언어에서는 array를 사용하는데 편리한 방식을 제공하고 있습니다.

```go
package main

import "fmt"

func main() {
 var a [2]string
 a[0] = "Hello"
 a[1] = "World"
 fmt.Println(a[0], a[1])
 fmt.Println(a)

 primes := [6]int{2, 3, 5, 7, 11, 13}
 fmt.Println(primes)
}
```

## Array Slice

배열의 사이즈는 고정되어 있지만 배열 중 요소들을 동적이게 선택하여 볼 수 있습니다.
`[]T` type T의 요소들을 slice 할 수 있습니다.

slice를 하기 위해서는 low와 high를 정해서 : 분리하여 작성해줍니다.
`a[low : high]` low의 값부터 high - 1까지의 값까지 반환됩니다.

```go
package main

import "fmt"

func main() {
 primes := [6]int{2, 3, 5, 7, 11, 13}

 var s []int = primes[1:4] // primes[1], primes[2], primes[3]
 fmt.Println(s)
}
```

slice는 단지 배열을 참조하는 것과 같습니다. slice를 해주면 값을 저장하지 못합니다. 그래서 slice의 반환 값을 저장하는 변수가 필요합니다.

또한 slices 된 배열이 변화가 생기면 기본 배열에 상호작용된다. slice가 변경되면 기반을 둔 배열 또한 값이 변합니다.

```go
package main

import "fmt"

func main() {
 names := [4]string{
  "John",
  "Paul",
  "George",
  "Ringo",
 }
 fmt.Println(names)

 a := names[0:2]
 b := names[1:3]
 fmt.Println(a, b)

 b[0] = "XXX"
 fmt.Println(a, b)
 fmt.Println(names)
}
[John Paul George Ringo]
[John Paul] [Paul George]
[John XXX] [XXX George]
[John XXX George Ringo]
```

배열을 작성할때 사이즈를 작성하지않고 코드를 작성할 수 있다.

```go
package main

import "fmt"

func main() {
 q := []int{2, 3, 5, 7, 11, 13}
 fmt.Println(q)

 r := []bool{true, false, true, true, false}
 fmt.Println(r)

 s := []struct {
  i int
  b bool
 }{
  {2, true},
  {3, false},
  {5, true},
  {7, true},
 }
 fmt.Println(s)
}
```

slice를 해줄 때 low, high 둘 중 하나를 생략하고 slice를 할 수 있습니다.
low를 생략하면 0부터 시작하게되고 high를 생략하면 마지막 값까지 코드가 참조합니다.

```go
package main

import "fmt"

func main() {
 s := []int{2, 3, 5, 7, 11, 13}

 s = s[1:4]
 fmt.Println(s)

 s = s[:2]
 fmt.Println(s)

 s = s[1:]
 fmt.Println(s)
}
[3 5 7]
[3 5]
[5]
```

slice는 length와 capacity를 갖습니다.

slice의 length는 포함된 요소의 개수를 갖습니다.

capacity는 기본 배열안에 들어있는 요소의 수이다. 요소의 수는 첫요소부터 센다.

slice의 length와 capacity는 len(s), cap(s)를 통해 얻을 수 있다.

또한 충분한 capacity가 제공되면 re-slicing의 slice의 길이를 연장할 수 있습니다.

```go
package main

import "fmt"

func main() {
 s := []int{2, 3, 5, 7, 11, 13}
 printSlice(s)

 // Slice the slice to give it zero length.
 s = s[:0]
 printSlice(s)

 // Extend its length.
 s = s[:4]
 printSlice(s)

 // Drop its first two values.
 s = s[2:]
 printSlice(s)

 printSlice(s[:])
}

func printSlice(s []int) {
 fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

len=6 cap=6 [2 3 5 7 11 13]
len=0 cap=6 []
len=4 cap=6 [2 3 5 7]
len=2 cap=4 [5 7]
len=2 cap=4 [5 7] // 첫 요소부터 capacity의 길이를 측정하는데 s[2:] 3번째 값부터 slice하여서 cap의 양이 줄어들었다.
```

## Nil slices

slice의 zero value는 Nil입니다. nil은 slice의 length와 capacity이 0일때와 기본 배열을 갖고 있지 않을 때입니다.

```go
package main

import "fmt"

func main() {
 var s []int
 fmt.Println(s, len(s), cap(s))
 if s == nil {
  fmt.Println("nil!")
 }
}
```

## Creating a slice with make

slice를 make 함수를 사용해서 만들 수 있습니다. make 함수는 0으로 구성된 배열을 할당하고 해당 배열을 참조하는 슬라이스를 반환합니다. capacity는 옵션으로 선택할 수 있습니다.

```go
package main

import "fmt"

func main() {
 a := make([]int, 5) // len 5 cap 5
 printSlice("a", a)

 b := make([]int, 0, 5) // len 0 cap 5
 printSlice("b", b)

 c := b[:2] // len 2 cap 5
 printSlice("c", c)

 d := c[2:5] // len 3 cap 3
 printSlice("d", d)
}

func printSlice(s string, x []int) {
 fmt.Printf("%s len=%d cap=%d %v\n", s, len(x), cap(x), x)
}
```

## Slice of Slice

Slice는 다른 slice를 포함하여 어떤 타입이든 가질 수 있다.

```go
package main

import (
 "fmt"
 "strings"
)

func main() {
 board := [][]string{
  []string{"_", "_", "_"},
  []string{"_", "_", "_"},
  []string{"_", "_", "_"},
 }

 board[0][0] = "X"
 board[2][0] = "O"
 board[1][2] = "X"
 board[1][0] = "O"
 board[0][2] = "X"

 for i := 0; i < len(board); i++ {
  fmt.Printf("%s\n", strings.Join(board[i], " "))
 }
}

func printSlice(s string, x []int) {
 fmt.Printf("%s len=%d cap=%d %v\n", s, len(x), cap(x), x)
}
```

## Appending to a slice

slice에 새로운 엘리먼트를 추가하는 것은 흔히있는 일이다. 그래서 go는 append라는 함수를 제공한다.

[append document](https://golang.org/pkg/builtin/#append)

`func append(s []T, vs ...T) []T`

첫 파라미터는 T 타입을 가진 slice를 넣어줍니다.

반환 결과는 모든 엘리먼트가 포함된 slice입니다.

s의 원조 배열이 주어지 값을 맞추기에 너무 작을 경우 더 큰 배열을 할당해줍니다.반환된 slice는 새롭게 할당된 배열을 가리킵니다.

```go
package main

import (
 "fmt"
)

func main() {
 var s []int
 printSlice(s)

 s = append(s, 0)
 printSlice(s)

 s = append(s, 1)
 printSlice(s)

 s = append(s, 2)
 printSlice(s)
}

func printSlice(s []int) {
 fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
```

## Range

range는 `for` 반복 이터레이터에 slice 또는 map을 사용하는 형식이다.

slice를 통과할 때 마다 두가지 값을 반환한다. index와 value이다.

```go
package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
 for i, v := range pow {
  fmt.Println(i, v)
 }
}
```

## Range continued

range를 통해 값을 할당 받을 때 skip 하고 싶은 부분이 있다면 `_`을 사용하면된다.

`for i, _ := range pow`

만약 오로지 index 만을 받고 싶다면 value를 생략해도 된다.

`for i := range pow`

```go
package main

import "fmt"

func main() {
 pow := make([]int, 10)

 for i := range pow {
  pow[i] = 1 << uint(i)
 }

 for _, value := range pow {
  fmt.Println(value)
 }
}
```

## Maps

map은 key 값을 통해서 값을 찾습니다. map의 첫 값은 nil입니다. nil map은 키를 갖고잊지 않고 추가할 수도 없습니다.

make 함수는 사용하기 위해 초기화 및 준비를 하여 주어진 타입으로 map을 반환합니다.

```go
package main

import "fmt"

type Vertex struct {
 Lat, Long float64
}

var m map[string]Vertex

func main() {
 m = make(map[string]Vertex)
 m["Bell Labs"] = Vertex{
  40.68433, -74.39967,
 }
 fmt.Println(m["Bell Labs"])
}
```

## Map Literals

Map literals는 struct literals랑 비슷하지만 key가 요구됩니다.

```go
package main

import "fmt"

type Vertex struct {
 Lat, Long float64
}

var m = make(map[string]Vertex){
 "Bell Labs":Vertex{
  40.68433, -74.39967
 },
 "Google":Vertex{
  37.42202, -122.08408
 },
}

func main() {
 fmt.Println(m)
}
```

## Mutating Maps

삽입 및 업데이트
`m[key] = elem`

엘리먼트 값 가져오기
`elem = m[key]`

엘리먼트 삭제하기
`delete(m, key)`

유요한 key 인지 확인하기
`elem, ok = m[key]`

key가 m에 존재하면 ok 값이 true이고 없다면 false입니다. (없을 때 elem은 zero value입니다)

```go
package main

import "fmt"

func main() {
 m := make(map[string]int)

 m["Answer"] = 42
 fmt.Println(m["Answer"])

 m["Answer"] = 48
 fmt.Println(m["Answer"])

 delete(m, "Answer")
 fmt.Println(m["Answer"])

 v, ok := m["Answer"]
 fmt.Println("The value: ", v, "Present?", ok)
}
```

## Function values

함수도 당연히 값을 취급된다. 그래서 함수를 다른 값들과 같이 넘겨줄 수 있다.

함수는 또한 함수의 파라미터 또한 return 값을 반환된다.

```go
package main

import (
 "fmt"
 "math"
)

func compute(fn func(float64, float64) float64) float64 {
 return fn(3, 4)
}

func main() {
 hypot := func(x, y float64) float64 {
  return math.Sqrt(x*x + y*y)
 }

 fmt.Println(hypot(5, 12))
 fmt.Println(compute(hypot))
 fmt.Println(compute(math.Pow))
}
```

## Function closures

closure는 특정 구역 밖에서 변수를 참조하는 함수 값이다. 함수에서 참조된 변수에 접근하고 할당할 수 있다.

```go
package main

import "fmt"

func adder() func(int) int {
 sum := 0
 return func(x int) int {
  sum += x
  return sum
 }
}

func main() {
 pos, neg := adder(), adder()
 for i := 0; i < 10; i++ {
  fmt.Println(
   pos(i),
   neg(-2*i),
  )
 }
}
```
