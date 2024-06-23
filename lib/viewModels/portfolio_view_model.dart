import 'package:flutter/material.dart';
import 'package:portfolio/utils/assets.dart';

import '../models/skill_data.dart';
import '../models/social_data.dart';

class PortfolioViewModel extends ChangeNotifier{
  List<SocialData> socialData = [
    SocialData(socialLink: "https://facebook.com/nafishasantonmoy", iconPath: Assets.facebookIcon,color: Colors.white),
    SocialData(socialLink: "https://linkedin.com/in/nafishasantonmoy", iconPath: Assets.linkedInIcon,color: Colors.white),
    SocialData(socialLink: "https://github.com/Nafis71", iconPath: Assets.githubIcon,color: Colors.white),
    SocialData(socialLink: "https://x.com/Nafis_71", iconPath: Assets.twitterIcon,color: Colors.white),
  ];
  List<SkillData> skillData = [
    SkillData(skillName: "Flutter", skillIcons: Assets.flutterIcon),
    SkillData(skillName: "Dart", skillIcons: Assets.dartIcon),
    SkillData(skillName: "Java", skillIcons: Assets.javaIcon),
    SkillData(skillName: "Firebase", skillIcons: Assets.firebaseIcon),
    SkillData(skillName: "MongoDB", skillIcons: Assets.mongoDbIcon),
    SkillData(skillName: "Rest API", skillIcons: Assets.restApiIcon),
    SkillData(skillName: "Git", skillIcons: Assets.githubIcon),
    SkillData(skillName: "MySQL", skillIcons: Assets.mysqlIcon),
  ];

  void setSocialContainerColor(Color color, int index) {
    socialData[index].color = color;
    notifyListeners();
  }
}