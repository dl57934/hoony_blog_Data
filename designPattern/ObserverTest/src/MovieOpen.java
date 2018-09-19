public class MovieOpen implements Observer {
    @Override
    public void update(makingDramaAndMovie makingDramaAndMovie) {
        System.out.println("새영화"+makingDramaAndMovie.whatName+"가 개봉되었습니다.");
    }
}
