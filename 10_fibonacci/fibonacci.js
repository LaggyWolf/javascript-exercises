const fibonacci = function(number) {
    let new_num = 1;
    let nums = [1,1];
    if (number < 0){
        return 'OOPS';
    };
    while (nums.length < number){
        new_num = nums[nums.length-1] + nums[nums.length-2];
        nums.push(new_num)
    };
    console.log(nums);
    return new_num;
};

// Do not edit below this line
module.exports = fibonacci;
