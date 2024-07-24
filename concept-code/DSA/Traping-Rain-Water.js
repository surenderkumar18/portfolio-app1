function trapRainWater(height) {
  let total = 0,
    l = 0,
    r = height.length - 1,
    left_KiSabseUnchiWall = 0,
    right_KiSabseUnchiWall = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] > left_KiSabseUnchiWall) {
        left_KiSabseUnchiWall = height[l];
      } else {
        total += left_KiSabseUnchiWall - height[l];
      }
      l++;
    } else {
      if (height[r] > right_KiSabseUnchiWall) {
        right_KiSabseUnchiWall = height[r];
      } else {
        total += right_KiSabseUnchiWall - height[r];
      }
      r--;
    }
  }
  return total;
}

trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // OUTPUT: 6
trapRainWater([4, 2, 0, 3, 2, 5]); // OUTPUT: 9
