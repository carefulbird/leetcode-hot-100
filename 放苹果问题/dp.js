function findApple(m, n) {
    let ans = 0;
    if(n<=1||m<=1){
        return 1
    }
    // 如果盘子比苹果多，那么
    if (n > m) {
        return findApple(m, m);
    }else {
        // 如果苹果多，那么盘子就会是 全部占满  ==> 只占一个，依次累加
        // 如果盘子全部铺满，那么就换算成 m- i，i 问题再递归
        for(let i=1;i<=n;i++){
            ans = findApple(m-i,i) + ans
        }
    }
    return ans
}