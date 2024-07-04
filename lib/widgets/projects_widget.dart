import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:portfolio/viewModels/portfolio_view_model.dart';
import 'package:portfolio/wrappers/svg_image_loader.dart';
import 'package:provider/provider.dart';
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
          child: Consumer<PortfolioViewModel>(
            builder: (_, viewModel, __) {
              return LayoutBuilder(builder: (context, constraints) {
                final bool isDesktop = constraints.maxWidth > 769;
                return Column(
                  children: [
                    ListView.builder(
                    shrinkWrap: true,
                    primary: false,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: viewModel.projectData.length,
                    itemBuilder: (context, index) {
                      if(context.read<PortfolioViewModel>().isProjectViewLimited && index >= 3){
                        return null;
                      }
                      return (isDesktop)
                          ? Container(
                          margin: const EdgeInsets.symmetric(
                              horizontal: 100, vertical: 40),
                          padding: const EdgeInsets.all(30),
                          child: getContainerDesktop(index, context))
                          : Container(
                          margin: const EdgeInsets.symmetric(
                              horizontal: 20, vertical: 40),
                          padding: const EdgeInsets.all(30),
                          child: getContainerMobile(
                              index, context, constraints));
                    }),
                    (context.read<PortfolioViewModel>().isProjectViewLimited) ? ElevatedButton(onPressed: (){
                      context.read<PortfolioViewModel>().setIsProjectViewLimited = !context.read<PortfolioViewModel>().isProjectViewLimited;
                    }, child: const Text("See More")) : const SizedBox.shrink(),
                  ],
                );
              });
            },
          ),
        ),
      ],
    );
  }

  Widget getContainerMobile(
      int index, BuildContext context, BoxConstraints constraints) {
    return WidgetAnimator(
      incomingEffect: WidgetTransitionEffects.incomingSlideInFromLeft(
          duration: const Duration(seconds: 2)),
      child: Column(
        children: [
          projectImage(context, index, constraints.maxWidth * 0.7,
              maxHeight: constraints.maxWidth * 0.35),
          const Gap(20),
          projectDetails(index, context),
        ],
      ),
    );
  }

  Widget getContainerDesktop(int index, BuildContext context) {
    if (index % 2 == 0) {
      return WidgetAnimator(
        incomingEffect: WidgetTransitionEffects.incomingSlideInFromLeft(
            duration: const Duration(seconds: 2)),
        child: LayoutBuilder(builder: (context, constraints) {
          return Row(
            children: [
              Flexible(
                  child: projectImage(
                      context, index, constraints.maxWidth * 0.35)),
              const Gap(100),
              Expanded(child: projectDetails(index, context)),
            ],
          );
        }),
      );
    }
    return WidgetAnimator(
      incomingEffect: WidgetTransitionEffects.incomingSlideInFromRight(
          duration: const Duration(seconds: 2)),
      child: LayoutBuilder(builder: (context, constraints) {
        return Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Expanded(child: projectDetails(index, context)),
            const Gap(100),
            Flexible(
                child:
                    projectImage(context, index, constraints.maxWidth * 0.35)),
          ],
        );
      }),
    );
  }

  Widget projectImage(BuildContext context, int index, double maxWidth,
      {double? maxHeight}) {
    return Container(
      height: (maxHeight != null)
          ? maxHeight
          : MediaQuery.of(context).size.width * 0.18,
      width: maxWidth,
      decoration: BoxDecoration(
          image: DecorationImage(
              image: AssetImage(context
                  .read<PortfolioViewModel>()
                  .projectData[index]
                  .projectPicture),
              fit: BoxFit.fill),
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
                color: Colors.black.withOpacity(0.1),
                spreadRadius: 5,
                blurRadius: 30,
                offset: const Offset(0, 10))
          ]),
    );
  }

  Widget projectDetails(int index, BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Gap(30),
        Text(
          (index + 1).toString().padLeft(2, "0"),
          style: Theme.of(context).textTheme.titleLarge,
        ),
        const Gap(10),
        Text(
          context.read<PortfolioViewModel>().projectData[index].projectName,
          style: Theme.of(context).textTheme.titleLarge,
        ),
        const Gap(10),
        Wrap(
            children: context
                .read<PortfolioViewModel>()
                .projectData[index]
                .projectTechStacks
                .map(
                  (element) => Container(
                    width: 20,
                    height: 20,
                    margin:
                        const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                    child: SvgImageLoader(assetName: element, fit: BoxFit.contain,),
                  ),
                )
                .toList()),
        const Gap(10),
        Text(
          textAlign: TextAlign.justify,
          context
              .read<PortfolioViewModel>()
              .projectData[index]
              .projectDescription,
          style: Theme.of(context).textTheme.labelSmall,
        ),
        const Gap(20),
        InkWell(
          splashColor: Colors.transparent,
          onTap: () {
            context.read<PortfolioViewModel>().launch(
                context
                    .read<PortfolioViewModel>()
                    .projectData[index]
                    .projectLink,
                isNewTab: true);
          },
          child: const Icon(
            Icons.open_in_new,
            size: 27,
          ),
        ),
      ],
    );
  }
}
