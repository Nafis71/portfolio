import 'package:flutter/material.dart';
import 'package:portfolio/utils/web_color.dart';

class TextFieldStyle{
  static InputDecorationTheme getTextFieldStyle()=> InputDecorationTheme(
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(5),
      borderSide: const BorderSide(color: WebColor.webPrimaryColor,width: 1)
    ),
    focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(5),
        borderSide: const BorderSide(color: WebColor.webPrimaryColor,width: 2)
    ),
  );
}