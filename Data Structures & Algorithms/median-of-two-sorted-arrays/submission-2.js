class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        let A = nums1;
        let B = nums2;
         if(B.length <A.length){
            [A,B] = [B,A]
         }
         const totalLength = A.length + B.length;
         const halflength = Math.floor((totalLength+1)/2);
         let left = 0;
         let right = A.length;

         while (left<=right){
            //initiate partition indexes
            let i= Math.floor((left+right)/2);
            let j= halflength-i;
            let Aleft = i>0 ? A[i-1] : Number.MIN_SAFE_INTEGER;
            let Bleft = j>0 ? B[j-1] : Number.MIN_SAFE_INTEGER;
            let Aright = i< A.length ? A[i] : Number.MAX_SAFE_INTEGER;
            let Bright = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;

             if(Aleft<=Bright && Bleft <=Aright){

                if(totalLength % 2 !== 0){
                    return Math.max(Aleft, Bleft)
                }
                    return (Math.max(Aleft, Bleft)+Math.min(Aright, Bright))/2;
             } else if(Aleft >Bright){
                right = i-1;
             } else {
                left = i+1;
             }
            
         }
    return -1;
    }
}
