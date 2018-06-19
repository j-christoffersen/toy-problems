import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the fibonacciModified function below.

    private static BigInteger[] dp;

    static BigInteger t(int i) {
      if (dp[i].intValue() != -1) {
        return dp[i];
      }

      dp[i] = t(i - 2).add(t(i - 1).multiply(t(i - 1)));
      return dp[i];
    }

    static BigInteger fibonacciModified(BigInteger t1, BigInteger t2, int n) {
      dp = new BigInteger[n + 1];
      for (int i = 0; i < dp.length; i++) {
          dp[i] = new BigInteger("-1");
      }
        
      dp[1] = t1;
      dp[2] = t2;

      return t(n);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] t1T2n = scanner.nextLine().split(" ");

        BigInteger t1 = new BigInteger(t1T2n[0]);

        BigInteger t2 = new BigInteger(t1T2n[1]);

        int n = Integer.parseInt(t1T2n[2]);

        BigInteger result = fibonacciModified(t1, t2, n);

        bufferedWriter.write(result.toString());
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}