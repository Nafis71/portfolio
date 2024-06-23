import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SvgImageLoader extends StatelessWidget {
  final String assetName;
  final double? width;
  final double? height;
  final BoxFit fit;
  const SvgImageLoader({super.key, required this.assetName, this.width, this.height, required this.fit});

  @override
  Widget build(BuildContext context) {
    return SvgPicture.asset(assetName,width: width, height: height,fit: fit,);
  }
}
