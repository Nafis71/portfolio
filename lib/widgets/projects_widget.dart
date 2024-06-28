import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/utils/assets.dart';
import 'package:portfolio/viewModels/portfolio_view_model.dart';
import 'package:provider/provider.dart';
import 'dart:js' as js;

import 'package:widget_and_text_animator/widget_and_text_animator.dart';

class ProjectsWidget extends StatelessWidget {
  final GlobalKey projectSectionKey;
  const ProjectsWidget({super.key, required this.projectSectionKey});

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
          key: projectSectionKey,
          child: Consumer<PortfolioViewModel>(builder: (_,viewModel,__){
            return ListView.builder(
              shrinkWrap: true,
              primary: false,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: viewModel.projectData.length,
              itemBuilder: (context, index) => Container(
                  margin: const EdgeInsets.symmetric(horizontal: 100, vertical: 40),
                  padding: const EdgeInsets.all(30),
                  child: getContainer(index, context)
              ),
            );
          },),
        ),
      ],
    );
  }
  Widget getContainer(int index, BuildContext context){
    if(index % 2 == 0){
      return WidgetAnimator(
        incomingEffect: WidgetTransitionEffects.incomingSlideInFromLeft(duration: Duration(seconds: 2)),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            projectImage(context,index),
            projectDetails(index,context),
          ],
        ),
      );
    }
    return WidgetAnimator(
      incomingEffect: WidgetTransitionEffects.incomingSlideInFromRight(duration: Duration(seconds: 2)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          projectDetails(index, context),
          projectImage(context,index),
        ],
      ),
    );
    
  }
  
  Widget projectImage(BuildContext context,int index){
    return Expanded(
      flex: 1,
      child: Row(mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            height: MediaQuery.of(context).size.height * 0.33,
            width:  MediaQuery.of(context).size.width * 0.3,
            decoration: BoxDecoration(
                image: DecorationImage(
                    image: AssetImage(context.read<PortfolioViewModel>().projectData[index].projectPicture),fit: BoxFit.fill
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
          Text(context.read<PortfolioViewModel>().projectData[index].projectName,style: Theme.of(context).textTheme.titleLarge,),
          const Gap(10),
          Text( textAlign: TextAlign.justify,context.read<PortfolioViewModel>().projectData[index].projectDescription,style: Theme.of(context).textTheme.labelSmall,),
          const Gap(20),
          InkWell(
              splashColor: Colors.transparent,
              onTap: (){
                js.context.callMethod("open",[context.read<PortfolioViewModel>().projectData[index].projectLink]);
              },
              child: Icon(Icons.open_in_new,size: 27,))
        ],
      ),
    );
  }
}
