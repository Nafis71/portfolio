import 'package:flutter/material.dart';
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
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Gap(100),
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
        Row(
          key: skillSectionKey,
          children: [
            const Gap(20),
            Expanded(
                flex: 1,
                child: Consumer<PortfolioViewModel>(builder: (_,viewModel,__){
                  return GridView.builder(
                    physics: const NeverScrollableScrollPhysics(),
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        childAspectRatio: (.3/.2),
                        crossAxisSpacing: 10,

                        crossAxisCount:
                        (ResponsiveBreakpoints.of(context).isDesktop)
                            ? 4
                            : 2),
                    itemCount: viewModel.skillData.length,
                    shrinkWrap: true,
                    primary: false,
                    itemBuilder: (context, index) => Container(
                      alignment: Alignment.center,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SvgImageLoader(assetName: viewModel.skillData[index].skillIcons, fit: BoxFit.contain,width: MediaQuery.of(context).size.width * 0.025,),
                          const Gap(10),
                          Text(viewModel.skillData[index].skillName,style: Theme.of(context).textTheme.titleSmall,),
                        ],
                      ),
                    ),
                  );
                },)
            ),
            Expanded(child: SizedBox(
              height: MediaQuery.of(context).size.height * 0.4,
              child: Lottie.asset("assets/lotties/mobile.json",fit: BoxFit.contain,renderCache: RenderCache.drawingCommands),
            ))
          ],
        ),
      ],
    );
  }
}
