import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/widgets/profile_picture_widget.dart';
import 'package:widget_and_text_animator/widget_and_text_animator.dart';

class IntroWidget extends StatelessWidget {
  const IntroWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Gap(100),
        Row(
          children: [
            const Gap(100),
            Expanded(
              child: Wrap(
                children: [
                  WidgetAnimator(
                    incomingEffect:
                        WidgetTransitionEffects.incomingSlideInFromLeft(
                            duration: const Duration(seconds: 4)),
                    child: RichText(
                      textAlign: TextAlign.justify,
                      text: TextSpan(
                        children: [
                          TextSpan(
                              text: "Hello I'm ",
                              style:
                                  Theme.of(context).textTheme.headlineMedium),
                          TextSpan(
                              text: "Nafis Hasan Tonmoy.\n",
                              style: Theme.of(context).textTheme.headlineLarge),
                          const TextSpan(text: "\n"),
                          TextSpan(
                              text: "Flutter ",
                              style: Theme.of(context).textTheme.headlineLarge),
                          TextSpan(
                              text: "Developer\n",
                              style: Theme.of(context).textTheme.labelLarge),
                          const TextSpan(text: "\n"),
                          TextSpan(
                              text: "Based In ",
                              style:
                                  Theme.of(context).textTheme.headlineMedium),
                          TextSpan(
                              text: "Bangladesh.\n",
                              style: Theme.of(context).textTheme.headlineLarge),
                          const TextSpan(text: "\n"),
                          const TextSpan(text: "\n"),
                          TextSpan(
                              style: Theme.of(context).textTheme.labelSmall,
                              text:
                                  "Enthusiastic and recently graduated Flutter developer eager to leverage my skills and knowledge to contribute to a fast-paced and collaborative development environment. Possess a strong foundation in Flutter development principles and a passion for creating beautiful and user-friendly mobile applications.\n\nAs an Android native app developer and a Flutter enthusiast, I thrive on turning innovative ideas into robust and visually appealing mobile applications. My journey in the world of code began with a love for problem-solving, and it has evolved into a mission to create software that not only meets but exceeds user expectations.Armed with expertise in Android native app development and proficiency in the Flutter framework, I bring a versatile skill set to the table. Whether it's building native Android applications that leverage the power of the platform or creating cross-platform apps with Flutter for a broader reach, I\'m all in!")
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const ProfilePictureWidget(),
          ],
        ),
      ],
    );
  }
}
