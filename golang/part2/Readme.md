# part2

## For

For loop문은 세개의 컴포넌트가 ; 세미콜론으로 분배되어있다.

1. 초기화: 처음 반복하기 전에 실행된다.
2. 조건문: 모든 반복을 하기전 조건이 맞는지 확인하고 실행한다.
3. 말미문: 모든 반복의 끝에 실행된다.

초기화해줄 때 := 짧은 변수 선언문을 자주 사용한다. 그리고 그 변수의 scope는 반복문 안에서만 유요하다.

조건문에서의 결과가 false가 되면 멈춘다.

```go
package main

import "fmt"

func main() {
 sum := 0
 for i := 0; i < 10; i++ {
  sum += i
 }
 fmt.Println(sum)
}
```

그리고 초기화와 말미문은 option으로 선택할 수 있다. 

```go
package main

import "fmt"

func main() {
 sum := 1
 for ; sum < 10; {
  sum += sum
 }
 fmt.Println(sum)
}
```

다른 언어에서는 일반적으로 for을 제외하고도 while이라는 문법이 존재하는데 go에서는 존재하지 않습니다. 하지만 go에서는 for문을 while 문과 같은 방법으로 사용할 수 있습니다.

```go
package main

import "fmt"

func main() {
 sum := 1
 for sum < 10 {
  sum += sum
 }
 fmt.Println(sum)
}
```

그리고 for문에서 조건문을 제외하면 무제한으로 돌아갑니다.

```go
package main

func main(){
    for{
    }
}
```

## If

for문과 사용법이 비슷하다. ()가 필요없지만 {}는 필요하다.

```go
package main

import (
 "fmt"
 "math"
)

func sqrt(x float64) string {
 if x < 0 {
  return sqrt(-x) + "i"
 }

 return fmt.Sprint(math.Sqrt(x))
}

func main() {
 fmt.Println(sqrt(2), sqrt(-4))
}
```

for과 같이 short statement를 사용하여 변수를 선언할 수 있다.
여기서 선언된 변수는 if문의 scope에서만 유요하다.

```go
package main

import (
 "fmt"
 "math"
)

func pow(x, n, lim float64) float64 {
 if v := math.Pow(x, n); v < lim {
  return v
 }
 return lim
}

func main() {
 fmt.Println(pow(3, 2, 10))
 fmt.Println(pow(3, 3, 20))
}
```

## If and else

if문에서 short statement를 활용하여 생성된 변수는 if와 연결된 else애서도 당연히 사용할 수 있다.

```go
package main

import (
 "fmt"
 "math"
)

func pow(x, n, lim float64) float64 {
 if v := math.Pow(x, n); v < lim {
  return v
 } else {
  fmt.Printf("%g >= %g\n", v, lim)
 }
 return lim
}

func main() {
 fmt.Println(pow(3, 2, 10))
 fmt.Println(pow(3, 3, 20))
}
```

## Switch

switch 문은 if else를 짧게 사용하기 위한 방법 중 하나이다. case의 옆에 있는 값과 동일한지 확인하며 실행한다.

switch문은 C, C++, Java ... 등등의 언어에 있다. go에서는 이 언들과의 차이점이 있는데 이는 단 하나의 case문만 실행한다는 것이다. 다른 언어의 경우 case문 끝에 break이라는 것을 작성해주었는데 go의 경우에는 자동적으로 끝에 붙여주어서 작성할 필요가 없다.

또한 Switch의 값이 꼭 상수여야할 필요가 없다. 그래서 아래와 같은 예제를 사용할 수 있다.

```go
package main

import (
 "fmt"
 "runtime"
)

func main() {
 fmt.Print("Go runs on ")
 switch os := runtime.GOOS; os {
 case "darwin":
  fmt.Println("OS X.")
 case "linux":
  fmt.Println("Linux.")
 default:
  fmt.Printf("%s.\n", os)
 }
}
```

Switch case는 위에서 아래로 case를 하나씩 실행시키며 case가 성공하게되면 멈추게 됩니다.

```go
package main

import (
 "fmt"
 "time"
)

func main() {
 fmt.Println("When's Saturday?")
 today := time.Now().Weekday()
 switch time.Saturday {
 case today + 0:
  fmt.Println("Today.")
 case today + 1:
  fmt.Println("Tomorrow.")
 case today + 2:
  fmt.Println("In two days.")
 default:
  fmt.Println("Too far away.")
 }
}
```

switch 문에 조건없이 사용할 수 있습니다.

```go
package main

import (
 "fmt"
 "time"
)

func main() {
 t := time.Now()
 switch {
 case t.Hour() < 12:
  fmt.Println("Good morning!")
 case t.Hour() < 17:
  fmt.Println("Good afternoon")
 default:
  fmt.Println("Good Evening")
 }
}
```

## defer

defer은 함수가 return할 때 실행하는 문구입니다. 연기된 구문은 즉각적으로 평가되지만 둘러싸고 있는 함수가 return할때까지 실행하지 않습니다.

```go
package main

import "fmt"

func main() {
 defer fmt.Println("world")

 fmt.Println("hello")
}
hello world
```

Defered 구문은 호출될 때마다 Stack에 쌓입니다. stack은 나중에 들어간 것이 먼저 나오기 때문에 아래의 코드가 9부터 출력합니다.

```go
package main

import "fmt"

func main() {
 fmt.Println("counting")

 for i := 0; i < 10; i++ {
  defer fmt.Println(i)
 }

 fmt.Println("done")
}
```