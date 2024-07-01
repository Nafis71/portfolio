import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:provider/provider.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:widget_and_text_animator/widget_and_text_animator.dart';

import '../utils/web_color.dart';
import '../viewModels/portfolio_view_model.dart';
import '../wrappers/svg_image_loader.dart';

class SocialCardsWidget extends StatelessWidget {
  const SocialCardsWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 50,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          (ResponsiveBreakpoints.of(context).isDesktop) ? const Gap(100) : const Gap(30),
          Expanded(
            child: WidgetAnimator(
              incomingEffect: WidgetTransitionEffects.incomingScaleUp(
                  duration: const Duration(seconds: 3),
                  delay: const Duration(seconds: 2)),
              atRestEffect: WidgetRestingEffects.size(numberOfPlays: 1),
              child: Consumer<PortfolioViewModel>(
                builder: (_, viewModel, __) {
                  return ListView.separated(
                    scrollDirection: Axis.horizontal,
                    itemCount:
                        context.read<PortfolioViewModel>().socialData.length,
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
                        context.read<PortfolioViewModel>().launch(
                            viewModel.socialData[index].socialLink,
                            isNewTab: true);
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
                      ),
                    ),
                    separatorBuilder: (context, index) => const Gap(20),
                  );
                },
              ),
            ),
          ),
        ],
      ),
    );
  }
}
