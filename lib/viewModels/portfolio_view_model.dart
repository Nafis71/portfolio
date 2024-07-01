import 'package:flutter/material.dart';
import 'package:portfolio/utils/assets.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:web/web.dart';
import 'dart:ui_web' as ui;
import '../models/project_data.dart';
import '../models/skill_data.dart';
import '../models/social_data.dart';

class PortfolioViewModel extends ChangeNotifier {
  List<SocialData> socialData = [
    SocialData(
        socialLink: "https://facebook.com/nafishasantonmoy",
        iconPath: Assets.facebookIcon,
        color: Colors.white),
    SocialData(
        socialLink: "https://linkedin.com/in/nafishasantonmoy",
        iconPath: Assets.linkedInIcon,
        color: Colors.white),
    SocialData(
        socialLink: "https://github.com/Nafis71",
        iconPath: Assets.githubIcon,
        color: Colors.white),
    SocialData(
        socialLink: "https://x.com/Nafis_71",
        iconPath: Assets.twitterIcon,
        color: Colors.white),
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

  List<ProjectData> projectData = [
    ProjectData(
        projectName: "Task Manager",
        projectDescription:
        "This Flutter application is a comprehensive task manager designed to empower users to stay organized and achieve their goals effectively. It offers a suite of features that cater to various task management needs, built with a focus on security and user experience.",
        projectLink: "https://github.com/Nafis71/task_manager",
        projectPicture: Assets.taskManagerPicture, projectTechStacks: [Assets.flutterIcon,Assets.dartIcon,Assets.restApiIcon,]),
    ProjectData(
      projectName: "NimbusNow",
      projectDescription:
      "NimbusNow, your go-to weather app for staying prepared and informed! NimbusNow provides comprehensive weather updates with an emphasis on ease of use and visual appeal. Whether you need to check the current conditions, explore detailed forecasts, or simply enjoy a visually pleasing interface, NimbusNow has you covered.",
      projectLink: "https://github.com/Nafis71/NimbusNow",
      projectPicture: Assets.weatherAppPicture,
        projectTechStacks: [Assets.flutterIcon,Assets.dartIcon,Assets.restApiIcon,]
    ),
    ProjectData(projectName: "Glide Web",
      projectDescription: "This Flutter-based browser app offers a feature-rich and user-friendly browsing experience. The home page includes a search bar, bookmarks, and a trending news section, with Google as the default search engine. Users can easily navigate the web by searching for content or entering URLs. Notable features include background playback for YouTube videos, transforming the browser into a music player, and integrated voice commands for hands-free searches. This browser is ideal for web browsing, staying updated on news, managing bookmarks, and enjoying YouTube music in the background.",
      projectLink: "https://github.com/Nafis71/glide_web",
      projectPicture: Assets.glideWebPicture,projectTechStacks: [Assets.flutterIcon,Assets.dartIcon,Assets.restApiIcon,])
  ];

  void setSocialContainerColor(Color color, int index) {
    socialData[index].color = color;
    notifyListeners();
  }

  void downloadResume(){
    HTMLAnchorElement()..href = ui.AssetManager().getAssetUrl(Assets.myResume)..download = "Resume.pdf"..click();
  }

  Future<void> launch(String url, {bool isNewTab = true}) async {
    await launchUrl(
      Uri.parse(url),
      webOnlyWindowName: isNewTab ? '_blank' : '_self',
    );
  }

}
