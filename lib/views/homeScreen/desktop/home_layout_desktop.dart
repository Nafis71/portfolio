import 'package:flutter/material.dart';

class HomeLayoutDesktop extends StatelessWidget {
  const HomeLayoutDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        margin: const EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Row(
              children: [
                Text("Personal", style: Theme.of(context).textTheme.titleMedium,),
              ],
            )
          ],
        ),
      ),
    );
  }
}
