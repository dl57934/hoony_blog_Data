class AbstractPrint {
  constructor() {
    throw new Error("this is AbstractClass");
  }

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

class CharDisplay extends AbstractPrint {
  constructor(ch) {
    super();
    this.ch = ch;
    this.result;
  }

  open() {
    this.result += "<<";
  }

  print() {
    this.result += this.ch;
  }

  close() {
    this.result += ">>";
  }
}

const charDisplay = new CharDisplay("h");
charDisplay.display();
