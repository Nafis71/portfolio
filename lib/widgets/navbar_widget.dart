import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/viewModels/portfolio_view_model.dart';
import 'package:provider/provider.dart';
import 'package:responsive_framework/responsive_framework.dart';

class NavbarWidget extends StatelessWidget {
  final Function(GlobalKey key) scrollToSection;
  final GlobalKey skillSectionKey;
  final GlobalKey aboutSectionKey;
  final GlobalKey projectSectionKey;
  final GlobalKey contactMeSectionKey;

  const NavbarWidget(
      {super.key, required this.scrollToSection, required this.skillSectionKey, required this.aboutSectionKey, required this.projectSectionKey, required this.contactMeSectionKey,});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            "Portfolio",
            style: Theme
                .of(context)
                .textTheme
                .titleLarge,
          ),
          (ResponsiveBreakpoints.of(context).isDesktop) ? desktopRow() : const SizedBox.shrink(),
          (ResponsiveBreakpoints.of(context).isDesktop) ? ElevatedButton.icon(
            onPressed: () {
              context.read<PortfolioViewModel>().downloadResume();
            },
            label: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Text("Resume"),
                Gap(5),
                Icon(Icons.download_outlined)
              ],
            ),
          ) : const Icon(Icons.menu,size: 27,),
        ],
      ),
    );
  }
  Widget desktopRow(){
    return Row(
      children: [
        TextButton(
          onPressed: () {scrollToSection(aboutSectionKey);},
          child: const Text(
            "About Me",
          ),
        ),
        const Gap(30),
        TextButton(
          onPressed: () {
            scrollToSection(skillSectionKey);
          },
          child: const Text("Skills"),
        ),
        const Gap(30),
        TextButton(
          onPressed: () {scrollToSection(projectSectionKey);},
          child: const Text(
            "Projects",
          ),
        ),
        const Gap(30),
        TextButton(
          onPressed: () {scrollToSection(contactMeSectionKey);},
          child: const Text(
            "Contact Me",
          ),
        ),
      ],
    );
  }
}
