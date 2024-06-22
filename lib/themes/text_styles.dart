import 'package:flutter/material.dart';
import 'package:portfolio/utils/web_color.dart';

class WebTextStyles{
  static TextTheme getTextStyle() => const TextTheme(
    titleMedium: TextStyle(
      color: WebColor.webPrimaryColor,
      fontSize: 16,
      fontFamily: "Poppins",
      fontWeight: FontWeight.bold
    ),
    titleLarge: TextStyle(
        color: WebColor.webPrimaryColor,
        fontSize: 24,
        fontFamily: "Poppins Bold",
        fontWeight: FontWeight.bold
    ),
  );
}