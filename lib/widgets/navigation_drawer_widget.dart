import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/utils/assets.dart';
import 'package:portfolio/viewModels/portfolio_view_model.dart';
import 'package:provider/provider.dart';


class NavigationDrawerWidget extends StatelessWidget {
  final GlobalKey skillSectionKey;
  final GlobalKey aboutSectionKey;
  final GlobalKey projectSectionKey;
  final GlobalKey contactMeSectionKey;
  final Function(GlobalKey) scrollToSection;
  const NavigationDrawerWidget({super.key,required this.scrollToSection, required this.skillSectionKey, required this.aboutSectionKey, required this.projectSectionKey, required this.contactMeSectionKey});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: Colors.white,
      child: SingleChildScrollView(
        child: Column(
          children: [
            const Gap(10),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  height: 200,
                  width: 200,
                  decoration: const BoxDecoration(
                    shape: BoxShape.circle,
                    image: DecorationImage(
                      image: AssetImage(Assets.profilePicture,),
                    )
                  ),
                )
              ],
            ),
            const Gap(10),
            const Divider(thickness: 0.3,),
            ListTile(
              leading: const Icon(Icons.person,size: 18,),
              title: Text("About Me",style: Theme.of(context).textTheme.labelSmall,),
              onTap: (){
                scrollToSection(aboutSectionKey);
                Scaffold.of(context).closeEndDrawer();
              },
            ),
            ListTile(
              leading: const Icon(Icons.build,size: 18,),
              title: Text("Skills",style: Theme.of(context).textTheme.labelSmall,),
              onTap: (){scrollToSection(skillSectionKey);
              Scaffold.of(context).closeEndDrawer();},
            ),
            ListTile(
              leading: const Icon(Icons.cases_rounded,size: 18,),
              title: Text("Projects",style: Theme.of(context).textTheme.labelSmall,),
              onTap: (){scrollToSection(projectSectionKey);
              Scaffold.of(context).closeEndDrawer();},
            ),
            ListTile(
              leading: const Icon(Icons.contact_mail_rounded,size: 18,),
              title: Text("Contact Me",style: Theme.of(context).textTheme.labelSmall,),
              onTap: (){
                scrollToSection(contactMeSectionKey);
                Scaffold.of(context).closeEndDrawer();
              },
            ),
            ListTile(
              leading: const Icon(Icons.download_outlined,size: 18,),
              title: Text("Download Resume",style: Theme.of(context).textTheme.labelSmall,),
              onTap: (){
                context.read<PortfolioViewModel>().downloadResume();
                Scaffold.of(context).closeEndDrawer();
              },
            )
          ],
        ),
      )
    );
  }
}
