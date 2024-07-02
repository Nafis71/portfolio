import 'package:flutter/material.dart';
import 'package:portfolio/utils/web_color.dart';

class OutlinedButtonStyle{
  static OutlinedButtonThemeData getOutlineButtonStyle()=> OutlinedButtonThemeData(
    style: OutlinedButton.styleFrom(
      backgroundColor: Colors.white,
      foregroundColor: WebColor.webPrimaryColor,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(5),
        side: const BorderSide(color: WebColor.webPrimaryColor,width: 5)
      ),
      textStyle: const TextStyle(
        fontSize: 12,
        fontWeight: FontWeight.bold,
        fontFamily: "Poppins"
      )
    )
  );
}