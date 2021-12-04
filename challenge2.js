function hurdleRace(k, height) {
    let height_s = height.sort(function(a, b) { return a - b; });
    
    if(height_s[heightSort.length -1] > k){ return height_s[height_s.length -1] - k; }else{
     return 0;  }
  }