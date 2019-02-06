from datetime import datetime
dt = datetime.now()
print("현재 년 %d년" % dt.year)
print("현재 월 %02d월" % dt.month)
print("현재 일 %02d일" % dt.day)

print("현재 시 %02d시" % dt.hour)
print("현재 분 %02d분" % dt.minute)
print("현재 초 %02d초" % dt.second)

#0:월, 1:화, 2:수, 3:목, 4:금, 5:토 6:일
print("현재 요일" + str(dt.weekday()))
