#include <stdio.h>
#include <time.h>


int main() {
  time_t timer;
  struct tm *t;

  timer = time(NULL); // 현재 시각을 초 단위로 얻기

  t = localtime(&timer); // 초를 분리하여 구조체에 넣기

  printf("%d년\n",   t->tm_year + 1900); // 년도가 1900 빼져있는 상황이다.
  printf("%02d월\n",   t->tm_mon + 1); // month 0 ~ 11
  printf("%02d일\n\n", t->tm_mday); 

  printf("현재 시: %d시\n",   t->tm_hour);
  printf("현재 분: %d분\n",   t->tm_min);
  printf("현재 초: %d초\n\n", t->tm_sec);

  printf("현재 요일: %d일\n", t->tm_wday); // 일요일은 0, 월요일은 1, 화요일은 2, 수요일은 3, 목요일은 4, 금요일은 5, 토요일은 6
  printf("올해 몇 번째 날: %d년 %d일 지남\n",t->tm_year+1900, t->tm_yday); // 1월 1일은 0, 1월 2일은 1
}

struct tm {
  int tm_sec;   /* Seconds */
  int tm_min;   /* Minutes */
  int tm_hour;  /* Hour (0--23) */
  int tm_mday;  /* Day of month (1--31) */
  int tm_mon;   /* Month (0--11) */
  int tm_year;  /* Year (calendar year minus 1900) */
  int tm_wday;  /* Weekday (0--6; Sunday = 0) */
  int tm_yday;  /* Day of year (0--365) */
  int tm_isdst; /* 0 if daylight savings time is not in effect) */

};