import 'package:flutter/material.dart';
import 'package:portfolio/themes/text_styles.dart';
import 'package:portfolio/views/homeScreen/home_screen.dart';
import 'package:responsive_framework/responsive_framework.dart';

class Portfolio extends StatefulWidget {
  const Portfolio({super.key});

  @override
  State<Portfolio> createState() => _PortfolioState();
}

class _PortfolioState extends State<Portfolio> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const HomeScreen(),
      builder: (context, child) => ResponsiveBreakpoints.builder(
        child: child!,
        breakpoints: [
          const Breakpoint(start: 0, end: 450, name: MOBILE),
          const Breakpoint(start: 451, end: 1920, name: DESKTOP),
        ],
      ),
      theme: ThemeData(
        textTheme: WebTextStyles.getTextStyle(),
      ),
    );
  }
}
