import 'package:animated_background/animated_background.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/widgets/contact_me_widget.dart';
import 'package:portfolio/widgets/footer_widget.dart';
import 'package:portfolio/widgets/intro_widget.dart';
import 'package:portfolio/widgets/projects_widget.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../../../widgets/navbar_widget.dart';
import '../../../widgets/skills_widget.dart';
import '../../../widgets/social_cards_widget.dart';

class HomeLayoutDesktop extends StatefulWidget {
  final ScrollController scrollController;
  final Function(GlobalKey key) scrollToSection;
  final GlobalKey skillSectionKey;
  final GlobalKey aboutSectionKey;
  final GlobalKey projectSectionKey;
  final GlobalKey contactMeSectionKey;

  const HomeLayoutDesktop(
      {super.key,
      required this.scrollController,
      required this.scrollToSection,
      required this.skillSectionKey,
      required this.aboutSectionKey,
      required this.projectSectionKey,
      required this.contactMeSectionKey});

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
            behaviour: RandomParticleBehaviour(options: const ParticleOptions(
              particleCount: 15,
              maxOpacity: 0.15,
              spawnMaxSpeed: 170
            )),
            vsync: this,
            child: const SizedBox.shrink(),
          ),
        ),
        SingleChildScrollView(
          controller: widget.scrollController,
          child: Column(
            children: [
              const IntroWidget(),
              const SocialCardsWidget(),
              (ResponsiveBreakpoints.of(context).isDesktop) ? const Gap(30) : const Gap(60),
              SkillsWidget(skillSectionKey: widget.skillSectionKey,),
              const Gap(20),
              ProjectsWidget(projectSectionKey: widget.projectSectionKey,),
              const Gap(20),
              ContactMeWidget(contactMeSectionKey: widget.contactMeSectionKey,),
              const Gap(20),
              const FooterWidget()
            ],
          ),
        ),
        NavbarWidget(
          scrollToSection: widget.scrollToSection,
          skillSectionKey: widget.skillSectionKey,
          aboutSectionKey: widget.aboutSectionKey,
          projectSectionKey: widget.projectSectionKey,
          contactMeSectionKey: widget.contactMeSectionKey,
        ),
      ],
    );
  }
}
