import 'package:flutter/material.dart';
import 'package:portfolio/utils/web_color.dart';

class WebTextStyles {
  static TextTheme getTextStyle() => TextTheme(
      titleMedium: const TextStyle(
          color: WebColor.webPrimaryColor,
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: FontWeight.bold),
      titleLarge: const TextStyle(
          color: WebColor.webPrimaryColor,
          fontSize: 24,
          fontFamily: "Poppins Bold",
          fontWeight: FontWeight.bold),
      titleSmall:const TextStyle(
          fontSize: 14, fontFamily: "Poppins", color: Colors.grey) ,
      headlineMedium: const TextStyle(
          color: WebColor.webPrimaryColor,
          fontSize: 35,
          fontFamily: "Poppins",
          letterSpacing: 1,
          fontWeight: FontWeight.bold),
      headlineLarge: const TextStyle(
        fontSize: 35,
        fontFamily: "Poppins Bold",
        letterSpacing: 1,
        fontWeight: FontWeight.normal,
        color: WebColor.webPrimaryColor,
      ),
      labelLarge: TextStyle(
          fontSize: 38,
          fontFamily: "Poppins Bold",
          letterSpacing: 0.2,
          fontWeight: FontWeight.normal,
          foreground: Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 2.3
            ..color = WebColor.webPrimaryColor),
      labelMedium: const TextStyle(
        fontSize: 16,
        fontFamily: "Poppins",
        color: Colors.white,
      ),
      labelSmall: const TextStyle(
          fontSize: 14, fontFamily: "Poppins", color: Colors.grey),);
}
