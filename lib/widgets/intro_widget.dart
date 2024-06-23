import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:lottie/lottie.dart';
import 'package:provider/provider.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../utils/assets.dart';
import '../utils/web_color.dart';
import '../viewModels/portfolio_view_model.dart';
import '../wrappers/svg_image_loader.dart';
import 'navbar_widget.dart';
import 'dart:js' as js;

class IntroWidget extends StatelessWidget {
  const IntroWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const NavbarWidget(),
          const Gap(100),
          Row(
            children: [
              const Gap(100),
              Expanded(
                child: Wrap(
                  children: [
                    RichText(
                      textAlign: TextAlign.justify,
                      text: TextSpan(
                        children: [
                          TextSpan(
                              text: "Hello I'm ",
                              style: Theme.of(context)
                                  .textTheme
                                  .headlineMedium),
                          TextSpan(
                              text: "Nafis Hasan Tonmoy.\n",
                              style: Theme.of(context)
                                  .textTheme
                                  .headlineLarge),
                          const TextSpan(text: "\n"),
                          TextSpan(
                              text: "Flutter ",
                              style: Theme.of(context)
                                  .textTheme
                                  .headlineLarge),
                          TextSpan(
                              text: "Developer\n",
                              style:
                              Theme.of(context).textTheme.labelLarge),
                          const TextSpan(text: "\n"),
                          TextSpan(
                              text: "Based In ",
                              style: Theme.of(context)
                                  .textTheme
                                  .headlineMedium),
                          TextSpan(
                              text: "Bangladesh.\n",
                              style: Theme.of(context)
                                  .textTheme
                                  .headlineLarge),
                          const TextSpan(text: "\n"),
                          const TextSpan(text: "\n"),
                          TextSpan(
                              style: Theme.of(context).textTheme.labelSmall,
                              text:
                              "Enthusiastic and recently graduated Flutter developer eager to leverage my skills and knowledge to contribute to a fast-paced and collaborative development environment. Possess a strong foundation in Flutter development principles and a passion for creating beautiful and user-friendly mobile applications.\n\nAs an Android native app developer and a Flutter enthusiast, I thrive on turning innovative ideas into robust and visually appealing mobile applications. My journey in the world of code began with a love for problem-solving, and it has evolved into a mission to create software that not only meets but exceeds user expectations.Armed with expertise in Android native app development and proficiency in the Flutter framework, I bring a versatile skill set to the table. Whether it's building native Android applications that leverage the power of the platform or creating cross-platform apps with Flutter for a broader reach, I\'m all in!")
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Expanded(
                child: Container(
                  height: MediaQuery.of(context).size.height * 0.45,
                  width: MediaQuery.of(context).size.width * 0.45,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    image: const DecorationImage(
                        image: AssetImage(Assets.profilePicture)),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.cyan.withOpacity(0.25),
                        spreadRadius: 10,
                        blurRadius: 15,
                        offset: const Offset(0, 4),
                      )
                    ],
                  ),
                ),
              ),
            ],
          ),
          const Gap(20),
          SizedBox(
            height: 50,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                const Gap(100),
                Expanded(child: Consumer<PortfolioViewModel>(
                    builder: (_, viewModel, __) {
                      return ListView.separated(
                        scrollDirection: Axis.horizontal,
                        itemCount: context
                            .read<PortfolioViewModel>()
                            .socialData
                            .length,
                        itemBuilder: (context, index) => InkWell(
                            onHover: (value) {
                              if (value) {
                                viewModel.setSocialContainerColor(
                                    Colors.grey.shade400, index);
                              } else {
                                viewModel.setSocialContainerColor(
                                    Colors.white, index);
                              }
                            },
                            onTap: () {
                              js.context.callMethod('open', [viewModel.socialData[index].socialLink]);
                            },
                            child: Container(
                              padding: const EdgeInsets.all(10),
                              decoration: BoxDecoration(
                                color: viewModel.socialData[index].color,
                                border: const Border.fromBorderSide(BorderSide(
                                    color: WebColor.webPrimaryColor, width: 2)),
                                borderRadius: BorderRadius.circular(5),
                              ),
                              child: SvgImageLoader(
                                assetName: viewModel.socialData[index].iconPath,
                                fit: BoxFit.contain,
                                width: 25,
                              ),
                            )),
                        separatorBuilder: (context, index) => const Gap(20),
                      );
                    })),
              ],
            ),
          ),
          const Gap(20),
          const Divider(thickness: 0.4,),
          const Gap(20),
          Row(
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
            children: [
              const Gap(60),
              Expanded(
                flex: 2,
                  child: Consumer<PortfolioViewModel>(builder: (_,viewModel,__){
                    return GridView.builder(
                      physics: const NeverScrollableScrollPhysics(),
                      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          childAspectRatio: (.3/.2),
                          crossAxisSpacing: 10,

                          crossAxisCount:
                          (ResponsiveBreakpoints.of(context).isDesktop)
                              ? 5
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
                height: MediaQuery.of(context).size.height * 0.35,
                child: Lottie.asset("assets/lotties/mobile.json",fit: BoxFit.contain,renderCache: RenderCache.drawingCommands),
              ))
            ],
          ),
          const Gap(20),
        ],
      ),
    );
  }
}
