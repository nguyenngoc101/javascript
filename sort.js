function quicksort(a,first,last){
    var pivot,j,temp,i;

     if(first<last){
         pivot=first;
         i=first;
         j=last;

         while(i<j){
             while(a[i]<=a[pivot]&&i<j)
                 i++;
             while(a[j]>=a[pivot]&&i<j)
                 j--;
             temp=a[i];
             a[i]=a[j];
             a[j]=temp;
         }

         temp=a[pivot];
         a[pivot]=a[j];
         a[j]=temp;
         quicksort(a,first,j-1);
         quicksort(a,j+1,last);

    }
}

var arr= [5,2,3,4,5];
quicksort(arr, 0, arr.length-1)
for (var i in arr) {
  console.log(arr[i]);
}
