public class Main {
    public static void main(String[] args){
        makingDramaAndMovie makingDramaAndMovie = new makingDramaAndMovie();
        DramaOpen dramaOpen = new DramaOpen();
        MovieOpen movieOpen = new MovieOpen();
        makingDramaAndMovie.add(dramaOpen);
        makingDramaAndMovie.add(movieOpen);
        makingDramaAndMovie.excute();
    }
}
