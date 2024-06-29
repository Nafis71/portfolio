import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:responsive_framework/responsive_framework.dart';

class ContactMeWidget extends StatelessWidget {
  final GlobalKey contactMeSectionKey;

  const ContactMeWidget({super.key, required this.contactMeSectionKey});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      margin: EdgeInsets.symmetric(horizontal: (ResponsiveBreakpoints
          .of(context)
          .isDesktop) ? 100 : 30, vertical: 40),
      child: Column(
        key: contactMeSectionKey,
        children: [
          (ResponsiveBreakpoints
              .of(context)
              .isDesktop) ? Row(
            children: [
              Expanded(
                child: getTextFields(),
              ),
              const Gap(100),
              Expanded(
                  child: getLabel(context)
              ),
            ],
          ) : Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              getLabel(context),
              const Gap(20),
              getTextFields()
            ],
          )
        ],
      ),
    );
  }

  Widget getLabel(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        RichText(
          text: TextSpan(children: [
            TextSpan(
                text: "Let's ",
                style: Theme
                    .of(context)
                    .textTheme
                    .headlineLarge),
            TextSpan(
                text: "talk ",
                style: Theme
                    .of(context)
                    .textTheme
                    .labelLarge),
            TextSpan(
                text: "for\n",
                style: Theme
                    .of(context)
                    .textTheme
                    .headlineLarge),
            TextSpan(
                text: "Something special\n",
                style: Theme
                    .of(context)
                    .textTheme
                    .headlineLarge),
            const TextSpan(
              text: "\n",
            ),
            TextSpan(
                text:
                "I seek to push the limits of creativity to create high-engaging, user-friendly, and beautiful mobile apps for the users\n",
                style: Theme
                    .of(context)
                    .textTheme
                    .labelSmall),
          ]),
        ),
        Wrap(
          children: [
            const Icon(Icons.email, size: 27,),
            const Gap(20),
            Text("nhtonmoy2@gmail.com", style: Theme
                .of(context)
                .textTheme
                .titleMedium)
          ],
        ),
        const Gap(10),
        Wrap(
          children: [
            const Icon(Icons.phone, size: 27,),
            const Gap(20),
            Text("01304951029", style: Theme
                .of(context)
                .textTheme
                .titleMedium)
          ],
        )
      ],
    );
  }

  Widget getTextFields() {
    return Column(
      children: [
        TextFormField(
          decoration: const InputDecoration(
            hintText: "Enter Name",
          ),
        ),
        const Gap(15),
        TextFormField(
          decoration: const InputDecoration(
            hintText: "Email",
          ),
        ),
        const Gap(15),
        TextFormField(
          decoration: const InputDecoration(
            hintText: "Your Website (if exists)",
          ),
        ),
        const Gap(15),
        TextFormField(
          maxLines: 4,
          decoration: const InputDecoration(
            hintText: "How can I help?",
          ),
        ),
      ],
    );
  }
}
