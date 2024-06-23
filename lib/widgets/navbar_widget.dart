import 'package:flutter/material.dart';
import 'package:gap/gap.dart';

class NavbarWidget extends StatelessWidget {
  const NavbarWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return  Container(
      padding: const EdgeInsets.all(20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            "Portfolio",
            style: Theme.of(context).textTheme.titleLarge,
          ),
          Row(
            children: [
              TextButton(
                onPressed: () {},
                child: const Text(
                  "About Me",
                ),
              ),
              const Gap(30),
              TextButton(
                onPressed: () {},
                child: const Text("Skills"),
              ),
              const Gap(30),
              TextButton(
                onPressed: () {},
                child: const Text(
                  "Projects",
                ),
              ),
              const Gap(30),
              TextButton(
                onPressed: () {},
                child: const Text(
                  "Contact Me",
                ),
              ),
            ],
          ),
          ElevatedButton.icon(
            onPressed: () {},
            label: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Text("Resume"),
                Gap(5),
                Icon(Icons.download_outlined)
              ],
            ),
          ),
        ],
      ),
    );
  }
}
