# go part1

## Packages

모든 고 프로그램은 패키지로 구성되어 집니다. 프로그램은 일반적으로 main package에서 실행됩니다.
아래 예제에서는 fmt와 math/rand를 import 하고 있습니다.
페키지 이름은 import path의 마지막 엘리먼트와 같습니다. 예를 들어 아래의 경우에는 rand가 패키지입니다.

```go
package main

import (
 "fmt"
 "math/rand"
)

func main() {
 fmt.Println("my favorite number is ", rand.Intn(10))
}

```

## imports

```go
    import (
 "fmt"
 "math/rand"
)
```

이 코드에서는 여러 개의 "패키지"를 괄호로 싸서 import를 나타낼 수 있습니다.

또한 아래와 같이 작성할 수 있다.

```go
    import "fmt"
    import "math"
```

## Exported names

golang에서 export 될 때 이름은 대문자로 시작되어 집니다. 예를 들어 pi는 안되지만 아래의 Pi와 같아야합니다.
그래서 package를 import할 때 외부에서 접근할 수 있는지 참조해야합니다.

```go
package main

import (
 "fmt"
 "math"
)

func main() {
 fmt.Println(math.Pi)
}
```

## Functions

함수에서 파라미터가 0개 또는 많이 넣을 수 있습니다. 예를 들어 아래의 코드에서는 int type의 두개의 파라미터를 갖습니다.

타입은 변수명 뒤에 작성합니다.

```go
package main

import (
 "fmt"
)

func add(a int, b int) int {
 return a + b
}

func main() {
 fmt.Println(add(12, 3))
}
```

같은 타입의 연속되는 파라미터의 경우 타입을 마지막 파라미터를 제외하고 생략할 수 있습니다.

```go
func add(a ,b int) int {
    return a + b
}
```

여러개의 값을 반환할 수 있습니다.

```go
package main

import (
 "fmt"
)

func swap(a, b string) (string, string) {
 return b, a
}

func main() {
 a, b := swap("hello", "world")
 fmt.Println(a, b)
}

```

go의 반환 값에 이름을 지정하여 변수처럼 다룰 수 있습니다.
arguments가 존재하지 않는 return 표현식은 return value에 지정된 명칭이 반환된다. 이런 것들은 "naked" return 이라고 알려졌다.

```go
package main

import (
 "fmt"
)

func split(sum int) (x, y int) {
 x = sum * 4 / 9
 y = sum - x
 return
}

func main() {
 var a, c = split(12)
 fmt.Println(a, c)
}
```

## Variables

var 표현은 변수의 리스트를 선언한다. 마치 함수의 argument와 같이 타입은 제일 마지막에 작성합니다.
var 표현식은 package와 function과 같은 수준에서 사용할 수 있습니다.

```go
package main

import "fmt"

var c, java, python, js bool

func main() {
 var i int
 fmt.Println(i, c, java, python, js)
}

```

또한 선언과 동시에 각 변수에 초기화 시켜줄 수 있습니다. 만약 초기화가 있다면 type을 생략할 수 있습니다.

```go
package main

import "fmt"

var i, j int = 1, 2

func main() {
 var c, java, python, js = true, false, true, "js"
 fmt.Println(i, c, java, python, js)
}

```

함수안에서 짧은 할당식을 통해 명시적인 var를 대신해서 사용할 수 있습니다.
함수 밖에서는 모든 표현식이 키워드와 함께 사용됩니다. 그러므로 함수 밖에서는 사용할 수 없습니다.

```go
package main

import "fmt"

func main() {
 var i, j = 1, 2
 k := 3
 c, python, java := true, false, "no!"
 fmt.Println(i, c, java, python)
}
```

## Type

Go이 기본 타입들

```go
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128
```

위에 작성된 타입으로 변수를 작성할 수 있습니다. 그리고 블록 안에 변수를 선언하여 여러 개의 package를 참조하듯이 다수의 변수를 선언할 수 있습니다.

int, uint, uintptr의 경우 32 bit-System에서는 32 bit이고 64 bit-System에서는 64 bit이다.

```go
package main

import (
 "fmt"
 "math/cmplx"
)

var (
 Tobe   bool       = false
 MaxInt uint64     = 1<<64 - 1
 z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
 fmt.Printf("type: %T value: %v\n", Tobe, Tobe)
 fmt.Printf("type: %T value: %v\n", MaxInt, MaxInt)
 fmt.Printf("type: %T value: %v", z, z)
}
/~
type: bool value: false
type: uint64 value: 18446744073709551615
type: complex128 value: (2+3i)%
~/
```

초기화 없이 선언 만으로는 어떤 값이 들어가게 될까?

숫자랑 관련된 type이면 0
boolean 타입의 경우 false
string의 경우 ""

```go
package main

import "fmt"

func main() {
 var i int
 var f float64
 var b bool
 var s string
 fmt.Printf("%v %v %v %q\n", i, f, b, s)
}
0 0 false ""
```

## Type Conversion

Type(v)와 같은 표현식으로 type을 변형시킬 수 있습니다. 

```go
var i int = 42
var f float64 = float64(i)
var u uint = uint(f)

// 더 간단하게는 

i := 4
f := float64(i)
u := uint(f)
```

## Type inference

특정한 타입없이 변수를 선언할 때 그 변수 타입은 오른쪽 값에 의해 추론된다.

```go
var i int
j := i
```

그러나 오른쪽 측면이 숫자를 다루는 타입이 아니라면 새로운 변수는 값에 정확성에 의존해서 int, float64, complex128이 될 것입니다.

## Constant

var과 선언하는 방법이 비슷하지만 const keyword를 같이 사용해야한다.

사용할 수 있는 타입은 string, boolean, numeric values
Constant는 :=를 사용할 수 없습니다.

```go
package main

import "fmt"

const Pi = 3.14

func main() {
 const World = "Korea"
 fmt.Println("Hello", World)
 fmt.Println("Happy", Pi, "Day")

 const Truth = true
 fmt.Println("Go rules?", Truth)
}
```

## Numeric Constant

숫자형 상수는 높은 정확도를 가집니다.
타입을 갖고있지 않은 상수는 context에 의해 타입이 정해집니다.

``` go
package main

import "fmt"

const (
 Big = 1 << 100
 Small = Big >> 99
)

func needInt(x int) int { return x*10 + 1 }
func needFloat(x float64) float64 {
 return x * 0.1
}

func main() {
 fmt.Println(needInt(Small))
 fmt.Println(needFloat(Small))
 fmt.Println(needFloat(Big))
}
```