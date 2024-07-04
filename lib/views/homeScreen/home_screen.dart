import 'package:animated_background/animated_background.dart';
import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/widgets/navigation_drawer_widget.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../../widgets/contact_me_widget.dart';
import '../../widgets/footer_widget.dart';
import '../../widgets/intro_widget.dart';
import '../../widgets/navbar_widget.dart';
import '../../widgets/projects_widget.dart';
import '../../widgets/skills_widget.dart';
import '../../widgets/social_cards_widget.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with TickerProviderStateMixin {
  ScrollController scrollController = ScrollController();
  final GlobalKey _skillSectionKey = GlobalKey();
  final GlobalKey _aboutSectionKey = GlobalKey();
  final GlobalKey _projectSectionKey = GlobalKey();
  final GlobalKey _contactMeSectionKey = GlobalKey();

  void _scrollToSection(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(context,
          duration: const Duration(seconds: 1), curve: Curves.easeInOut);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          SizedBox(
            height: MediaQuery.of(context).size.height,
            child: AnimatedBackground(
              behaviour: RandomParticleBehaviour(
                  options: const ParticleOptions(
                      particleCount: 15, maxOpacity: 0.15, spawnMaxSpeed: 170)),
              vsync: this,
              child: const SizedBox.shrink(),
            ),
          ),
          SingleChildScrollView(
            controller: scrollController,
            child: Column(
              children: [
                const IntroWidget(),
                const SocialCardsWidget(),
                (ResponsiveBreakpoints.of(context).isDesktop)
                    ? const Gap(30)
                    : const Gap(60),
                SkillsWidget(
                  skillSectionKey: _skillSectionKey,
                ),
                const Gap(20),
                ProjectsWidget(
                  projectSectionKey: _projectSectionKey,
                ),
                const Gap(20),
                ContactMeWidget(
                  contactMeSectionKey: _contactMeSectionKey,
                ),
                const Gap(20),
                const FooterWidget()
              ],
            ),
          ),
          NavbarWidget(
            scrollToSection: _scrollToSection,
            skillSectionKey: _skillSectionKey,
            aboutSectionKey: _aboutSectionKey,
            projectSectionKey: _projectSectionKey,
            contactMeSectionKey: _contactMeSectionKey,
          ),
        ],
      ),
      endDrawer: NavigationDrawerWidget(
        scrollToSection: _scrollToSection,
        skillSectionKey: _skillSectionKey,
        aboutSectionKey: _aboutSectionKey,
        projectSectionKey: _projectSectionKey,
        contactMeSectionKey: _contactMeSectionKey,
      ),
    );
  }
  @override
  void dispose() {
    scrollController.dispose();
    super.dispose();
  }
}
