import 'package:flutter/material.dart';
import 'package:flutter_carousel_widget/flutter_carousel_widget.dart';
import 'package:gap/gap.dart';
import 'package:lottie/lottie.dart';
import 'package:provider/provider.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../viewModels/portfolio_view_model.dart';
import '../wrappers/svg_image_loader.dart';

class SkillsWidget extends StatelessWidget {
  final GlobalKey skillSectionKey;
  const SkillsWidget({super.key, required this.skillSectionKey});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          key: skillSectionKey,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            RichText(
              text: TextSpan(children: [
                TextSpan(
                    text: "My ",
                    style: Theme.of(context).textTheme.headlineMedium),
                TextSpan(
                    text: "Skills ",
                    style: Theme.of(context).textTheme.headlineLarge),
              ]),
            ),
          ],
        ),
        !ResponsiveBreakpoints.of(context).isDesktop ? mobileScrollingAnimation(context) : const SizedBox.shrink(),
        Row(
          children: [
            const Gap(20),
            Expanded(
                flex: 2,
                child: Consumer<PortfolioViewModel>(builder: (_,viewModel,__){
                  return FlutterCarousel.builder(itemCount: viewModel.skillData.length, itemBuilder: (context,index,pageViewIndex) =>Container(
                    color: Colors.transparent,
                    alignment: Alignment.center,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        SvgImageLoader(assetName: viewModel.skillData[index].skillIcons, fit: BoxFit.contain,width: (ResponsiveBreakpoints.of(context).isDesktop) ? MediaQuery.of(context).size.width * 0.024 : MediaQuery.of(context).size.width * 0.1,),
                        const Gap(10),
                        Text(viewModel.skillData[index].skillName,style: Theme.of(context).textTheme.titleSmall,),
                      ],
                    ),
                  ), options: CarouselOptions(
                    height: MediaQuery.of(context).size.height * 0.3,
                    autoPlay: true,
                    viewportFraction: 0.2,
                    initialPage: 3,
                    autoPlayAnimationDuration: const Duration(milliseconds: 800),
                    autoPlayInterval: const Duration(milliseconds: 1600),
                    enlargeCenterPage: true,
                    pageSnapping: false,
                    enableInfiniteScroll: true,
                    floatingIndicator: false
                  ));
                },)
            ),
            (ResponsiveBreakpoints.of(context).isDesktop) ? Expanded(child: mobileScrollingAnimation(context)) : const SizedBox.shrink(),
          ],
        ),
      ],
    );
  }
  Widget mobileScrollingAnimation(BuildContext context){
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.4,
      child: Lottie.asset("assets/lotties/mobile.json",fit: BoxFit.contain,renderCache: RenderCache.drawingCommands),
    );
  }
}
