export const lengthOfLongestSubstring = function(s:string):number{
   let i = 0
   let max = 0
   let map = new Map()
   console.log(s.length)
   for(let k:number = 0; k <= s.length - 1; k++){
     let char = s[k]
     if(map.has(char)){
     // abddbaのdd前後のbのようにiが3まで進んだ際に
     // bの値が2のため、下記の判定がなくなるとiに2がセットされループが発生する
     // なので現在地のiより後戻りが発生しないように判定を追加
     if(map.get(char) > i ) i = map.get(char)
    }
   // 最大値がSlide Windowより大きいなら最大値更新
   if(max < k - i + 1) max = k - i + 1
   // -
    console.log(map);
     map.set(char, k + 1)
   }
   return max
 };
