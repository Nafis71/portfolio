import 'package:flutter/material.dart';
import 'package:portfolio/views/homeScreen/desktop/home_layout_desktop.dart';
import 'package:responsive_framework/responsive_framework.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  ScrollController scrollController = ScrollController();
  final GlobalKey _skillSectionKey = GlobalKey();
  final GlobalKey _aboutSectionKey = GlobalKey();
  final GlobalKey _projectSectionKey = GlobalKey();
  final GlobalKey _contactMeSectionKey = GlobalKey();

  void _scrollToSection(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      print(Scrollable.of(context).mounted);
      Scrollable.ensureVisible(context,
          duration: const Duration(seconds: 1), curve: Curves.easeInOut);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (ResponsiveBreakpoints.of(context).isDesktop) {
      return Scaffold(
        body: HomeLayoutDesktop(
          skillSectionKey: _skillSectionKey,
          aboutSectionKey: _aboutSectionKey,
          projectSectionKey: _projectSectionKey,
          contactMeSectionKey: _contactMeSectionKey,
          scrollController: scrollController,
          scrollToSection: _scrollToSection,
        ),
      );
    }
    return Scaffold(
      body: Center(
        child: Container(
          height: 120,
          width: 200,
          color: Colors.red,
        ),
      ),
    );
  }
}
