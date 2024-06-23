import 'package:animated_background/animated_background.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:lottie/lottie.dart';
import 'package:portfolio/viewModels/portfolio_view_model.dart';
import 'package:portfolio/widgets/intro_widget.dart';
import 'package:provider/provider.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../../../utils/assets.dart';
import '../../../utils/web_color.dart';
import '../../../wrappers/svg_image_loader.dart';

class HomeLayoutDesktop extends StatefulWidget {
  const HomeLayoutDesktop({super.key});

  @override
  State<HomeLayoutDesktop> createState() => _HomeLayoutDesktopState();
}

class _HomeLayoutDesktopState extends State<HomeLayoutDesktop>
    with TickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        SizedBox(
          height: MediaQuery.of(context).size.height,
          child: AnimatedBackground(
            behaviour: BubblesBehaviour(),
            vsync: this,
            child: const SizedBox.shrink(),
          ),
        ),
        SingleChildScrollView(
          child: Column(
            children: [
              const IntroWidget(),

            ],
          ),
        )
      ],
    );
  }
}
