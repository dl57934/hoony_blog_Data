public class DramaOpen implements Observer {
    @Override
    public void update(makingDramaAndMovie makingDramaAndMovie) {
        System.out.println("새 드라마"+makingDramaAndMovie.whatName+"가 오픈되었습니다.");
    }
}
