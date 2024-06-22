import 'package:flutter/material.dart';
import 'package:portfolio/utils/web_color.dart';

class ElevatedButtonStyles{
  static ElevatedButtonThemeData getElevatedButtonStyles () => ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      padding: const EdgeInsets.all(15),
      elevation: 10,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(5)
      ),
      backgroundColor: WebColor.elevatedButtonBackgroundColor,
      foregroundColor: WebColor.elevatedButtonForegroundColor,
      textStyle: const TextStyle(
          color: WebColor.webPrimaryColor,
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: FontWeight.w500
      )
    )
  );
}