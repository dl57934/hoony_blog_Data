package main

import (
	"fmt"
)

type T struct {
	S string
}

func (t *T) M() {
	fmt.Println(t.S)
}

func main() {
	var x = [4]int{1, 2, 3, 4}
	t := x[:]
	fmt.Println("%v", t)
}
func describe(i *T) {
	fmt.Printf("(%v, %T)\n", i, i)
}
