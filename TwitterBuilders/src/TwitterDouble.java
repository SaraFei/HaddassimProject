import java.util.Scanner;

public class TwitterDouble {
    public static void rectangle(double height, double width) {

        if (Math.abs(height - width) > 5 || height == width) {
            System.out.println("area :" + String.format("%.2f", height * width));
        } else {

            System.out.println("extent :" + String.format("%.2f", height * 2 + width * 2));
        }
    }

    public static void trianglePerimeter(double width, double height) {

        double rib = 0, result = 0;
        rib = (Math.pow(width / 2, 2) + Math.pow(height, 2));
        rib = Math.sqrt(rib);
        result = (width + rib * 2);

        System.out.println("  extent :" + String.format("%.2f", result));


    }

    public static void PrintStarBuild(double height, double width) {
        int heightInt = (int) (height);
        int widthInt = (int) (width);

        int cntOfOodNum = 0, amongHeight = 0, lineCnt = 0, firstLine = 0;
        double addToFirstLine = 0;
        boolean flag = false;
        if (widthInt % 2 == 0 || (heightInt * 2) < widthInt) {//there is no option to print this triangle
            flag = true;
        }
        if (!flag) {//it's OK
            cntOfOodNum = (widthInt - 2) / 2;
            amongHeight = (heightInt - 2);//מס השורות בין לבין
            if (cntOfOodNum != 0) {
                lineCnt = amongHeight / cntOfOodNum;
                if (amongHeight % cntOfOodNum > 0) {//יש שארית חלוקה
                    addToFirstLine = (amongHeight % cntOfOodNum);
                    firstLine = (int) (addToFirstLine) + lineCnt;
                } else {
                    firstLine = lineCnt;//אם אין שארית חלוקה
                }
            } else {//there is no odd num between
                firstLine = amongHeight + 1;
            }
            PrintStars(heightInt, widthInt, firstLine, lineCnt);
        } else {
            System.out.println("לא ניתן להדפיס את המשולש");
        }

    }

    public static void PrintStars(int height, int width, int firstLine, int lineCnt) {
        int space = width / 2;
        int numOfLines = lineCnt;
        int numOfStars = 1;
        boolean flag = false;
        for (int i = 1; i <= height; i++) {
            if (i == 1 || i == height) {
                numOfLines = 1;
            } else if (i == 2) {
                numOfLines = firstLine;
            }
            for (int k = 0; k < numOfLines; k++) {
                for (int s = 0; s < space; s++) {
                    System.out.print(" ");
                }
                if (flag) {
                    i++;
                }//שלא יעלה על הפעם הראשונה שהוא נכנס
                //כי אז הוא מעלה אותו פעמיים
                if(numOfStars>width){
                    numOfStars=width;
                }
                for (int j = 1; j <= numOfStars; j++) {
                    flag = true;
                    System.out.print("*");
                }
                System.out.println();
            }
            flag = false;
            numOfLines = lineCnt;//אתחול בחזרה כי כל פעם מחדש אני צריכה לבדוק מה השורה
            numOfStars += 2;
            space--;
        }


    }

    public static void main(String[] args) {
        //This system print by request user a twitter
        //following the sentences here!
        Scanner in = new Scanner(System.in);
        int choose = 0, trianglePerimeterOrItsPrinting = 0;
        double height = 0, width = 0;
        do {
            do {
                System.out.println("Select a tower shape,");
                System.out.println(" for a rectangle press 1 and for a triangle press 2");
                System.out.println("for exit press 3");
                choose = in.nextInt();
            } while (choose != 1 && choose != 2 && choose != 3);
            if (choose != 3) {
                System.out.println("Enter height build");
                height = in.nextDouble();
                System.out.println("Enter width build");
                width = in.nextDouble();


                switch (choose) {
                    case 1:
                        rectangle(height, width);//calculate area or extent
                        break;
                    case 2:
                        do {
                            System.out.println("To calculate the perimeter of the triangle press 1.\n" + "To print press 2\n" +
                                    "Note that the triangle is isosceles");
                            trianglePerimeterOrItsPrinting = in.nextInt();
                        } while (trianglePerimeterOrItsPrinting != 1 && trianglePerimeterOrItsPrinting != 2);
                        switch (trianglePerimeterOrItsPrinting) {
                            case 1:
                                trianglePerimeter(width, height); //calculate extent
                                break;
                            case 2:
                                PrintStarBuild(height, width);//print by stars
                                break;
                        }

                }
            } else {
                System.out.println("Good-bye");
            }
        } while (choose != 3);


    }
}
