export default class AbstractPrint {
  open() {
    throw new Error("this is AbstractMethod");
  }

  print() {
    throw new Error("this is AbstractMethod");
  }

  close() {
    throw new Error("this is AbstractMethod");
  }

  display() {
    open();
    for (const i in [...Array(5).keys()]) {
      print();
    }
    close();
  }
}
