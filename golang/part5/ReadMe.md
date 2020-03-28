# Part5

## Goroutines

gorutines는 go runtime에 의한 가벼운 스레드 관리입니다.

`go f(x, y, z)`

f, x, y, z는 최근 go routine에서 실행된다. f의 실행은 새로운 goroutine에서 일어난다.

Goroutines는 같은 주소 공간에서 실행된다. 그래서 메모리에 접근할 때 반드시 동기화하여 접근하여야 한다.
sync package는 유용한 primitives를 제공합니다. 하지만 다른 primitive가 있기 때문에 go에서는 필요하지 않을 것입니다.

go의 경우 해당 함수가 유요할 때만 실행하게 됩니다.

```go
package main

import (
 "fmt"
 "time"
)

func say(s string) {
 for i := 0; i < 5; i++ {
  time.Sleep(100 * time.Millisecond)
  fmt.Println(s)
 }
}

func main() {
 go say("hello")
 say("world")
}
```

## Channels

Channel은 `<-` 키워드를 사용하여 값을 보내고 받을 수있는 통로인 타입이다.

```go
ch <- v
v := <-ch
```

map과 channel과 같이 사용하기 전에 channel을 만들어야합니다.

`channel := make(chan int)`

기본적으로 다른 쪽에서 준비가 될때 까지 block을 보내고 받는다. 이러한 것은 gorutines가 lock이나 상태 값 없이도 동기화할 수 있다.

```go
package main

import "fmt"

func sum(s []int, c chan int) {
 sum := 0
 for _, v := range s {
  sum += v
 }
 c <- sum
}

func main() {
 s := []int{7, 2, 8, -9, 4, 0}

 c := make(chan int)

 go sum(s[len(s)/2:], c)
 go sum(s[:len(s)/2], c)
 x, y := <-c, <-c

 fmt.Println(x, y, x+y)
}
```

위 예제 코드는 slice의 값들을 더한다. 두개의 goroutine으로 나누었습니다.

## Buffered Channels

Channels에 버퍼를 설정할 수 있습니다. make를 초기화하는데 버퍼 길이를 두번째 파라미터로 제공할 수 있습니다.

`ch := make(chan int, 100)`

버퍼가 비어있을 때 block을 받고 버퍼가 꽉찼을 때는 channel block을 보냅니다.

```go
package main

import "fmt"

func main() {
 ch := make(chan int, 100)
 ch <- 2
 ch <- 1
 fmt.Println(<-ch)
 fmt.Println(<-ch)
}
```

## Range and Close

Sender가 더 이상 값을 보내지 않으면 close할 수 있다. receiver의 경우 channel이 close 되었는지 두번째 파라미터를 받음으로싸 상태를 확인할 수 있다.

`v, ok := <-ch`

ok가 false이면 channel이 close되어 더 이상 값을 받지 않는 것을 의미합니다.
`for i := range c`의 경우 close가 될때까지 실행됩니다.

```go
package main

import "fmt"

func fibo(c chan int, n int) {
 x, y := 0, 1
 for i := 0; i < n; i++ {
  c <- x
  x, y = y, x+y
 }
 close(c)
}

func main() {
 ch := make(chan int, 10)
 fibo(ch, cap(ch))
 for i := range ch {
  fmt.Println(i)
 }
}
```

## Select

Select는 하나의 case가 실행될때 까지 막습니다. 만약 다수의 값이 준비가 되면 랜덤으로 하나 선택합니다.

```go
package main

import "fmt"

func fibonacci(c, quit chan int) {
 x, y := 0, 1
 for {
  select {
  case c <- x:
   x, y = y, x+y
  case <-quit:
   fmt.Println("quit")
   return
  }
 }
}

func main() {
 c := make(chan int)
 quit := make(chan int)
 go func() {
  for i := 0; i < 10; i++ {
   fmt.Println(<-c)
  }
  quit <- 0
 }()
 fibonacci(c, quit)
}
```

## Default Selection

Selection안에 default case는 아무도 준비되지 않았을 때 실행됩니다.

```go
select{
    case i := <- c:
    // use i
    default:
    // receiving c would block
}
```
