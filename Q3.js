// Q3
// Input :
//         set - an array which contains intervals in the form of [lower_bound, upper bound].
// newInterval - new interval array in the form of [lower_bound, upper bound].
// ==========================================================================================
// Output : an new array which contains non-overlapping intervals.
function nonOverlappingIntervals(set, newInterval){
    var newSet = new Array();
    var head = newInterval[0];
    var tail = newInterval[1];
    var merge_head = -1;
    var merge_tail = -1;
    var isMerged = false;
    for (var i in set) {
        if( (set[i][0] < head && set[i][1] < head) ||
            (set[i][0] > tail && set[i][1] > tail) ){
            if(merge_head != -1 && merge_tail != -1){
                newSet.push([merge_head, merge_tail]);
                console.log([merge_head, merge_tail]);
                isMerged = true;
            }
            newSet.push(set[i]);
            console.log(set[i]);
            continue;
        }
        else{
            if(set[i][0] < head && set[i][1] >= head && set[i][1] < tail){
                merge_head = set[i][0];
                merge_tail = tail;
            }
            else if(set[i][0] < head && set[i][1] >= tail){
                merge_head = set[i][0];
                merge_tail = set[i][1];
            }
            else if(set[i][0] >= head && set[i][0] <= tail && set[i][1] >= tail) {
                merge_head = (merge_head == -1 ? head : merge_head);
                merge_tail = set[i][1];
            }
            else {
                merge_head = (merge_head == -1 ? head : merge_head);
                merge_tail = tail;
            }
        }
    }
    if(!isMerged){
        newSet.push([merge_head, merge_tail]);
        console.log([merge_head, merge_tail]);
        isMerged = true;
    }
    return newSet;
}

// demo:
var set = [[1,2],[3,5],[6,7],[8,10],[12,16]];
var interval = [4,9]
nonOverlappingIntervals(set, interval);
