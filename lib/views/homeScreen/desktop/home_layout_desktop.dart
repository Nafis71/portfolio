import 'package:animated_background/animated_background.dart';
import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/utils/assets.dart';
import 'package:portfolio/utils/web_color.dart';
import 'package:portfolio/viewModels/portfolio_view_model.dart';
import 'package:portfolio/widgets/navbar_widget.dart';
import 'package:portfolio/wrappers/svg_image_loader.dart';
import 'package:provider/provider.dart';
import 'dart:js' as js;

class HomeLayoutDesktop extends StatelessWidget {
  const HomeLayoutDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(20),
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
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
                                text: "Hello I'am ",
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
                                "Enthusiastic and recently graduated Flutter developer eager to leverage my skills and knowledge to contribute to a fast-paced and collaborative development environment. Possess a strong foundation in Flutter development principles and a passion for creating beautiful and user-friendly mobile applications.")
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
                                  viewModel.setContainerColor(
                                      Colors.grey.shade400, index);
                                } else {
                                  viewModel.setContainerColor(
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
            )
          ],
        ),
      ),
    );
  }
}
