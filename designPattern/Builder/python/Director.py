from Builder import Builder


class Director:

    def __init__(self, builder):
        self.builder = builder

    def constructor(self):
        self.builder.setTitle("Greet")
        self.builder.setText("아침에는")
        self.builder.setItems(["goodMorning", "좋은 아침입니다.", "좋아"])
        self.builder.setText("저녁에는")
        self.builder.setItems(["goodEvening", "멋진 저녁입니다.", "좋아"])
        self.builder.close()