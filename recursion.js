function fun (n){

    if(n == 0){
        return;
    }
    console.log("fun");
    fun(n-1);
}

fun(10);