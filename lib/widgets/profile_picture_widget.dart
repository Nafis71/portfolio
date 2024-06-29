import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:widget_and_text_animator/widget_and_text_animator.dart';

import '../utils/assets.dart';

class ProfilePictureWidget extends StatelessWidget {
  const ProfilePictureWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return WidgetAnimator(
      incomingEffect: WidgetTransitionEffects.incomingSlideInFromRight(duration: const Duration(seconds: 4)),
      atRestEffect: WidgetRestingEffects.bounce(),
      child: Container(
        height:  MediaQuery.of(context).size.height * 0.45,
        width: ResponsiveBreakpoints.of(context).isDesktop ? MediaQuery.of(context).size.width * 0.45 : MediaQuery.of(context).size.width * 0.8,
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
    );
  }
}
