package com.example.Utils;

public class Validator {
    public static boolean validateX(float x) {
        return x >= -3.0f && x <= 3.0f;
    }
    public static boolean validateY(float y) {
        return y >= -5.0f && y <= 5.0f;
    }
    public static boolean validateR(float r) {
        return r >= 1 && r <= 4 && (r * 4) % 10 == 0;
    }
}
