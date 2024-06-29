import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/utils/web_color.dart';

class FooterWidget extends StatelessWidget {
  const FooterWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 80,
      color: WebColor.webPrimaryColor,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30),
            child: Text(
              "Portfolio",
              style: Theme
                  .of(context)
                  .textTheme
                  .labelMedium,
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "@2024 Portfolio",
                  style: Theme
                      .of(context)
                      .textTheme
                      .labelMedium,
                ),
                Text(
                  "Made in flutter",
                  style: Theme
                      .of(context)
                      .textTheme
                      .labelMedium,
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
