import 'package:flutter/material.dart';
import 'package:portfolio/views/homeScreen/desktop/home_layout_desktop.dart';
import 'package:responsive_framework/responsive_framework.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    if(ResponsiveBreakpoints.of(context).isDesktop){
      return const HomeLayoutDesktop();
    }
    return Scaffold(
      body: Center(child: Container(
        height: 120,
        width: 200,
        color: Colors.red,
      ),),
    );
  }
}
