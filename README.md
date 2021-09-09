# 운동 카운터 웹 앱

React Hook을 활용해 간단한 운동 카운터 앱을 만들었습니다.\
세트 지정, 세트 운동 후 휴식시간을 정할 수 있습니다.

https://kimpaksa.github.io/fitness_set_counter_page/

## 설치방법
1. npm install
2. npm run build
3. build 폴더 내부에 있는 파일들을 웹서버에 붙여 넣기
4. 해당 웹서버에서 확인.

## 사용방법
1. 원하는 세트수를 입력합니다.
  (ex: 10세트 하려면 10이라고 입력)
2. 세트 종료 후 얼마나 쉴건지를 정합니다.(초단위)
  (ex: 1세트 끝나고 60초 쉬려면 60이라고 입력)
3. 시작을 누르면 0set이라고 표시됩니다.
4. 1세트 운동을 마쳤다면 화면을 터치합니다. 그러면 0set->1set로 변경이 되며 정한 시간대로 휴식합니다.
5. 휴식이 끝나기 3초전 카운트다운을 알리는 Sound가 나옵니다.
6. 0초가 되었을때 시작되는 Sound가 나옵니다.
7. 이렇게 정해진 세트동안 반복합니다.
8. 완료되면, 완료되었다는 alert 표시 후 메인 설정 화면으로 이동됩니다.

## 왜만들었나?
요즘 살이 많이쪄서 다이어트 하려고 운동하는데 \
세트 운동할때 카운트를 외우고 있어야 하는게 불편해서 \
맛폰을 통해 몇세트 했는지 알 수 있는 앱을 만드는게 좋을 것 같아\
제작하게 되었음.

## to-do
1. [사용방법 -> 4번]에서 0set->1set로 바뀔때, 버튼이 눌리지 않도록 수정
