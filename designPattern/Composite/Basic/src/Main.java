public class Main {
    public static void main(String[] args){
        try{
            Directory rootdir = makeDirectory("root");
            Directory bindir = makeDirectory("bin");
            Directory tmpdir = makeDirectory("tmp");
            Directory usrdir = makeDirectory("usr");
            rootdir.add(bindir);
            rootdir.add(tmpdir);
            rootdir.add(usrdir);
            bindir.add(makeFile("vi", 10000));
            bindir.add(makeFile("latex", 20000));
            rootdir.printLine();

        }catch (FileTreatmentException e){
            e.printStackTrace();
        }
    }

    public static Directory makeDirectory(String name){
        return new Directory(name);
    }
    public static File makeFile(String name, int size){
        return new File(name, size);
    }
}
