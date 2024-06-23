import 'package:flutter/material.dart';
import 'package:portfolio/utils/assets.dart';

import '../models/social_data.dart';

class PortfolioViewModel extends ChangeNotifier{
  List<SocialData> socialData = [
    SocialData(socialLink: "https://facebook.com/nafishasantonmoy", iconPath: Assets.facebookIcon,color: Colors.white),
    SocialData(socialLink: "https://linkedin.com/in/nafishasantonmoy", iconPath: Assets.linkedInIcon,color: Colors.white),
    SocialData(socialLink: "https://github.com/Nafis71", iconPath: Assets.githubIcon,color: Colors.white),
    SocialData(socialLink: "https://x.com/Nafis_71", iconPath: Assets.twitterIcon,color: Colors.white),
  ];

  void setContainerColor(Color color, int index) {
    socialData[index].color = color;
    notifyListeners();
  }
}