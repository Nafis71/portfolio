import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/utils/assets.dart';

class ProjectsWidget extends StatelessWidget {
  const ProjectsWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Wrap(
          children: [
            RichText(
              text: TextSpan(children: [
                TextSpan(
                    text: "My ",
                    style: Theme.of(context).textTheme.headlineMedium),
                TextSpan(
                    text: "Projects ",
                    style: Theme.of(context).textTheme.headlineLarge),
              ]),
            ),
          ],
        ),
        SizedBox(
          child: ListView.builder(
            shrinkWrap: true,
            primary: false,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: 3,
            itemBuilder: (context, index) => Container(
              margin: const EdgeInsets.symmetric(horizontal: 80, vertical: 40),
              child: getContainer(index, context)
            ),
          ),
        ),
      ],
    );
  }
  Widget getContainer(int index, BuildContext context){
    if(index % 2 == 0){
      return Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          projectImage(context),

          projectDetails(index,context),
        ],
      );
    }
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        projectDetails(index, context),
        projectImage(context),
      ],
    );
    
  }
  
  Widget projectImage(BuildContext context){
    return Expanded(
      flex: 1,
      child: Row(mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Container(
            height: MediaQuery.of(context).size.height * 0.35,
            width:  MediaQuery.of(context).size.width * 0.3,
            decoration: BoxDecoration(
                image: const DecorationImage(
                    image: AssetImage(Assets.taskManagerPicture),fit: BoxFit.fill
                ),
                borderRadius: BorderRadius.circular(20),
                boxShadow: [BoxShadow(
                    color: Colors.black.withOpacity(0.1),
                    spreadRadius: 5,
                    blurRadius: 30,
                    offset: const Offset(0, 10)
                )]
            ),
          ),
        ],
      ),
    );
  }
  
  Widget projectDetails(int index, BuildContext context){
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Gap(30),
          Text((index+1).toString().padLeft(2,"0"), style: Theme.of(context).textTheme.titleLarge,),
          const Gap(10),
          Text("Task Manager",style: Theme.of(context).textTheme.titleLarge,),
          const Gap(10),
          Text( textAlign: TextAlign.justify,"This Flutter application is a comprehensive task manager designed to empower users to stay organized and achieve their goals effectively. It offers a suite of features that cater to various task management needs, built with a focus on security and user experience.",style: Theme.of(context).textTheme.labelSmall,),
          const Gap(20),
          Icon(Icons.open_in_new,size: 27,)
        ],
      ),
    );
  }
}
