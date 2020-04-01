package main

import (
	"fmt"
	"reflect"
)

func isNumbers(numbers [4]int, c chan bool) {
	for number := range numbers {
		if reflect.TypeOf(number).String() == "int" {
			c <- true
		} else {
			c <- false
		}
	}
	close(c)
}

func main() {
	c := make(chan bool)
	numbers := [4]int{1, 1, 3, 2}

	go isNumbers(numbers, c)
	for i := range c {
		fmt.Println(i)
	}

}
